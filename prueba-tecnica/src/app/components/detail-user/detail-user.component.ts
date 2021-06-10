import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Api } from 'src/app/interfaces/api';
import { ApiService } from "./../../services/api.service";
import { take } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
user:Observable<Api> | undefined
  constructor(private api: ApiService,
              private route: ActivatedRoute,
              private location:Location) { }
    ngOnInit(): void {
      this.route.params.subscribe((params: Params) =>{
        const id = params['id'];
        this.user = this.api.getOneUser(id); 
        console.log(this.user);
        
      })
    }

    

    onGoBack():void{
      this.location.back();
    } 

}
