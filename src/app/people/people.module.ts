import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleRoutingModule} from './people-routing.module';
import {PersonDetailComponent} from './person-detail.component';
import {PeopleService} from './people.service';
import {PersonResolverService} from './person-resolver.service';
import {PeopleListComponent} from './people-list.component';
import {CanDeactivateDirtyComponent} from '../auth/can-deactivate.guard';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, PeopleRoutingModule, ReactiveFormsModule],
  declarations: [PersonDetailComponent, PeopleListComponent],
  providers:[PeopleService, PersonResolverService, CanDeactivateDirtyComponent]
})
export class PeopleModule { }

