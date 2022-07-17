const TODO_KEY = "todoItems";
const todoForm = document.querySelector("#todo-form");
const todoFormInput = todoForm.querySelector("input");

const todoList = document.querySelector("#todo-list");
let todoArrs = [];

function saveToDoList() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArrs));  
}


function handleDelToDoItem(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArrs = todoArrs.filter((item)=> item.id !== parseInt(li.id));
  console.log(todoArrs);
  saveToDoList();
}


function paintToDo(newToDoItemObj) {
  const liElmnt = document.createElement("li");
  liElmnt.id = newToDoItemObj.id;
  const span = document.createElement("span");
  
  span.innerText = newToDoItemObj.text + ' ';
  const button = document.createElement("button");
  button.innerText = "x";
  liElmnt.appendChild(span);
  liElmnt.appendChild(button);
  todoList.appendChild(liElmnt);
  button.addEventListener("click", handleDelToDoItem);
  
  todoArrs.push(newToDoItemObj);
  
}

function handleSubmit(event) {
  event.preventDefault();
  const todoObj = 
  {
    text: todoFormInput.value,
    id: Date.now(),
  }
  paintToDo(todoObj);
  todoFormInput.value = "";
  saveToDoList();
}
todoForm.addEventListener("submit", handleSubmit);

const elements = JSON.parse(localStorage.getItem(TODO_KEY));
if(elements !== null) {  
  todoArrs = elements;
  elements.forEach(paintToDo);
}