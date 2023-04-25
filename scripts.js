const images = [    "Aloe_Vera.jpg",    "Chinese_monkey_plant.jpg",    "devilsvine.jpg",    "elephant_cactus.jpg",    "Euphorbia_lactea_cristata.jpg",     "monstera_deliciosa.jpg",    "Moon_Valley_Pilea.jpg",    "navvine_500.png",    "Peperomia_Obtusifolia.jpg",    "Peperomia_Polybotrya.jpg",    "Prayer_Plant.jpg",    "Rex_Begonia.jpg",    "Silver_Inch_Plant.jpg",     "umbrella_plant.jpg"];


const setup = () => {

  let ImgName = document.querySelector("#gallery");

  for (i = 0; i < images.length; i++) {
    ImgName.insertAdjacentHTML("beforeend", `<img class="galpic" src="images/${images[i]}"></img>`);
  }

}

window.addEventListener("load", setup);