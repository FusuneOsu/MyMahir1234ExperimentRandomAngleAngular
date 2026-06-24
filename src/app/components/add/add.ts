import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModules } from '../../../shared/shared.module';


@Component({
  selector: 'app-add',
  imports: [...SharedModules],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  public todoForm: any = FormGroup;

  constructor(
    /* private formBuilder: FormBuilder — This is a service injected into the component. It's a tool for building forms.

    formBuilder creates todoForm (in the constructor): 

    The formBuilder uses its .group() method to create a form object and assigns it to this.todoForm.

    [formGroup]="todoForm" in the HTML — This binds the form object (not the builder) to the template:

    So the flow is:

    formBuilder (the tool) → creates → todoForm (the form object)
    [formGroup]="todoForm" → uses → the form object */
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<Add>,
    /* A decorator that tells Angular's dependency injection system to inject the MAT_DIALOG_DATA token. This is a special Material Dialog token that contains data passed when opening the dialog. 
    
    Declares a public property called "data" with type any that will hold the injected data. */
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    /* Creates a form control called "title" and pre-fills it with
    data?.title if data exists (useful for editing existing todos) */
    this.todoForm = this.formBuilder.group({
      title: data?.title || '' 
    });
  }

  /* As the user types, Angular's reactive forms automatically capture the input into this.todoForm. */
  onSubmit()
  {
    let formData = this.todoForm.value;
    let title = formData.title;

    // dialogue box closes when there is no input
    if (title !='') this.dialogRef.close(title); //dialogue box closes when there is no input
  }

  onCancel(){this.dialogRef.close();}

}