import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentdemoComponent } from './componentdemo/componentdemo.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { CounterComponent } from './counter/counter.component';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ComponentdemoComponent, ButtonClickComponent, CounterComponent, EventComponent],// first import the component into the component where u want to use it
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myname = 'Deepak'; //this is a class property
  // const myname = 'Deepak'; //this is a variable which is not allowed inside class but we can a function inside a class and inside that we can have variables
  fun(params:any) {
    const myage=78;
  }

}

// tsconfig.json and tsconfig.app.json //typescript setting for app folder and whole project
// angular.json // tells u how your project will start what will be the first component render etc
//index.html , main.ts, //first file to load-> all mentioned in angular.json