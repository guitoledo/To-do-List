import { Component, DoCheck, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [
    // { task: "Minha nova Task", checked: true},
    // { task: "Minha nova Task 2", checked: false},
  ];

  constructor() { }

  ngDoCheck(): void {
    this.taskList.sort((current, next) => Number(current.checked) - Number(next.checked))
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Voce deseja realmente deletar tudo?")

    if(confirm){
    this.taskList = []
    }
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public validationInput(event: string, index: number){

    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?");

        if(confirm){
          this.deleteItemTaskList(index);
        }
    }
  }

}
