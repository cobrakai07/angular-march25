import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks: {id:number, task:string}[] =[];
  task="";

  addTask(){
    this.tasks.push({id:this.tasks.length+1,task:this.task});
    this.task="";
  }

  deleteTask(id:number){
    this.tasks = this.tasks.filter(task=>task.id!==id);
  }

}
