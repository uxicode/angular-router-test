import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from './people.service';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-person-detail',
  template:`
    <div  style="padding-top:15px;">
      <label for="">ID: {{person.id}}</label>
    </div>
    <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
      <input type="text" formControlName="name" />
      <button class="btn btn-default">Save</button>
    </form>
    
    <p>Unsaved changes: {{ isDirty }}</p>
    
    <div *ngIf="shouldShowChildren">
      We should also load the children.
    </div>
    <pre>{{person | json}}</pre>
  `,
  styles: []
})
export class PersonDetailComponent implements OnInit, OnDestroy {
  personId?:string;
  person;
  shouldShowChildren:boolean=false;
  form:FormGroup;
  isDirty:boolean=false;

  constructor(private activeRoute:ActivatedRoute, private peopleService:PeopleService, private router:Router) {
    this.form=new FormGroup({
      name:new FormControl()
    })
  }

  ngOnInit() {
    //옵저버블 스트립이 아닌 특정 시점의 상태만 조회하는 경우 snapshot 프로퍼티를 사용( snapshot프로퍼티는 옵저버블로 래핑되지 않은 paramMap객체를 반환한다 )
    // this.personId=this.activeRoute.snapshot.paramMap.get('personId');

    //URL 경로가 변경되었지만 활성화 대상 컴포넌트가 변경되지 않는 경우,
    //만약 활성화 대상 컴포넌트가 존재하면 다시 생성하지 않고 재사용한다.
    //따라서 컴포넌트가 소멸되지 않은 상태에서 라우터 파라미터만 변경된 라우터 상태를 연속으로 수신할 수 있기 때문에 paramMap을 옵저버블로 제공한다.
    //paramMap의 get 메소드에 라우트 파라미터의 키 값을 인자로 전달하여 라우트 파라미터의 값을 취득한다.
    /*this.activeRoute.paramMap.subscribe( param => {
      console.log( param )
      this.personId=param.get('personId');
      this.peopleService.getPersonById(+this.personId).subscribe(person=>{
        this.person=person;
      })
    } );*/




    /*this.activeRoute.data.subscribe( data => {
      this.person = data['person'];
    })*/

    this.activeRoute.queryParams.subscribe( data => {
      // console.log( data )
      this.shouldShowChildren = (data['showChilds'] === 'true')
      // this.personId=param.get('personId');
    } );

    this.activeRoute.paramMap.pipe(
      switchMap( params =>{
        return this.peopleService.getPersonById(+params.get('personId') )
      })
    ).subscribe(person =>{
      // this.person=Object.assign({}, person);
      this.person=person;
      this.form.patchValue(person);

      this.form.get('name').valueChanges.subscribe(nameValue=>{
        if (nameValue !== this.person.name) {
          this.isDirty=true;
        }else{
          this.isDirty=false;
        }
      })
    })

  }

  onSubmit({value, valid}) {
    if( valid ){
      value.id=this.person.id;
      this.peopleService.save(value);
      this.isDirty=false;
    }
  }

  ngOnDestroy(){
    console.log('destroy person-detail component')
  }

  onSave(personName:string):void{
    this.person.name=personName;
    this.peopleService.save(this.person).subscribe( ()=>{
      // this.router.navigate(['/people']);
      this.router.navigate(['../'], { relativeTo: this.activeRoute, preserveQueryParams: true });
    })
  }



}
