import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedModules } from '../../../shared/shared.module';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router, RouterLink } from '@angular/router';
import { Api } from '../../services/api';
import { Data } from '../../services/data';

/* This means: "Any object of type reportItem must have these three properties with these types." */
interface reportItem{
  title: string,
  category: string,
  date: string
}

@Component({
  selector: 'app-reports',
  imports: [...SharedModules, RouterLink],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports implements OnInit {
  /* array literal (or more specifically, an array initialization with an object literal inside). */
  public reportList: reportItem[] = // declares reportList as an array of reportItem type.
  [{ // = [{ ... }] — assigns an initial value: an array containing one object.
    /* { title: '...', category: '...', date: '...' } — this is an object literal that matches the reportItem interface. */
    title: 'Sample report title 1!', 
    category: 'Sample category', 
    date: '01/01/1970'
  }];
  /* : any — type is set to any (no type checking; could be typed as MatTableDataSource<reportItem> for better type safety).

  new MatTableDataSource(this.reportList) — creates a new instance of MatTableDataSource (from Angular Material) and passes reportList as the data source.

  Purpose: wraps the array data so the Material table component can render and sort/filter it. */
  public dataSource: any = new MatTableDataSource(this.reportList);
  /* : string[] — type is an array of strings.

  ['no', 'title', 'date', 'actions'] — array literal defining the column names to display in the table.
  
  Purpose: tells the Material table which columns to render and in what order. */
  public displayedColumns: string[] = ['no', 'title', 'date', 'actions'];

  constructor(
    private router: Router,
    private apiServices: Api,
    /* provides methods to manually trigger change detection and manage how Angular checks for updates
    
    detectChanges() — Manually run change detection for this component and its children immediately. Used when data changes outside Angular's normal detection cycle (e.g., after API calls, timers, or external events).
    
    markForCheck() — Mark the component as dirty so it gets checked on the next change detection cycle (useful with OnPush strategy).
    
    detach() — Detach the component from the change detection tree; it won't update until reattached.
    
    reattach() — Reattach to the change detection tree.
    
    checkNoChanges() — For testing; verifies no changes were detected. 
    
    When to use:
    -After async operations (API calls, timers).
    -With OnPush change detection strategy.
    -When data updates come from outside Angular (third-party libraries, WebSockets).
    -Performance optimization: skip automatic checks and do it manually when needed. */
    private cdr: ChangeDetectorRef,
    private dataService: Data
  ){

  }

  /* called when a user clicks the logout button (typically in the template). */
  onLogout(){
    /*  Removes the JWT token ('TOKEN') from local storage.
        Purpose: Clears the authentication token so the user is no longer authenticated. */ 
    this.dataService.removeStorage('TOKEN');
    /* Removes the user information ('USER') from local storage.
      Purpose: Clears all stored user data (name, email, id, etc.) to complete the logout. */
    this.dataService.removeStorage('USER');
    /* Uses Angular's Router to programmatically navigate to the /login route. */
    this.router.navigateByUrl('/login');
  }

  /* ngOnInit — Angular lifecycle hook that runs once when the component initializes.
      async — allows the function to use await for asynchronous operations. */
  async ngOnInit(){
    try{
      /* Makes an asynchronous HTTP GET request to /reports endpoint via the Api service.
          await pauses execution until the Promise resolves.
          Stores the response in the response variable (typed as any for no type checking). */
      let response: any = await this.apiServices.HttpGet('/reports');
      console.log(response);
      /* Extracts the data array from the API response.
         Assigns it to the component's reportList property to update the local data. */
      this.reportList = response.data;
      /* Creates a fresh MatTableDataSource (Material table wrapper) with the new report data. */
      this.dataSource = new MatTableDataSource(this.reportList);
      /* Maps over the data using spread operator ({...report}) — creates a shallow copy of each report (seems redundant). */
      this.dataSource.data = this.dataSource.data.map((report:any) => ({...report}));
      /* Manually triggers change detection to re-render the table with the new data. */
      this.cdr.detectChanges();
    }catch{
      /* Why the catch block is empty — Problem:

        Errors from the API call or any operation in the try block are silently ignored.
        
        If the API fails, the network times out, or response.data is undefined, nothing happens.

        Makes debugging difficult because you have no error feedback. 
        
        Better practice: */
        
        // catch(error: any){
        // console.error('Failed to load reports:', error);
        // // Optionally show error message to user
        // // Or set a default empty list
        // this.reportList = [];
        // } 
    }
  }
}
