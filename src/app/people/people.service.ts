import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Injectable()
export class PeopleService {
  private people=[
    {
      id:1,
      name:'Juri'
    },
    {
      id:2,
      name:'Steffi'
    },
    {
      id: 3,
      name: 'Thomas'
    }
  ]
  constructor() { }

  getPersonById(id: number):Observable<any>{
    //of(this.people.filter(x => x.id === id));
    return of(this.people).pipe(
      map(people=>people.filter(x=>x.id===id)[0])
    )
  }
  getAll(){
    return this.people;
  }
  save(person){
    const p=this.people.find(x=>x.id === person.id);
    if (p) {
      p.name=person.name;
    }
    return of(true).pipe(delay(1000));
  }
}
