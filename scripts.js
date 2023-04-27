const images = [
  "Aloe Vera.jpg",
  "Baby Rubberplant.jpg",
  "Chinese Money Plant.jpg",
  "Devil's Vine.jpg",
  "Elephant Cactus.jpg",
  "Euphorbia Lactea Cristata.jpg",
  "Monstera Deliciosa.jpg",
  "Moon Valley Pilea.jpg",
  "Prayer Plant.jpg",
  "Raindrop Plant.jpg",
  "Rex Begonia.jpg",
  "Silver Inch Plant.jpg",
  "Umbrella Plant.jpg"
]

;const text = [
  'Aloe Vera.txt',
  'Baby Rubberplant.txt',
  'Chinese Money Plant.txt',
  'Devil\'s Vine.txt',
  'Elephant Cactus.txt',
  'Euphorbia Lactea Cristata.txt',
  'Monstera Deliciosa.txt',
  'Moon Valley Pilea.txt',
  'Prayer Plant.txt',
  'Raindrop Plant.txt',
  'Rex Begonia.txt',
  'Silver Inch Plant.txt',
  'Umbrella Plant.txt'
];

const setup = () => {

  let ImgName = document.querySelector("#gallery");

  for (i = 0; i < images.length; i++) {
    fetch(`text/${text[i]}`)
      .then(response => response.text())
      .then(data => {
        ImgName.insertAdjacentHTML("beforeend", 
        `
        <div class="frame">
        <img class="image" src="images/${images[i]}"></img>
        <p>${images[i].slice(0,-4)}</p>
        <div class="description">${data}</div>
        </div>
        `);
      })
      .catch(error => console.error(error));
  }
}

window.addEventListener("load", setup);


