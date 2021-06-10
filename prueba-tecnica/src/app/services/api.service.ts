import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api } from "./../interfaces/api";
import { environment } from "./../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private url = environment.apiUrl;

  getAllUser(){

    const path = `${this.url}/users`;

    // console.log(this.http.get<Api[]>(path)); 

    return this.http.get<Api[]>(path)
  }
  getOneUser(id: string): Observable<Api> {
    // console.log(id);
    
    const path = `${this.url}/users/${id}`;
    
    // console.log(path);
    // console.log(this.http.get<Api>(path)); 

    return this.http.get<Api>(path);
    
  }
}
