import { Component } from '@angular/core';

@Component({
  selector: 'app-button-click',
  imports: [],
  templateUrl: './button-click.component.html',
  styleUrl: './button-click.component.css'
})
export class ButtonClickComponent {
  
// dont use function keyword as its a class
  handleClickEvent(){
    alert("function called");
  }

  outerFunction(){
    // innerFunction(); // this will give error;
    this.innerFunction();
  }

  innerFunction(){
    alert("This is a inner function of outer function");
  }

}
