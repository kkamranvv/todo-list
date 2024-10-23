document.getElementById("add-btn").addEventListener("click", function () {
  const taskText = document.getElementById("todo-input").value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const todoList = document.getElementById("todo-list");

  const listItem = document.createElement("li");
  listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn">Delete</button>
  `;

  todoList.appendChild(listItem);

  // Clear input
  document.getElementById("todo-input").value = "";

  // Delete task
  listItem.querySelector(".delete-btn").addEventListener("click", function () {
    todoList.removeChild(listItem);
  });
});
