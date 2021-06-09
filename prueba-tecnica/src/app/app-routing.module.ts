import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { UserListsComponent } from './components/user-lists/user-lists.component';

const routes: Routes = [
  { path:'', redirectTo: 'list-user', pathMatch: 'full'},
  { path:'list-user', component: UserListsComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'detail-user/:id', component: DetailUserComponent},
  { path:'**', redirectTo: 'list-user', pathMatch: 'full'}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
