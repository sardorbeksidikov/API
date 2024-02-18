const commentList = document.getElementById("comments");

async function fetchComment() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const posts = await response.json();
  displayComment(posts.slice(0, 6)); // Faqat birinchi 10 ta postni olish
}

function displayComment(comments) {
  let str = "";
  comments.forEach((comment) => {
    str += `
        <div class="comment">
            <h4 class="comment-email">${comment.email}</h4>
            <h2 class="comment-name">${comment.name}</h2>
            <p class="comment-body">${comment.body}</p>
        </div>
    `;
  });
  commentList.innerHTML = str;
}

fetchComment().catch((error) => console.error("Error:", error));
