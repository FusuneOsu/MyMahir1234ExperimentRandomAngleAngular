// Injectable: Angular decorator that marks this class as a service that can be injected into components
import { Injectable } from '@angular/core';
// MatSnackBar: Angular Material component for displaying brief notifications (like toast messages)
import { MatSnackBar } from '@angular/material/snack-bar';

//Snack Bar: less annoying toast

// @Injectable({ providedIn: 'root' }): Makes this service available application-wide (singleton pattern)
@Injectable({
  providedIn: 'root',
})
// export class Ui: The service class name
export class Ui {
  // Injects the MatSnackBar service from Angular Material
  // Makes it available as a public property so methods can use it
  constructor(public snackBar: MatSnackBar){

  }
  // Takes a required message parameter and optional action parameter
  // message: The text to display
  // action: Optional button text (like "Undo" or "Close")
  // {duration: 3000}: Shows the notification for 3 seconds (3000ms) before auto-dismissing
  openSnackBar(message: string, action?: string){
    this.snackBar.open(message, action, {duration: 3000});

  }
}
