import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedModules } from '../../../shared/shared.module';
import { Title } from '@angular/platform-browser';
import { F } from '@angular/cdk/keycodes';
import { Add } from '../../components/add/add';
import { MatDialog } from '@angular/material/dialog';
import { ValueChangeEvent } from '@angular/forms';
import { ConvertPipe } from '../../pipes/convert-pipe';
import { Data } from '../../services/data';

interface TodoItem {
  title: string,
  selected: boolean
}

@Component({
  selector: 'app-todo',
  imports: [...SharedModules, ConvertPipe], 
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit{

  public todoList: TodoItem[] = [
    {title: 'Wash clothes', selected: false},
    {title: 'Do homework', selected:true},
    {title: 'Buy groceries', selected:false}
  ]

  constructor
  (
    public dialog: MatDialog, 
    private cdr: ChangeDetectorRef, //refresh component when data updates
    private dataService: Data
  )
  {

  }

  ngOnInit()
  {
    const data: any = this.loadStorage('TODO') || [];
    this.todoList = data;
  }

  //tick or untick checkbox
  onSelected(index: number) 
  {this.todoList[index].selected = !this.todoList[index].selected;
  }

  onAdd()
  {
    const dialogRef = this.dialog.open(Add);
    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this.todoList.push({ title: result, selected: false});
        this.cdr.detectChanges();
        this.dataService.saveStorage('TODO', this.todoList);
      }
    });
  }

  onDelete(index: number)
  {
    let confirmation = confirm('Are you sure you want to delete this item?');
    if(confirmation)
    {
      this.todoList.splice(index, 1);
    }this.dataService.saveStorage('TODO', this.todoList);
  }

  onClear()
  {
    let confirmation = confirm('delete?')
    if(confirmation){this.todoList=[];}
    this.dataService.saveStorage('TODO', this.todoList);
  }

   onEdit(index: number){
    const todoItem = this.todoList[index];
    const dialogRef = this.dialog.open(Add, {
      data: { title: todoItem.title }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this.todoList[index].title = result;
        this.cdr.detectChanges();
      }
    });this.dataService.saveStorage('TODO', this.todoList);
  }

  saveStorage(key: string, value: any)
  {
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadStorage(key: string)
  {
    const item=localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeStorage(key: string)
  {
    localStorage.removeItem(key);
  }

  // //change the data if triggered
  //   publishEvent(data: any)
  //   {
  //     this.eventSubject.next(data);
  //   }
  
  //   //Listen for any changes on the toolbar
  //   observeEvent(): Subject<any>
  //   {
  //     return this.eventSubject;
  //   }

}
