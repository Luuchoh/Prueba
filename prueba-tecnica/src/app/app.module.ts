import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//MODULOS
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListsComponent,
    CreateUserComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
