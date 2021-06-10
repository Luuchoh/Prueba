import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Api } from 'src/app/interfaces/api';
import { ApiService } from "./../../services/api.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
userApi:Observable<Api> | undefined
  user!: Api; 
  constructor(private api: ApiService,
              private route: ActivatedRoute,
              private location:Location) { }
    ngOnInit(): void {
      this.route.params.subscribe((params: Params) =>{
        const id = params['id'];
        this.userApi = this.api.getOneUser(id);
        this.api.getOneUser(id)
          .subscribe(results =>{
            console.log(results);

          this.user = results;
          console.log(this.user);

        })
        

        })
    }

    

    onGoBack():void{
      this.location.back();
    } 

}
