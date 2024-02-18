const photosList = document.getElementById("albom");

async function fetchPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const photos = await response.json();
  displayPhotos(photos.slice(0, 10));
}

function displayPhotos(photos) {
  let str = "";
  photos.forEach((photo) => {
    str += `
        <div class="albom">
            <div class="albom-box">
            <div><h3 class="albom-title">${photo.title}</h3></div>
            <div><a class="albom-link" href="./photos.html">Photos</a></div>
            </div>
            

        </div>
    `;
  });
  photosList.innerHTML = str;
}

fetchPhotos().catch((error) => console.error("Error:", error));
