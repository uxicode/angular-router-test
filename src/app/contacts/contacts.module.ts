import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactListComponent} from './contact-list.component';

@NgModule({
  imports: [CommonModule, ContactsRoutingModule],
  declarations: [ContactListComponent]
})
export class ContactsModule { }
