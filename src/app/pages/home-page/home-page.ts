import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
// makes this class's contents be able to be used by other classes or frontend
export class HomePage {
  public inputText: string = '';
  public name: string = 'Ali Abu';

  // function which handles inputText from html and after the user clicks button, it will
  // popup the result of 5+10 
  // it also contains nested function calcArea
  btnClick(){
    this.name = this.inputText;
    const user_name = 'Ousmane';

    let result = calcArea(5, 10);
    alert('THe result is ' + result);

    /* btnClick() — Class Method
    Defined at the class level
    Belongs to the HomePage class
    Can be called from HTML: (click)="btnClick()"
    Can access class properties: this.name, this.inputText 
    
    function calcArea — Nested Function 
    Defined inside btnClick()
    Only exists in local scope (only during btnClick() execution)
    Can only be called from inside btnClick() — nowhere else can access it
    Cannot access this (class properties) 
    
    TypeScript/JavaScript automatically moves function declarations to the top before execution.
    Best practice: define the function before calling it. */
    function calcArea (width: number, height: number){
      let area = width * height;
      return area;
    }
  }
}
