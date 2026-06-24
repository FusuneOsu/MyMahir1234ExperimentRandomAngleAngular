import { Injectable } from '@angular/core'; // marks the class as a service that can be injected.

/* RxJS is a library for composing asynchronous and event-based programs by using observable 
sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, 
Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow 
handling asynchronous events as collections.

https://rxjs.dev/guide/overview

Subject is a special type of Observable that allows values to be multicasted to many Observers. 
While plain Observables are unicast (each subscribed Observer owns an independent execution of 
the Observable), Subjects are multicast.

https://rxjs.dev/guide/subject
 */
import { Subject } from 'rxjs'; 

// Angular decorator that marks the class as a service that can be injected.
@Injectable({
  providedIn: 'root', // Angular provides a single shared instance app-wide automatically.
})

export class Data {
  private eventSubject = new Subject();
  
  constructor(){ // constructor — a special method that runs when the component is created
  }

  /* saveStorage, loadStorage, removeStorage definitions can be found in todo.ts*/
  saveStorage(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadStorage(key: string){
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeStorage(key: string){
    localStorage.removeItem(key);
  }

  /* publishEvent and observeEvent are never used */

  // emits a value to every current subscriber by calling this.eventSubject.next(data).
  publishEvent(data: any){
    this.eventSubject.next(data);
  }

  // observeEvent() — returns the Subject so callers can subscribe and receive emissions from publishEvent()
  observeEvent(): Subject<any>{
    return this.eventSubject;
  }

  /* How it's used:
  Any component/service can call dataService.publishEvent(payload) to broadcast an event.
  Any component/service can call dataService.observeEvent().subscribe(handler) to listen.
  
  Notes / best practice:
  Returning the raw Subject lets subscribers also call .next() (unsafe). Prefer:
  change signature to observeEvent(): Observable<any> { return this.eventSubject.asObservable(); }
  then callers can only subscribe (not emit).
  Optionally type the Subject (e.g., private eventSubject = new Subject<MyEvent>()) for safer typing.
  
  Minimal example:
  publish: this.dataService.publishEvent({ type: 'todoAdded', item })
  subscribe: this.dataService.observeEvent().subscribe(e => { if (e.type === 'todoAdded') ... })
 */
}
