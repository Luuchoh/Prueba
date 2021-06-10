import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api } from "./../interfaces/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private url = "https://jsonplaceholder.typicode.com"

  getAllUser(){
    const path = `${this.url}/users`;
    return this.http.get<Api[]>(path)
  }
  getOneUser(id: string){
    const path = `${this.url}/user/${id}`;
    return this.http.get<Api>(path);
    
  }
}
