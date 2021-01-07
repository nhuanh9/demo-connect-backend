import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUserComponent} from "./components/list-user/list-user.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";


const routes: Routes = [
  {
    path: '',
    component: ListUserComponent
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
