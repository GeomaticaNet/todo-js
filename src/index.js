import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo));
// Tambien se puede poner asi: (para un argumento)
// todoList.todos.forEach( crearTodoHtml );

// const newTodo = new Todo('Aprender Javascript');
// todoList.nuevoTodo( newTodo );


//console.log('todos', todoList.todos);