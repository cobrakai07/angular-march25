import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-statement',
  imports: [],
  templateUrl: './conditional-statement.component.html',
  styleUrl: './conditional-statement.component.css'
})
export class ConditionalStatementComponent {
  display=false;
  color="red";
  switchColor="cyan";
  toggler(){
    this.display=!this.display;
  }
  toggleColor(){
    if(this.color=="red")this.color="blue";
    else this.color="red";
  }
  switchColorFunction(color:string){
    this.switchColor=color;
  }
}
