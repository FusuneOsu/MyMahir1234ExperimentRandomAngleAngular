/* HttpClient — Angular's HTTP client used to make HTTP requests (GET, POST, PUT, DELETE, etc.). In your code, it's used in the HttpGet() and httpPost() methods to communicate with your backend API.

HttpHeaders — Used to configure HTTP headers for requests. In your code, it's used to set authorization headers with the JWT bearer token and to manage request metadata. */
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Injectable — A decorator that marks the Api class as a service that can be injected as a dependency throughout your application. This allows Angular's dependency injection system to provide this service where needed. The { providedIn: 'root' } parameter makes it available application-wide. */
import { Injectable } from '@angular/core';
/* Data — Your custom local service imported from ./data.ts. It's used to retrieve stored values like the JWT token (TOKEN) and user information (USER) from local storage via the loadStorage() method. */
import { Data } from './data';


@Injectable({
  providedIn: 'root',
})
export class Api {
    // public baseURL: string = 'https://mymahir1234experimentrandom-production.up.railway.app/api';
    public baseURL: string = 'http://localhost:3000/api';

  // public baseURL: string;

  constructor(
    private http: HttpClient,
    private dataService: Data
  ) {

    // an attempt at doing if else
    // if (window.location.hostname === 'localhost') {
    //   this.baseURL = 'http://localhost:3000/api';
    // } else {
    //   this.baseURL = 'https://mymahir1234experimentrandom-production.up.railway.app/api';
    // }

  }

  HttpGet (path: string){
    /* Creates headers object: Initializes an empty HttpHeaders object wrapped in a headers property. Note: This should instantiate with new HttpHeaders() (currently missing the parentheses, which is a bug) */
    let headers = {headers: new HttpHeaders()};
    /* Constructs the full URL: Concatenates the base API URL (http://localhost:3000/api) with the provided path to create the complete endpoint URL */
    let fullURL: string = this.baseURL + path;
    
    /* Returns a Promise: Wraps the HTTP request in a Promise so the caller can use .then() or async/await syntax 
    
    A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. 
    
    Promise is like a Tracking Number
    think of a shipping tracking number:
    You buy an item online and instantly get a tracking number (the Promise).
    You do not have the physical package yet, but the tracking number represents it.
    Fulfilled: The delivery truck arrives at your door (.then()).
    Rejected: The tracking system updates to "Package Lost in Transit" (.catch()). */
    return new Promise((resolve, reject) => 
    {
      /* Makes GET request: Uses Angular's HttpClient to send a GET request to the full URL with the headers */
      this.http.get(fullURL, headers).subscribe
      ({
        /* On success: If the request succeeds, resolves the Promise with the response data */
        next: (response: any) => {resolve(response)},
        /* On error: If the request fails, rejects the Promise with the error */
        error: (error: any) => {reject(error)}
      });
    });
  }

  httpPost(path: string, payload: any, method?: string){
    let fullURL: string = this.baseURL+path; // Builds the full request URL by concatenating the service baseURL with path.
    let headers = {headers: new HttpHeaders() }; // Initializes an empty headers object to pass to HttpClient
    // let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJzb21ldGhpbmdAcmF6ZXIuY29tIiwiaWF0IjoxNzc4MTM5OTczLCJleHAiOjE3NzgxNDM1NzN9.l-o7bAtx3OMhAiJfJOGseATfaOumn3roZp1hrvWeAjw';
    let token: string = this.dataService.loadStorage('TOKEN'); // Loads stored JWT token (if any) from the Data service
    let user: any = this.dataService.loadStorage('USER'); // Loads stored user info (if any) from the Data service
    let isFormData = payload instanceof FormData; // Detects if payload is FormData so it can be handled differently (can't JSON-merge into FormData).

    if(user)
    {
      //check if payLoad is using formData
      if(isFormData){
        payload.append('user_id', user.id); // if yes include user id in the form data

      }else{payload = {...payload, user_id: user.id};} // Else: merge user_id into payload
      
    }

    /* If token exists: set headers = { headers: new HttpHeaders({ Authorization: \Bearer ${token}` }) }` so requests include the Bearer token. */
    if(token){
      headers = { headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
        // .set('Content-Type', 'application/json')
      }
    }

    /* Wraps the HTTP call in a Promise so callers can await or .then() on it. */
    return new Promise((resolve, reject) => 
    {
      if(method == 'put'){
        this.http.put(fullURL, payload, headers).subscribe
        ({
          next: (response: any) => {resolve(response)}, // resolves Promise on success.
          error: (error: any) => {reject(error)} // rejects Promise on failure.
        });
      }else{
        this.http.post(fullURL, payload, headers).subscribe 
        ({
          next: (response: any) => {resolve(response)},
          error: (error: any) => {reject(error)}
        });
      }
    });
  }
}
