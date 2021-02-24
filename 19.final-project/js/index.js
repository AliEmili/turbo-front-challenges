let currentIndex = 0;
const titleElement = document.querySelector(".title");
const summaryElement = document.querySelector(".summary");
const priceElement = document.querySelector(".price");
const bg_color = document.querySelector(".bg-color");
const imgElement = document.querySelector(".main-img");
const accelerationElement = document.querySelector(".acceleration");
const velocityElement = document.querySelector(".velocity");
const horsepowerElement = document.querySelector(".horsepower");

const setData = (currentIndex) => {
  titleElement.innerHTML = cars[currentIndex].title;
  summaryElement.innerHTML = cars[currentIndex].summary;
  priceElement.innerHTML = cars[currentIndex].price;
  bg_color.style.backgroundColor = cars[currentIndex].theme;
  imgElement.src = `./assets/images/${cars[currentIndex].image}`;
  accelerationElement.innerHTML = cars[currentIndex].specifications[0];
  velocityElement.innerHTML = cars[currentIndex].specifications[1];
  horsepowerElement.innerHTML = cars[currentIndex].specifications[2];
};

setData(currentIndex);
