import { Component, OnInit } from '@angular/core';

import { Todo } from './../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Cria uma lista todo vazia.
  public todos: Todo[] = [];
  // Titulo da tela.
  public title: String = 'Minhas Tarefas';
  
  ngOnInit() {}
  
  constructor() {
    this.todos.push(new Todo(1, 'Lavar o Carro', false));
    this.todos.push(new Todo(2, 'Cortar a Grama', true));
    this.todos.push(new Todo(3, 'Cortar o Cabelo', false));
  }
}
