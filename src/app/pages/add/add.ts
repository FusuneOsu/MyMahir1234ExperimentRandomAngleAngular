/* Component (@angular/core): decorator that declares an Angular component and its metadata.
ElementRef (@angular/core): wrapper around a native DOM element used for direct DOM access.
OnInit (@angular/core): lifecycle interface for implementing ngOnInit() initialization logic.
FormBuilder (@angular/forms): helper service to build reactive FormGroup/FormControl structures.
FormGroup (@angular/forms): container that groups related form controls for reactive forms.
Validators (@angular/forms): collection of built-in synchronous form validators (e.g., required).
ActivatedRoute (@angular/router): provides access to information about the current route.
Router (@angular/router): service to navigate imperatively and manage route state.
ViewChild (@angular/core): decorator to get a reference to a child component or DOM element. */
import { Component, ElementRef, OnInit } from '@angular/core';
import { SharedModules } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Ui } from '../../services/ui';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-add',
  imports: [...SharedModules],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})

export class Add implements OnInit{
  public reportForm: FormGroup;
  public id: any;
  public selectedFile: any = { name: '' };
  public imageUrl: string | null = null;
  // declares a reference to the file input DOM element so the component can access it directly
  /* Example usage:
      Trigger file picker: this.fileInput.nativeElement.click()
      Clear selection: this.fileInput.nativeElement.value = '' */
  @ViewChild('fileInput' , {static: false}) // finds the template element with #fileInput after view init (not during server-side/static rendering).
  fileInput!: ElementRef; // a property of type ElementRef (non-null asserted) that holds the native DOM element wrapper.

  constructor( // () - Dependency Injection (DI)
    // declare the external services, utilities, or components that your current class needs to function
    public formBuilder: FormBuilder,
    public apiService: Api,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public uiServices: Ui
  ){
    // {} - basic class initialization code execution
    this.reportForm = this.formBuilder.group({ // builds a FormGroup named reportForm with three controls - title, date, and category.
      /* Each control is initialized with an empty string ('') and a Validators.required rule 
      so the control is invalid until a value is provided. 
      
      Purpose: 
      -bind inputs in the template to reportForm (e.g., [formGroup]="reportForm" / formControlName="title"), 
      -validate user input, read values via this.reportForm.value
      -check validity with this.reportForm.invalid before submitting
      */
      title: ['', Validators.required], // title control: starts as empty string, must be filled in to be valid
      date: ['', Validators.required], // date control: starts as empty string, must be filled in to be valid
      category: ['', Validators.required] // category control: starts as empty string, must be filled in to be valid
    })
  };

  // handler invoked when a file input emits a change event
  onFileSelected(event: any){
      const file: File = event.target.files[0]; // Grabs the first selected file from the input's files FileList
      if(file) { 
        this.selectedFile = file; // Stores the File object on the component for later upload by onSubmit()
        if(this.imageUrl) URL.revokeObjectURL(this.imageUrl); // If there's an existing image preview URL, revoke it to free memory before creating a new one.
        this.imageUrl = URL.createObjectURL(file); // Creates a temporary URL for the selected file that can be used as a src in an <img> tag to preview the image before uploading.
      }
  }
  
  ngOnDestroy(){
    if(this.imageUrl) URL.revokeObjectURL(this.imageUrl); // When the component is destroyed, if there's an image preview URL, revoke it to free memory and prevent leaks.
  }

