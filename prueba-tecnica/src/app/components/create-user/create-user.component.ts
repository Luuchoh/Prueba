import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUser: FormGroup

  constructor(private fb: FormBuilder,
              private router: Router) {  
    this.createUser= this.fb.group({
      name:['', Validators.required],
      lastName:['', Validators.required],
      userName:['', Validators.required],
      city:['', Validators.required],
      town:['', Validators.required],
      address:['', Validators.required],
      postalCode:['', Validators.required],
      cel:['', Validators.required],
      webSite:['', Validators.required],
      nameCompany:['', Validators.required],
      catchPhrase:['', Validators.required],
      slogan:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.createUser);
    console.log(this.createUser.get('name')?.value);
    
  }
}
