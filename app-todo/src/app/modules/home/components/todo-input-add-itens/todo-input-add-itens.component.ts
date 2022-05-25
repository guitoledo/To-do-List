import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitImtemTaskList = new EventEmitter()

  public addItemTaskList: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
    this.emitImtemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = ""
    }
  }

}
