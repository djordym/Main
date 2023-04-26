const images = [    "Aloe Vera.jpg",    "Chinese_monkey_plant.jpg",    "devilsvine.jpg",    "elephant_cactus.jpg",    "Euphorbia_lactea_cristata.jpg",     "monstera_deliciosa.jpg",    "Moon_Valley_Pilea.jpg",        "Peperomia_Obtusifolia.jpg",    "Peperomia_Polybotrya.jpg",    "Prayer_Plant.jpg",    "Rex_Begonia.jpg",    "Silver_Inch_Plant.jpg",     "umbrella_plant.jpg"];


const setup = () => {

  let ImgName = document.querySelector("#gallery");

  for (i = 0; i < images.length; i++) {
    ImgName.insertAdjacentHTML("beforeend", 
    `
    <div class="frame">
    <img class="image" src="images/${images[i]}"></img>
    <p>
    </div>
    
    `);
  }

}

window.addEventListener("load", setup);