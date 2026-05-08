import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

//Snack Bar: less annoying toast

@Injectable({
  providedIn: 'root',
})
export class Ui {

  constructor(public snackBar: MatSnackBar){

  }
  openSnackBar(message: string, action?: string){
    this.snackBar.open(message, action, {duration: 3000});

  }
}