  //async vs awake API something something
  //display data on fields when editing after click pencil
  async ngOnInit(){
    /* Retrieves the 'id' parameter from the current route's snapshot. 
    If the URL is something like /reports/edit/123, this.id will be '123'. 
    This is used to determine if we're editing an existing report (id exists) or creating a new one (id is null). */
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); 
    if(this.id){ 
      try{
        // Makes an asynchronous GET request to the API endpoint /reports/{id} to fetch the report data for the given id.
        let response: any = await this.apiService.HttpGet('/reports/'+this.id);
        if(response.success){
          /* If the API call is successful, it extracts the report data from the response and 
          populates the form fields with the report's title, category, and date (after parsing the date format). */
          let report = response.data; 
          this.reportForm.setValue({ // Sets the values of the form controls to the corresponding properties of the report object.
            title: report.title, // report.title is assigned to the title form control
            category: report.category, // report.category is assigned to the category form control
            date: this.parseApiDate(report.date) // report.date is parsed using the parseApiDate method and assigned to the date form control
          })
          console.log(report.image_path) 
          this.imageUrl = this.apiService.baseURL + '/' + report.image_path; // Constructs the full URL for the report's image by combining the API's baseURL with the image_path from the report data. This URL can be used to display the existing image in the edit form.
          
          /* report.image_path is a string like uploads/reports/abc.jpg
          .split('/') breaks that string into an array of parts:
          ['uploads', 'reports', 'abc.jpg']
          So file_name[0] = uploads
          file_name[1] = reports
          file_name[2] = abc.jpg
          */
          let file_name = report.image_path.split('/');
          /* this.selectedFile is currently an object used to hold file info
          It sets the property name on that object to the last part of the path

          Why not file_name[1]?

          file_name[1] might be the folder name "reports", not the file name.
          file_name[2] is the actual file name "abc.jpg".
          */
          this.selectedFile['name'] = file_name[2];
        }
      }catch(error){
        console.error(error);
      }
    };
  }
  // ************************************************************************
  // ************************************************************************
  // ************************************************************************
  
  // function to change date format to string format
  /*
   * Parses a date value from the API into a JavaScript Date object.
   * @param value - The date value to parse (string, Date, or null).
   * @returns The parsed Date object or null if parsing fails.
   */
  private parseApiDate(value: string | Date | null): Date | null { 
    if (!value) {
      return null;
    }
    if (value instanceof Date) { // If the value is already a Date object, return it as is.
      return value;
    }
    if (typeof value !== 'string') { // If the value is not a string (and not a Date), it's an unsupported type, so return null.
      return null;
    }

    // Try ISO format first
    const isoDate = new Date(value); // Attempt to parse the string as an ISO date (e.g., "2024-06-01T00:00:00Z"). If the string is in a valid ISO format, this will create a Date object.
    if (!isNaN(isoDate.getTime())) { // If the resulting Date object is valid (getTime() does not return NaN), return the Date object.
      return isoDate;
    }

    // Support dd/mm/yyyy or dd-mm-yyyy from the API
    /* The regular expression /^([0-3]\d)[\/\-]([0-1]\d)[\/\-](\d{4})$/ 
    is used to match date strings in the format of dd/mm/yyyy or dd-mm-yyyy. 
    
    exec(value) exec(value) tests the input string against the regex pattern. 
    If it matches, it returns an array of captured groups; if it doesn't match, it returns null. */
    const dmy = /^([0-3]\d)[\/\-]([0-1]\d)[\/\-](\d{4})$/.exec(value);
    if (dmy) {
      const day = Number(dmy[1]); // The first captured group (dmy[1]) represents the day part of the date string. It is converted from a string to a number using Number().
      const month = Number(dmy[2]) - 1; // JavaScript Date months are zero-indexed (0 = January, 1 = February, ..., 11 = December), so we subtract 1 from the month number to get the correct month index.
      const year = Number(dmy[3]); // The third captured group (dmy[3]) represents the year part of the date string. It is also converted from a string to a number.
      return new Date(year, month, day);
    }

    return null; // If none of the parsing attempts succeed, return null to indicate that the date could not be parsed.
  }

  /* Formats a Date object or date string into a string in the format dd/mm/yyyy. */
  private formatDateToString(value: Date | string | null): string | null {
    if (!value) {
      return null;
    }

    /* If the value is already a Date object, use it directly; 
    if it's a string, attempt to create a Date object from it. 
    If the resulting Date object is invalid (getTime() returns NaN), return null. 
    Otherwise, format the date into dd/mm/yyyy string format. */
    const date = value instanceof Date ? value : new Date(value); // If value is already a Date, use it; if it's a string, try to parse it as a Date.
    if (isNaN(date.getTime())) { // checks if the parsing was valid
      return null;
    }

    /* ${} is a JavaScript template literal syntax for inserting values into strings
    The backticks ` enable this syntax (not single/double quotes) */
    const day = `${date.getDate()}`.padStart(2, '0'); // Get the day of the month (1–31) and pad it with a leading zero if necessary
    const month = `${date.getMonth() + 1}`.padStart(2, '0'); // Get the month (zero-indexed so need to +1) and pad it with a leading zero if necessary
    const year = date.getFullYear(); // Get the full year
    return `${day}/${month}/${year}`; // return date formatted as dd/mm/yyyy string "05/06/2024"
  }

  // ************************************************************************
  // ************************************************************************
  // ************************************************************************

  

  async onSubmit(

  ){
    if (this.reportForm.invalid){ // If the form is invalid (e.g., required fields are missing), do not proceed with submission and simply
      return;
    }

    try{
      const rawData: any = this.reportForm.value; // Extracts the raw form data from the reportForm FormGroup. This will be an object containing the values of the form controls, 
      // e.g., { title: 'Report Title', date: '2024-06-01', category: 'Category' }.
      const reportData: any = { 
        ...rawData, // Creates a new object reportData that starts as a shallow copy of rawData using the spread operator (...). This means reportData will initially have the same properties and values as rawData.
        date: this.formatDateToString(rawData.date) ?? rawData.date // Then it overrides the date property of reportData with a formatted string version of the date. It calls the formatDateToString method to convert the date into dd/mm/yyyy format. If formatDateToString returns null (e.g., if the date is invalid), it falls back to using the original rawData.date value.
      }

      // Creates a new FormData object, which is used to construct key-value pairs for form submission, especially when including files.
      const formData = new FormData();
      formData.append('title', reportData.title); // Appends the title from reportData to the FormData object with the key 'title'.
      formData.append('date', reportData.date); // Appends the date from reportData to the FormData object with the key 'date'.
      formData.append('category', reportData.category); // Appends the category from reportData to the FormData object with the key 'category'.

      // if(this.selectedFile) formData.append('image', this.selectedFile, this.selectedFile.name);
      // ChatGPT fix, not from original code
      if (this.selectedFile instanceof File) { // Checks if this.selectedFile is an instance of the File class, which means it is a valid file object that can be uploaded.
        formData.append('image', this.selectedFile, this.selectedFile.name); // If it is a valid File, it appends it to the FormData object with the key 'image'. The second argument is the file itself, and the third argument is the filename that will be sent to the server.
      }

      let message: string = 'Report submitted successfully';
      
      if(this.id){
        // If this.id exists, it means we are editing an existing report, so we make a PUT request to update the report at the endpoint /reports/update/{id} with the form data. The API is expected to handle this as an update operation.
        var res = await this.apiService.httpPost('/reports/update/'+this.id, formData, 'put');
        message = 'Report updated successfully'
      } else {
        // If this.id does not exist, it means we are creating a new report, so we make a POST request to the endpoint /reports/add with the form data. The API is expected to handle this as a create operation.
        var res = await this.apiService.httpPost('/reports/add', formData);
      }

      if(res){
        this.uiServices.openSnackBar(message, 'OK') // Displays a snackbar notification to the user with the message indicating whether the report was submitted or updated successfully. The 'OK' action allows the user to dismiss the snackbar.
      }

      this.router.navigateByUrl('/reports') // After successfully submitting or updating the report, it navigates the user back to the /reports page, which likely shows a list of reports. This provides a seamless user experience by returning them to the main reports view after their action is completed.
    }catch(error)
    {
      console.log(error);
    }
  };

}
