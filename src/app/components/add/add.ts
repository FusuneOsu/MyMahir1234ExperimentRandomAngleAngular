import { Component, inject } from '@angular/core';
import { SharedModules } from '../../../shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add',
  imports: [...SharedModules],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  public todoForm: any = FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<Add>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.todoForm = this.formBuilder.group({
      title: data?.title || ''
    });
  }

  onSubmit()
  {
    let formData = this.todoForm.value;
    let title = formData.title;

    // dialogue box closes when there is no input
    if (title !='') this.dialogRef.close(title); //dialogue box closes when there is no input

  }

  onCancel(){this.dialogRef.close();}

}