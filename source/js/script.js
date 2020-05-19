"use strict";

var mainNav = document.querySelector(".main-nav");
var toggle = document.querySelector(".toggle");
var toggleLineTop = document.querySelector(".toggle__line-top");
var toggleLineMiddle = document.querySelector(".toggle__line-middle");
var toggleLineBottom = document.querySelector(".toggle__line-bottom");

var modalOk = document.querySelector(".modal-ok");
var modalOkButton = document.querySelector(".modal-ok__button");
var modalError = document.querySelector(".modal-error");
var modalErrorButton = document.querySelector(".modal-error__button");

var form = document.querySelector(".form");
var inputName = document.querySelector(".input-name");
var inputSurname = document.querySelector(".input-surname");
var inputPhone = document.querySelector(".input-phone");
var inputEmail = document.querySelector(".input-email");

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
    modalOk.classList.add("modal-ok--hide");
    form.submit()
  };
})

modalErrorButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!modalError.classList.contains("modal-error--hide")) {
    modalError.classList.add("modal-error--hide");
  };
})

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (inputName.value && inputSurname.value && inputPhone.value && inputEmail.value) {
    modalOk.classList.remove("modal-ok--hide");
  } else {
    modalError.classList.remove("modal-error--hide");
    if (!inputName.value) {
      inputName.classList.add("text-input__input--invalid")
    };
    if (!inputSurname.value) {
      inputSurname.classList.add("text-input__input--invalid")
    };
    if (!inputPhone.value) {
      inputPhone.classList.add("text-input__input--invalid")
    };
    if (!inputEmail.value) {
      inputEmail.classList.add("text-input__input--invalid")
    };
  }
})
