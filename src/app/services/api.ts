import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data';


@Injectable({
  providedIn: 'root',
})
export class Api {
  // private baseURL: string = 'mymahir1234experimentrandom-production.up.railway.app/api';
    public baseURL: string = 'http://localhost:3000/api';


  constructor(
    private http: HttpClient,
    private dataService: Data){

  }

  HttpGet (path: string){
    let headers = {headers: new HttpHeaders};
    let fullURL: string = this.baseURL + path;
    
    return new Promise((resolve, reject) => 
    {
      this.http.get(fullURL, headers).subscribe
      ({
        next: (response: any) => {resolve(response)},
        error: (error: any) => {reject(error)}
      });
    });
  }

  httpPost(path: string, payload: any, method?: string){
    let fullURL: string = this.baseURL+path;
    let headers = {headers: new HttpHeaders() }; 
    // let token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJzb21ldGhpbmdAcmF6ZXIuY29tIiwiaWF0IjoxNzc4MTM5OTczLCJleHAiOjE3NzgxNDM1NzN9.l-o7bAtx3OMhAiJfJOGseATfaOumn3roZp1hrvWeAjw';
    let token: string = this.dataService.loadStorage('TOKEN');
    let user: any = this.dataService.loadStorage('USER');
    let isFormData = payload instanceof FormData;

    if(user)
    {
      //check if payLoad is using formData
      if(isFormData){
        payload.append('user_id', user.id);

      }else{payload = {...payload, user_id: user.id};}
      
    }

    if(token){
      headers = { headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
        // .set('Content-Type', 'application/json')
      }
    }

    return new Promise((resolve, reject) => 
    {
      if(method == 'put'){
        this.http.put(fullURL, payload, headers).subscribe
        ({
          next: (response: any) => {resolve(response)},
          error: (error: any) => {reject(error)}
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
