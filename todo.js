const todoForm = document.querySelector('.todo_form'),
        todoInput = todoForm.querySelector('input'),
        todoList = document.querySelector('.todo_list');


const TODO_LS = 'todos';

const todoArr = [];

function paintTodo(todo) {
    const todoLi = document.createElement('li'),
          todoSpan = document.createElement('span'),
            delBtn = document.createElement('button');
    const newId = todoArr.length + 1;


    delBtn.innerText = 'X';
    todoSpan.innerText =  todo;
    todoLi.appendChild(delBtn);
    todoLi.appendChild(todoSpan);

    todoList.appendChild(todoLi);

    const todoObj =  {
        text: todo,
        id: newId
    };

    todoArr.push(todoObj);
}

function handleSubmit(e) {
e.preventDefault();
const currentValue = todoInput.value;
paintTodo(currentValue);
todoInput.value = '';
}



function loadTodo() {
    const loadedTodo = localStorage.getItem(TODO_LS);

    if( loadedTodo != null){

    }
}


        (function init () {
            loadTodo();

            todoForm.addEventListener('submit', handleSubmit);
        })();