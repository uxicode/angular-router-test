import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template:`
  <h1 style="width:500px;margin:200px auto;font-size:40px;">Not Found 404....Sorry, nothing to see here.</h1>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
