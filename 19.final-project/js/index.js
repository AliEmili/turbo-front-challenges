"use strict";
function PageShower(
  cars,
  elementsToDisable,
  fadingEffect,
  containerElement,
  nextButton,
  prevButton,
  pageHolder,
  bg_color,
  titleElement,
  summaryElement,
  imgElement,
  priceElement,
  specificationElement,
  accelerationElement,
  velocityElement,
  horsepowerElement
) {
  var currentIndex = 0;
  this.cars = cars;
  this.elementsToDisable = elementsToDisable;
  this.fadingEffect = fadingEffect;
  this.containerElement = containerElement;
  this.nextButton = nextButton;
  this.prevButton = prevButton;
  this.pageHolder = pageHolder;
  this.bg_color = bg_color;
  this.imgElement = imgElement;
  this.titleElement = titleElement;
  this.summaryElement = summaryElement;
  this.priceElement = priceElement;
  this.specificationElement = specificationElement;
  this.accelerationElement = accelerationElement;
  this.velocityElement = velocityElement;
  this.horsepowerElement = horsepowerElement;

  this.disableElements = () => {
    console.log(this.elementsToDisable);
    this.elementsToDisable.map((element) => {
      element.classList.add("disable");
    });
    setTimeout(() => {
      this.fadingEffect.style.width = "100%";
      this.fadingEffect.style.backgroundColor = this.cars[currentIndex].theme;
    }, 700);
    this.containerElement.style.backgroundColor = this.bg_color.style.backgroundColor;
  };
  this.enableElements = () => {
    this.elementsToDisable.map((element) => {
      element.classList.remove("disable");
    });
    setTimeout(() => {
      this.fadingEffect.style.width = 0;
    }, 1400);
  };
  this.checkBtnStyles = () => {
    if (currentIndex === 0) {
      this.prevButton.classList.add("disable");
    } else if (currentIndex === this.cars.length - 1) {
      this.nextButton.classList.add("disable");
    } else {
      this.nextButton.classList.remove("disable");
      this.prevButton.classList.remove("disable");
    }
  };
  this.paintCurrentPageholder = () => {
    for (let i = 0; i < this.pageHolder.children.length; i++) {
      if (i === currentIndex) {
        this.pageHolder.children[i].children[0].classList.add("enable");
      } else {
        this.pageHolder.children[i].children[0].classList.remove("enable");
      }
    }
  };
  this.incrementIndex = () => {
    if (currentIndex < this.cars.length - 1) {
      currentIndex++;
      return true;
    } else {
      return false;
    }
  };
  this.setData = (afterTime) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(
          this.velocityElement,
          this.accelerationElement,
          this.horsepowerElement
        );
        this.bg_color.style.backgroundColor = this.cars[currentIndex].theme;
        this.imgElement.src = `./assets/images/${this.cars[currentIndex].image}`;
        this.accelerationElement.innerHTML = this.cars[
          currentIndex
        ].specifications[0];
        this.velocityElement.innerHTML = this.cars[
          currentIndex
        ].specifications[1];
        this.horsepowerElement.innerHTML = this.cars[
          currentIndex
        ].specifications[2];
        setTimeout(() => {
          this.titleElement.innerHTML = this.cars[currentIndex].title;
          this.summaryElement.innerHTML = this.cars[currentIndex].summary;
          this.priceElement.innerHTML = this.cars[currentIndex].price;
        }, afterTime);
        resolve("done");
      }, afterTime);
    });
  };
  this.createPageholder = () => {
    for (let i = 0; i < this.cars.length; i++) {
      const div = document.createElement("div");
      div.classList.add("each-page");
      div.style.height = 250 / this.cars.length + "px";
      const childDiv = document.createElement("div");
      childDiv.classList.add("backgroundColor");
      div.append(childDiv);
      this.pageHolder.append(div);
    }
    this.paintCurrentPageholder();
  };
  this.decrementIndex = () => {
    if (currentIndex > 0) {
      currentIndex--;
      return true;
    } else {
      return false;
    }
  };
  this.getCurrentIndex = () => {
    return currentIndex;
  };
  this.handleChange = () => {
    this.checkBtnStyles();
    this.paintCurrentPageholder();
    this.disableElements();
    this.setData(500)
      .then(() => this.enableElements())
      .catch((err) => alert(err));
  };
  this.handleNext = () => {
    if (this.incrementIndex()) {
      this.handleChange();
    }
  };
  this.handlePrev = () => {
    if (pageShower.decrementIndex()) {
      this.handleChange();
    }
  };
}

// main
const titleElement = document.querySelector(".title");
const summaryElement = document.querySelector(".summary");
const priceElement = document.querySelector(".price");
const bg_color = document.querySelector(".bg-color");
const imgElement = document.querySelector(".main-img");
const specificationElement = document.querySelector(".specification");
const accelerationElement = document.querySelector(".acceleration");
const velocityElement = document.querySelector(".velocity");
const horsepowerElement = document.querySelector(".horsepower");
const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const pageHolder = document.querySelector(".page-holder");
const containerElement = document.querySelector(".container");
const fadingEffect = document.querySelector(".fadingEffect");

const elementsToDisable = [imgElement, specificationElement, bg_color];
const pageShower = new PageShower(
  cars,
  elementsToDisable,
  fadingEffect,
  containerElement,
  nextButton,
  prevButton,
  pageHolder,
  bg_color,
  titleElement,
  summaryElement,
  imgElement,
  priceElement,
  specificationElement,
  accelerationElement,
  velocityElement,
  horsepowerElement
);

nextButton.addEventListener("click", pageShower.handleNext);
prevButton.addEventListener("click", pageShower.handlePrev);

pageShower.setData(0).catch((err) => alert(err));
pageShower.checkBtnStyles();
pageShower.createPageholder();
