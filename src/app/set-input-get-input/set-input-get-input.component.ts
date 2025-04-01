import { Component } from '@angular/core';

@Component({
  selector: 'app-set-input-get-input',
  imports: [],
  templateUrl: './set-input-get-input.component.html',
  styleUrl: './set-input-get-input.component.css'
})
export class SetInputGetInputComponent {
  name="";
  getName(event: Event){
    const name = (event.target as HTMLInputElement).value;
    this.name=name;
  }
}
