const images = [  "Aloe Vera.jpg",  "Baby Rubberplant.jpg",  "Chinese Money Plant.jpg",  "Devil's Vine.jpg",  "Elephant Cactus.jpg",  "Euphorbia Lactea Cristata.jpg",  "Monstera Deliciosa.jpg",  "Moon Valley Pilea.jpg",  "Prayer Plant.jpg",  "Raindrop Plant.jpg",  "Rex Begonia.jpg",  "Silver Inch Plant.jpg",  "Umbrella Plant.jpg"]


const setup = () => {

  let ImgName = document.querySelector("#gallery");


  for (i = 0; i < images.length; i++) {
    
    ImgName.insertAdjacentHTML("beforeend", 
    `
    <div class="frame">
    <img class="image" src="images/${images[i]}"></img>
    <p>${images[i].slice(0,-4)}</p>
    <object data="text/Aloe Vera.txt"></object>
    </div>
    
    `);
  }

}

window.addEventListener("load", setup);


