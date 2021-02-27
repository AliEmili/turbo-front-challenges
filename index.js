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
let currentIndex = 0;

const disableElements = () => {
  imgElement.classList.add("disable");
  specificationElement.classList.add("disable");
  bg_color.classList.add("disable");
  setTimeout(() => {
    fadingEffect.style.width = "100%";
    fadingEffect.style.backgroundColor = cars[currentIndex].theme;
  }, 700);
  containerElement.style.backgroundColor = bg_color.style.backgroundColor;
};

const enableElements = () => {
  imgElement.classList.remove("disable");
  specificationElement.classList.remove("disable");
  bg_color.classList.remove("disable");
  setTimeout(() => {
    fadingEffect.style.width = 0;
  }, 1400);
};

const checkBtnStyles = () => {
  if (currentIndex === 0) {
    prevButton.classList.add("disable");
  } else if (currentIndex === cars.length - 1) {
    nextButton.classList.add("disable");
  } else {
    nextButton.classList.remove("disable");
    prevButton.classList.remove("disable");
  }
};

const incrementIndex = () => {
  if (currentIndex < cars.length - 1) {
    currentIndex++;
    return true;
  } else {
    return false;
  }
};

const decrementIndex = () => {
  if (currentIndex > 0) {
    currentIndex--;
    return true;
  } else {
    return false;
  }
};

const handleChange = (currentIndex, pageHolder) => {
  checkBtnStyles();
  paintCurrentPageholder(pageHolder, currentIndex);
  disableElements();
  setData(currentIndex, 500)
    .then(() => enableElements())
    .catch((err) => alert(err));
};

const handleNext = () => {
  if (incrementIndex()) {
    handleChange(currentIndex, pageHolder);
  }
};

const handlePrev = () => {
  if (decrementIndex()) {
    handleChange(currentIndex, pageHolder);
  }
};

nextButton.addEventListener("click", handleNext);
prevButton.addEventListener("click", handlePrev);

const setData = (currentIndex, afterTime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      bg_color.style.backgroundColor = cars[currentIndex].theme;
      imgElement.src = `./assets/images/${cars[currentIndex].image}`;
      accelerationElement.innerHTML = cars[currentIndex].specifications[0];
      velocityElement.innerHTML = cars[currentIndex].specifications[1];
      horsepowerElement.innerHTML = cars[currentIndex].specifications[2];
      setTimeout(() => {
        titleElement.innerHTML = cars[currentIndex].title;
        summaryElement.innerHTML = cars[currentIndex].summary;
        priceElement.innerHTML = cars[currentIndex].price;
      }, afterTime);
      resolve("done");
    }, afterTime);
  });
};

const paintCurrentPageholder = (pageHolder, currentIndex) => {
  for (let i = 0; i < pageHolder.children.length; i++) {
    if (i === currentIndex) {
      pageHolder.children[i].children[0].classList.add("enable");
    } else {
      pageHolder.children[i].children[0].classList.remove("enable");
    }
  }
};

const createPageholder = (
  pageHolder,
  length,
  currentIndex,
  paintCurrentPageholder
) => {
  for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.classList.add("each-page");
    div.style.height = 250 / length + "px";
    const childDiv = document.createElement("div");
    childDiv.classList.add("backgroundColor");
    div.append(childDiv);
    pageHolder.append(div);
  }
  paintCurrentPageholder(pageHolder, currentIndex);
};

setData(currentIndex, 0).catch((err) => alert(err));
checkBtnStyles();
createPageholder(pageHolder, cars.length, currentIndex, paintCurrentPageholder);
