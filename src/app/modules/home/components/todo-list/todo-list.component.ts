import { Component, OnInit } from '@angular/core';
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
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task: 'Minha nova Task', checked: true },
    { task: 'Minha nova Task 2', checked: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
