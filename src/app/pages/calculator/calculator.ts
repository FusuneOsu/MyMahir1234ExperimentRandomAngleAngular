import { Component } from '@angular/core'; //marks a standard TypeScript class as an Angular component
import { SharedModules } from '../../../shared/shared.module'; //include custom SharedModules in calculator app

@Component({ //The @Component decorator that configures your component
  selector: 'app-calculator', //HTML tag name used to display this component
  imports: [...SharedModules], // ... means spread operator to include everything from your SharedModules
  templateUrl: './calculator.html', // Points to the HTML file that defines this component's UI
  styleUrl: './calculator.scss', // Points to the SCSS stylesheet
})
export class Calculator { //Declares and exports the class so other parts of your app can use it
    //Calculator
  public num1: number = 0; //number type encompasses int and float
  public num2: number = 0;
  public result: number = 0;

  btnCalculate(operator: string){
    if(operator == "+"){ // + operater passed from HTML
      //Need to parse the int as number instead of string
      this.result = this.num1 + this.num2; // this refers to the current instance of the Calculator class.

      // if two instances
      // const calc1 = new Calculator();
      // const calc2 = new Calculator();

      // calc1.num1 = 5;   // calc1's num1
      // calc2.num1 = 10;  // calc2's num1 (different)

    } else { // - operator passed from html
      this.result = (this.num1) - (this.num2);
    }
  }
}
