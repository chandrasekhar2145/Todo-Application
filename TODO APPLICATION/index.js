let todoContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let todoList = [
  {
    text: "Learn HTML",
    uniqueId: 1,
  },
  {
    text: "Learn CSS",
    uniqueId: 2,
  },
  {
    text: "Learn Javascript",
    uniqueId: 3,
  },
  {
    text: "Learn React",
    uniqueId: 4,
  },
];

function onTodoStatusChange(checkboxId, labelId) {
  let checkElement = document.getElementById(checkboxId);
  let labelEl = document.getElementById(labelId);
  labelEl.classList.toggle("checked");
  //if(checkElement.checked === true){
  //labelEl.classList.add("checked")
  //}else{
  //labelEl.classList.remove("checked")
  //}
}

function onDeleteTodoItems(todoDelete) {
  let todoElement = document.getElementById(todoDelete);
  todoContainer.removeChild(todoElement);
  //console.log(todoContainer)
}

function createAndAppendTodo(todo) {
  let checkboxId = "checkbox" + todo.uniqueId;
  let labelId = "label" + todo.uniqueId;
  let todoId = "todo" + todo.uniqueId;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todoItemsContainer", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.onclick = function () {
    onTodoStatusChange(checkboxId, labelId);
  };
  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick = function () {
    onDeleteTodoItems(todoId);
  };
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  let todoCount = todoList.length;
  todoCount = todoCount + 1;

  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Please Enter Valid Input");
  }

  let newTodo = {
    text: userInputValue,
    uniqueId: todoCount,
  };
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}
addTodoButton.onclick = function () {
  onAddTodo();
};
