"use strict";

let mainNav = document.querySelector(".main-nav");
let toggle = document.querySelector(".toggle");
let toggleLineTop = document.querySelector(".toggle__line-top");
let toggleLineMiddle = document.querySelector(".toggle__line-middle");
let toggleLineBottom = document.querySelector(".toggle__line-bottom");

let modalOk = document.querySelector(".modal-ok");
let modalOkButton = document.querySelector(".modal-ok__button");
let modalError = document.querySelector(".modal-error");
let modalErrorButton = document.querySelector(".modal-error__button");

let form = document.querySelector(".form");
let inputName = document.querySelector(".input-name");
let inputSurname = document.querySelector(".input-surname");
let inputPhone = document.querySelector(".input-phone");
let inputEmail = document.querySelector(".input-email");

toggle.classList.remove("toggle--hide");

if (window.innerWidth < 768) {
  mainNav.classList.add("main-nav--hide");
}

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.remove("main-nav--hide")
  if (!toggleLineTop.classList.contains("toggle__line-top-open")) {
    toggleLineTop.classList.add("toggle__line-top-open");
    toggleLineTop.classList.remove("toggle__line-top-close");
    toggleLineMiddle.classList.add("toggle__line-middle-open");
    toggleLineMiddle.classList.remove("toggle__line-middle-close");
    toggleLineBottom.classList.add("toggle__line-bottom-open");
    toggleLineBottom.classList.remove("toggle__line-bottom-close");
    mainNav.classList.add("main-nav--open");
  } else {
    toggleLineTop.classList.remove("toggle__line-top-open");
    toggleLineTop.classList.add("toggle__line-top-close");
    toggleLineMiddle.classList.remove("toggle__line-middle-open");
    toggleLineMiddle.classList.add("toggle__line-middle-close");
    toggleLineBottom.classList.remove("toggle__line-bottom-open");
    toggleLineBottom.classList.add("toggle__line-bottom-close");
    mainNav.classList.remove("main-nav--open");
    mainNav.classList.add("main-nav--hide");
  }
})

modalOkButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!modalOk.classList.contains("modal-ok--hide")) {
    modalOk.classList.add("modal-ok--hide")
  };
})

modalErrorButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!modalError.classList.contains("modal-error--hide")) {
    modalError.classList.add("modal-error--hide")
  };
})

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (inputName.value && inputSurname.value && inputPhone.value && inputEmail.value) {
    modalOk.classList.remove("modal-ok--hide");
  } else {
    modalError.classList.remove("modal-error--hide");
  }
})
