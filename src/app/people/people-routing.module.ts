import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {PersonDetailComponent} from './person-detail.component';
import {PeopleListComponent} from './people-list.component';
import {PersonResolverService} from './person-resolver.service';
import {CanDeactivateDirtyComponent} from '../auth/can-deactivate.guard';

const peopleRoutes:Routes=[
  {
    path:'',
    component:PeopleListComponent,
    children:[{
      path:':personId',
      component:PersonDetailComponent,
      canDeactivate:[CanDeactivateDirtyComponent],
      resolve:{
        person:PersonResolverService
      }
    }]
  }

]
@NgModule({
  imports: [RouterModule.forChild(peopleRoutes)],
  exports:[RouterModule]
})
export class PeopleRoutingModule { }
