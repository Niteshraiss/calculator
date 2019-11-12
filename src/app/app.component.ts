import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="nitesh";
  no=0;
  n2=0;
  result=0;
  add(){
    this.result=this.no+this.n2;
  }
  sub(){
    this.result=this.no-this.n2;
  }
  mul(){
    this.result=this.no*this.n2;
  }
  d(){
    this.result=this.no/this.n2;
  }
}
