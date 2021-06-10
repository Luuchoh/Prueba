import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSearch(value: string){
    console.log('buscar', value);
    
    if(value && value.length > 4){
      this.router.navigate(['/user-list'], {
        queryParams: {q: value},
      })
    }
  }
}
