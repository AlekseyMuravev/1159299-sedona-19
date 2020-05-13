"use strict";

let mainNav = document.querySelector(".main-nav");
let toggle = document.querySelector(".toggle");
let toggleLineTop = document.querySelector(".toggle__line-top");
let toggleLineMiddle = document.querySelector(".toggle__line-middle");
let toggleLineBottom = document.querySelector(".toggle__line-bottom");

toggle.classList.remove("toggle--hide");

if (window.innerWidth < 768) {
  mainNav.classList.add("main-nav--hide");
}

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.remove("main-nav--hide")
  if (!toggleLineTop.classList.contains("toggle__line-top-open")) {
    toggleLineTop.classList.add("toggle__line-top-open");
    toggleLineMiddle.classList.add("toggle__line-middle-open");
    toggleLineBottom.classList.add("toggle__line-bottom-open");
    toggleLineTop.classList.remove("toggle__line-top-close");
    toggleLineMiddle.classList.remove("toggle__line-middle-close");
    toggleLineBottom.classList.remove("toggle__line-bottom-close");
    mainNav.classList.add("main-nav--open");
  } else {
    toggleLineTop.classList.remove("toggle__line-top-open");
    toggleLineMiddle.classList.remove("toggle__line-middle-open");
    toggleLineBottom.classList.remove("toggle__line-bottom-open");
    toggleLineTop.classList.add("toggle__line-top-close");
    toggleLineMiddle.classList.add("toggle__line-middle-close");
    toggleLineBottom.classList.add("toggle__line-bottom-close");
    mainNav.classList.remove("main-nav--open");
    mainNav.classList.add("main-nav--hide");
  }
})
