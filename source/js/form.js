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
//   if (!inputName.value || !inputSurname.value) {
//     evt.preventDefault();
//     modalError.remove("modal-error--hide");
//     if (!inputName.value) {
//       inputName.classList.add("text-input__input--error")
//     };
//     if (!inputSurname.value) {
//       inputSurname.classList.add("text-input__input--error")
//     };
//   }
// })
