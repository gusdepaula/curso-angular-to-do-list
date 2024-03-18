import { Component, DoCheck, OnInit } from '@angular/core';
import { TodoInputAddItensComponent } from '../todo-input-add-itens/todo-input-add-itens.component';
import { TodoButtonDeleteAllComponent } from '../todo-button-delete-all/todo-button-delete-all.component';
import { TaskList } from '../../model/task-list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoInputAddItensComponent,
    TodoButtonDeleteAllComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [
    { task: 'Minha nova Task', checked: true },
    { task: 'Minha nova Task 2', checked: false },
  ];

  constructor() {}

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    return this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Tem certeza que deseja Deletar tudo?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está sem vazia, deseja deletar?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
