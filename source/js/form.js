"use strict";

let modalOk = document.querySelector(".modal-ok");
let modalOkButton = document.querySelector(".modal-ok__button");
let modalError = document.querySelector(".modal-error");
let modalErrorButton = document.querySelector("modal-error__button");

let form = document.querySelector(".form");
let inputName = document.querySelector(".input-name");
let inputSurname = document.querySelector(".input-surname");
let inputPhone = document.querySelector(".input-phone");
let inputEmail = document.querySelector(".input-email");

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   if (!inputName.value || !inputSurname.value || !inputPhone.value || !inputEmail.value) {
//     modalError.remove("modal-error--hide");
//   }
// })

modalOkButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOk.classList.add("modal-ok--hide");
})
