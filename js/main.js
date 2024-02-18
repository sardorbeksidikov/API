const studentsList = document.getElementById("main-users");

async function fetchStudents() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const students = await response.json();
  displetStudent(students);
}

function displetStudent(students) {
  let str = "";

  students.forEach((student) => {
    str += `
        <div class="cart">
            <h2 class="cart-name">${student.name}</h2>
            <h4 class="cart-user">${student.username}</h4>
            <div class="cart-box">
            <div><h4 class="title-name">Email: </h4></div>
            <div><p class="cart-title">${student.email}</p></div>
            </div>
            <div class="cart-box">
            <div><h4 class="title-name">Address: </h4></div>
            <div><p class="cart-title">${student.address.street}</p></div>
            </div>
            <div class="cart-box">
            <div><h4 class="title-name">Website: </h4></div>
            <div><p class="cart-title">${student.website}</p></div>
            </div>
            <div class="cart-box">
            <div><h4 class="title-name">Phone: </h4></div>
            <div><p class="cart-title">${student.phone}</p></div>
            </div>
            <div class="cart-btn">
            <div><a href="../pages/post.html" class="btn">Post</a></div>
            <div><a href="../pages/todo.html" class="btn">ToDo</a></div>
            <div><a href="../pages/albom.html"class="btn">Photos</a></div>
            </div>
        </div>
        `;
  });
  studentsList.innerHTML = str;
}

fetchStudents().catch((error) => console.error("Error:", error));
