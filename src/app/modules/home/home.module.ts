import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Pages
import { HomeComponent } from './pages/home/home.component';

//Components
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { ToDoButtonDeleteAllComponent } from './components/to-do-button-delete-all/to-do-button-delete-all.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HomeComponent,
    HeaderComponent,
    TodoListComponent,
    TodoInputAddItensComponent,
    ToDoButtonDeleteAllComponent,
  ],
})
export class HomeModule {}
