/* ChangeDetectorRef (@angular/core): lets a component trigger or run Angular change detection manually.
Component (@angular/core): decorator that declares an Angular component and its metadata.
OnInit (@angular/core): lifecycle interface for implementing ngOnInit() initialization logic.
Title (@angular/platform-browser): service for getting/setting the document (browser tab) title.
F (@angular/cdk/keycodes): numeric keycode constant representing the "F" keyboard key.
MatDialog (@angular/material/dialog): service to open and manage Angular Material modal dialogs.
ValueChangeEvent (@angular/forms): typing/shape used for form value-change events emitted by Angular forms. */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedModules } from '../../../shared/shared.module';
import { Title } from '@angular/platform-browser';
import { F } from '@angular/cdk/keycodes';
import { Add } from '../../components/add/add';
import { MatDialog } from '@angular/material/dialog';
import { ValueChangeEvent } from '@angular/forms';
import { ConvertPipe } from '../../pipes/convert-pipe';
import { Data } from '../../services/data';

/* interface in TypeScript is a way to define the structure (shape) of an object. 
It specifies what properties and methods an object should have, along with their types. */
interface TodoItem {
  title: string,
  selected: boolean
}

@Component({ // //The @Component decorator that configures your component
  selector: 'app-todo',
  imports: [...SharedModules, ConvertPipe], // things in imports will be able to be used by frontend
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo implements OnInit{ ///* ->  Angular lifecycle hook that runs once when the component is initialized/created. */

  public todoList: TodoItem[] = [
    {title: 'Wash clothes', selected: false},
    {title: 'Do homework', selected:true},
    {title: 'Buy groceries', selected:false}
  ]

  constructor // constructor — a special method that runs when the component is created
  (
    /* the constructor is declaring what dependencies this component needs */
    
    public dialog: MatDialog, // the Material Dialog service (publicly accessible throughout the class)
    private cdr: ChangeDetectorRef, // for manually triggering change detection (private, only used internally)
    private dataService: Data // custom service for storage (private, only used internally)
  )
  {

  }

  // /* ->  Angular lifecycle hook that runs once when the component is initialized/created. */
  ngOnInit()
  {
    /* retrieves the saved todo list from browser's localStorage under the key 'TODO' */
    // if nothing is saved (returns null), use an empty array instead
    const data: any = this.loadStorage('TODO') || [];
    /* Something peculiar with the code:
    saveStorage() - there is a duplicate function on data.ts and all saveStorage() calls are made in data.ts
    removeStorage() - never called
    loadStorage - defined in todo.ts and used here in ngOnInit()
    
    why? dunno ask Ferdy, I might have also missed something during class*/

    // replaces the hardcoded initial todo list with the saved data
    this.todoList = data;
  }

  //tick or untick checkbox behaviour
  onSelected(index: number) 
  {this.todoList[index].selected = !this.todoList[index].selected;
  }

  onAdd()
  {
    /* Opens the "Add" dialog component. */
    const dialogRef = this.dialog.open(Add);
    /* Waits for the user to close the dialog. 
    When it closes, it captures what the user entered as result */
    dialogRef.afterClosed().subscribe((result: any) => {
      /* There is result from user */
      if(result){
        /* Adds a new todo object to the list */
        this.todoList.push({ 
          title: result, // what the user typed
          selected: false }); // set to false (unchecked by default)
        /* Manually tells Angular to update the UI/template to show the new todo */
        this.cdr.detectChanges();
        /* Saves the updated list to localStorage 
        so it persists if the page reloads */
        this.dataService.saveStorage('TODO', this.todoList);
      }
    });
  }

  onDelete(index: number)
  {
    /* Shows a browser popup asking the user to confirm. 
    Returns true if they click "OK", false if they click "Cancel". */
    let confirmation = confirm('Are you sure you want to delete this item?');
    if(confirmation) // if confirmation == true
    {
      /* Removes 1 item from the array at the given index. 
      The index parameter tells it which todo to delete. */
      this.todoList.splice(index, 1);
    /* Saves the updated list to localStorage. 
    This runs whether the user confirmed or not */
    }this.dataService.saveStorage('TODO', this.todoList);
  }

  onClear()
  {
    let confirmation = confirm('delete?') // returns true or false from browser
    if(confirmation)
    /* Completely empties the list by replacing it with an 
    empty array. Deletes ALL todos at once. */
    {this.todoList=[];}
    //save new list state into localStorage
    this.dataService.saveStorage('TODO', this.todoList);
  }

  onEdit(index: number){
    const todoItem = this.todoList[index]; // Gets the todo item at the specified index.
    const dialogRef = this.dialog.open(Add, { // Opens the Add dialog component
      data: { title: todoItem.title } // and passes the current title as data. This pre-fills the dialog with the existing title so the user can edit it.
    });
    dialogRef.afterClosed().subscribe((result: any) => { // Waits for the user to close the dialog and captures the new title as result
      if(result){ // Checks for presence of result, truthy and execute statement if result exists
        this.todoList[index].title = result; // Updates that specific todo's title with the new text the user typed.
        this.cdr.detectChanges(); // Manually refreshes the UI to show the updated title.
      }
    });this.dataService.saveStorage('TODO', this.todoList); // Saves the updated list to localStorage
  }

    /* Something peculiar with the code:
    saveStorage() - there is a duplicate function on data.ts and all saveStorage() calls are made in data.ts
    removeStorage() - never called
    loadStorage - defined in todo.ts and used here in ngOnInit()
    
    why? dunno ask Ferdy, I might have also missed something during class */

  saveStorage(key: string, value: any) // Takes a key (like 'TODO') and a value (your todo list array)
  {
    /* 
    JSON.stringify(value) — converts the JavaScript array/object into a JSON string (because localStorage only stores strings)
    localStorage.setItem() — saves that string to the browser's local storage under the given key */
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadStorage(key: string)
  {
    const item=localStorage.getItem(key); // retrieves the stored string by key
    /* JSON.parse(item) — converts the JSON string back into a JavaScript object/array */
    return item ? JSON.parse(item) : null; // item ? JSON.parse(item) : null — if something exists, parse it; otherwise return null
  }

  removeStorage(key: string)
  {
    /* completely deletes the stored item by key from local storage
    Example: removeStorage('TODO') permanently deletes the saved todo list. */
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
