import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PersonDetailComponent} from '../people/person-detail.component';

@Injectable()
export class CanDeactivateDirtyComponent implements CanDeactivate<PersonDetailComponent> {
  canDeactivate(
    component: PersonDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    const isDirty=component.isDirty;
    if (isDirty) {
      return confirm('You have unsaved changes, do you want to proceed?')
    }else{
      return true;
    }
  }
}
