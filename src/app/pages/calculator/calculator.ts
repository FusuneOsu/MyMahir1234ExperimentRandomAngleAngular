import { Component } from '@angular/core';
import { SharedModules } from '../../../shared/shared.module'; //include SharedModules in calculator app

@Component({
  selector: 'app-calculator',
  imports: [...SharedModules], // triple for in imports to reference SharedModules
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
    //Calculator
  public num1: number = 0;
  public num2: number = 0;
  public result: number = 0;

  btnCalculate(operator: string){
    if(operator == "+"){
      //Need to parse the int as number instead of string
      this.result = this.num1 + this.num2;
    } else {
      this.result = (this.num1) - (this.num2);
    }
  }
}
