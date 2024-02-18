const postList = document.getElementById("posts");

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  displayPosts(posts.slice(0, 10)); // Faqat birinchi 10 ta postni olish
}

function displayPosts(posts) {
  let str = "";
  posts.forEach((post) => {
    str += `
        <div class="post">
            <h3 class="post-title">${post.title}</h3>
            <p class="post-body">${post.body}</p>
            <a href="../pages/commit.html" class="post-btn">Commit</a>
        </div>
    `;
  });
  postList.innerHTML = str;
}

fetchPosts().catch(((error) => console.error("Error:", error)));
