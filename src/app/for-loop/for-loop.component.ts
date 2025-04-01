import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
  users=[{id:1,name:"Deepak",age:22},{id:2,name:"Virat",age:24},{id:3,name:"UV",age:20}];
}
