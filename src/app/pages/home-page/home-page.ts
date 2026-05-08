import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  public inputText: string = '';
  public name: string = 'Ali Abu';

  btnClick(){
    this.name = this.inputText;
    const user_name = 'Ousmane';

    let result = calcArea(5, 10);
    alert('THe result is ' + result);

    function calcArea (width: number, height: number){
      let area = width * height;
      return area;
    }
  }
}
