import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  myFunction(event : MouseEvent){
    console.log("function called", event);
  }

  myFunctionForInputEvent(event : Event){
    console.log("value ",(event.target as HTMLInputElement).value);
    
  }
}
