function addTodo() {
  console.log("Add Todo function called");

  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  const todo = todoInput.value;
  if (todo.trim() === "") return;
  const li = document.createElement("li");
  li.innerText = todo;

  const btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.className = "delete-btn";

  btn.onclick = function () {
    li.remove();
  };
  li.appendChild(btn);
  todoList.appendChild(li);
  todoInput.value = "";
}
