function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  const todo = todoInput.value;
  if (todo.trim() === "") return;
  const li = document.createElement("li");
  li.innerText = todo;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "Completed✔";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };
  li.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete❌";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
  todoInput.value = "";
}
