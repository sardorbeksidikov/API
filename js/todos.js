const todosList = document.getElementById("todos");

async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  displayTodos(todos.slice(0, 10)); 
}

function displayTodos(todos) {
  let str = "";
  todos.forEach((todo) => {
    str += `
        <div class="post">
            <h3 class="todo-title">${todo.title}</h3>
            

        </div>
    `;
  });
  todosList.innerHTML = str;
}

fetchTodos().catch((error) => console.error("Error:", error));
