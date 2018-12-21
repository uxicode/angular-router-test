import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactListComponent} from './contact-list.component';
const contactRoutes:Routes=[
  {
    path:'list',
    component:ContactListComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
