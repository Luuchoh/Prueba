import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/interfaces/api';
import { ApiService } from "./../../services/api.service";

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {

  constructor(private api: ApiService) { }
  user: Api[] = [];
  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.api.getAllUser()
    .subscribe(results=>{
      if(results){
      this.user = [...results];
      }else{
        this.user = []
      }
      
    })
    console.log(this.user);
    

  }
}
