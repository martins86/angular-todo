import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Cria uma lista todo vazia.
  public todos: any[] = [];
  // Titulo da tela.
  public title: String = 'Minhas Tarefas';
  
  ngOnInit() {}
  
  constructor() {
    this.todos.push('Lavar o Carro');
    this.todos.push('Cortar a Grama');
  }
}
