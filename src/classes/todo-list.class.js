import { Todo } from './todo.class';

export class TodoList {

    constructor() {


        //this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo) {
        this.todos.push(todo); // agrega un nuevo todo al array de todos
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id); // si compara con otro igual compara con el mismo tipo, es decir numeros con numeros, etc...Esto regresa un nuevo arreglo filtrando el que coincide...
        this.guardarLocalStorage(); // cuando hacemos una modificacion del arreglo se guarda en localstorahe
    }

    marcarCompletado(id) {

        for (const todo of this.todos) {
            //console.log(id, todo.id);

            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos));
        // Stringify: convierte un objeto o valor de JavaScript en una cadena de texto JSON.

    }

    cargarLocalStorage() {

        // if (localStorage.getItem('todo')) { // si existe el item en localStorage...

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     // Parse: convierte una cadena de texto como JSON

        //     console.log('CargarLocal: ', this.todos);
        //     console.log(typeof this.todos);

        // } else { // Sino....

        //     this.todos = [];

        // }

        // Operador ternario.
        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));

    }


}