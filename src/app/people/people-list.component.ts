import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeopleService} from './people.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-people-list',
  template: `
    <h3>People</h3>
    <ul>
      <li *ngFor="let person of people">
        <a [routerLink]="['../people', person.id]" [queryParams]="activatedRoute.queryParams | async">{{person.name}}</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PeopleListComponent implements OnInit, OnDestroy {
  people;
  constructor(private peopleService:PeopleService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe()
    this.people=this.peopleService.getAll();
  }
  ngOnDestroy(){
    console.log('destroy people-list component')
  }

}
