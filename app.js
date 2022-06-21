//variables
const toDo = document.querySelector('.todo-input');
const btn= document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');



//events
document.addEventListener('DOMContentLoaded',getTodos);
btn.addEventListener('click', addTodo);
list.addEventListener('click',deleteItem);




//functions
function addTodo(event){
    event.preventDefault();

    //div for the todo
    const div = document.createElement('div');
    div.classList.add('todo');

    //new Todo
    const newItem = document.createElement('li');
    newItem .innerText= toDo.value;
    newItem .classList.add('todo-item');
    div.appendChild(newItem);

    //save the item
    saveLocalTodos(toDo.value);
   

    //delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&#8722;';
    deleteBtn.classList.add('delete-btn');
    div.appendChild(deleteBtn);
    list.appendChild(div);

    //clear value
    toDo.value = "";


    
}

function deleteItem(e){
    const item = e.target;

    if(item.classList[0]==='delete-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',() =>{
            todo.remove();

        });
        

        
    }
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(element => {
        //div for the todo
        const div = document.createElement('div');
        div.classList.add('todo');

        //new Todo
        const newItem = document.createElement('li');
        newItem .innerText= element;
        newItem .classList.add('todo-item');
        div.appendChild(newItem);

    

        //delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '&#8722;';
        deleteBtn.classList.add('delete-btn');
        div.appendChild(deleteBtn);
        list.appendChild(div);

        
    });
}
function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos',JSON.stringify(todos));

}



