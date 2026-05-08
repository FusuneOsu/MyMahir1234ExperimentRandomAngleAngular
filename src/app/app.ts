import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Toolbar } from "./components/toolbar/toolbar";
import { Data } from './services/data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, MatButtonModule, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('MyAngular2026');
  public pageTitle: string='Home';

  ngOnInit(){}
  constructor(private data: Data)
  {
    this.data.observeEvent().subscribe
    (
      (data: any) => {this.pageTitle=data;}
    )
  }

  

  //welcome to Angular type shit

  //scope of variables example
  // saveData(){
  //   this.name = 'abx';
  //   let user_name = 'def';
  //   if(this.name == 'abx'){
  //     user_name = 'hij';
  //     let password = '1234';
  //   } else if (this.name == 'Ali Abu'){
  //     password = '5678';
  //   }

  //uhhhh idk why is this here
  saveData(){
    let age: number = 25;

  }


}