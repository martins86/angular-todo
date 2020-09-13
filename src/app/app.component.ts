import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from './../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Cria uma lista todo vazia.
  public todos: Todo[] = [];
  // Titulo da tela.
  public title: String = 'Minhas Tarefas';
  // Agrupa em uma variável o conteúdo de um formulário.
  public form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
    // Nome do campo que vai ser validado.
    // Caso seja apenas required.
    //-> title: ['', Validators.required].
      title: ['',
      // Compõe todas as validações para o campo titulo.
      Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    
    this.load();
  }
  
  add() {
    // Recebendo todos os campos do form.
    // const formResult = this.form.value; 
    //-> { id: 1, title: 'Titulo', done: false }
    
    // Recebendo 1 campo do form.
    const title = this.form.controls['title'].value;
    // Forçando um id "único".
    const id = this.todos.length + 1;
    
    this.todos.push(new Todo(id, title, false));
    
    // Salva no local storage.
    this.save();
    // Limpa o campo.
    this.clear();
  }
  
  clear() {
    this.form.reset();
  }
  
  remove(todo: Todo) {
    // Pega o index do item.
    const index = this.todos.indexOf(todo);
    // Valida se é diferente de -1.
    if(index !== -1) {
      // Remove o item.
      this.todos.splice(index, 1);
      
      // Salva no local storage.
      this.save();
    }
  }
  
  checkedUnchecked(todo: Todo) {
    // Altera para o diferente dele mesmo, true vira false.
    todo.done = !todo.done;
    
    // Salva no local storage.
    this.save();
  }
  
  save() {
    // Converte JSON para String.
    const data = JSON.stringify(this.todos);
    
    // Guarda no local storage com chave todo e valor o json.
    localStorage.setItem('todos', data);
  }
  
  load() {
    // Le a string no local storage
    const data = localStorage.getItem('todos');
    if(data) {
      // Faz o parse e armazena em todos.
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
  }
  
}
