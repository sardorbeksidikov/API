const photosList = document.getElementById("photos");

async function fetchPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();
  displayPhotos(photos.slice(0, 10));
}

function displayPhotos(photos) {
  let str = "";
  photos.forEach((photo) => {
    str += `
        <div class="photo">
            <div class="photo-box">
            <div><h3 class="photo-title">${photo.title}</h3></div>
            <div><img src="${photo.thumbnailUrl}" alt=""></div>
            </div>
            

        </div>
    `;
  });
  photosList.innerHTML = str;
}

fetchPhotos().catch((error) => console.error("Error:", error));
