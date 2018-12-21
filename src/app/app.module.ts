import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Route, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {PeopleModule} from './people/people.module';
import {ContactsModule} from './contacts/contacts.module';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NotfoundComponent} from './notfound/notfound.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    // PeopleModule,
    // ContactsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
