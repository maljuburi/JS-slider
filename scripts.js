let slides = [];
let index = 0;

document.addEventListener("DOMContentLoaded", () => {
  slides = document.getElementsByClassName("slide");
  showCurrent(index);

  const html = document.getElementsByTagName("html");
  const body = document.getElementsByTagName("body");

  if (window.innerHeight < html[0].scrollHeight) {
    html[0].style.height = "auto";
    body[0].style.height = "auto";
  } else {
    body[0].style.height = "100%";
    html[0].style.height = "100%";
  }
});

const slide = n => {
  let target = (index += n);
  showCurrent(target);
};

const showCurrent = n => {
  if (n > slides.length - 1) {
    index = 0;
  }

  if (n < 0) {
    index = slides.length - 1;
  }

  //hide other images
  for (let j = 0; j < slides.length; j++) {
    slides[j].style.opacity = "0";
    slides[index].style.transition = "opacity 0.5s";
  }

  //Show first image on load
  slides[index].style.opacity = "1";
  slides[index].style.transition = "opacity 0.5s";
};
