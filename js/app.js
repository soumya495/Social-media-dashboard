let backroundColorDark1 = document.querySelectorAll(".backround-color-dark-1");
let backroundColorDark2 = document.querySelectorAll(".backround-color-dark-2");
let backroundColorDark3 = document.querySelectorAll(".backround-color-dark-3");
let txtColorDark1 = document.querySelectorAll(".txt-color-dark-1");
let txtColorDark2 = document.querySelectorAll(".txt-color-dark-2");

document.querySelector(".toggle-area").addEventListener("click", function () {
  document.querySelector(".circle").classList.toggle("clicked");
  document
    .querySelector(".toggle-area")
    .addEventListener("transitionstart", () => {
      document.querySelector(".toggle-area").classList.add("pointer-event-off");
      document
        .querySelector(".toggle-area")
        .classList.remove("pointer-event-on");
    });
  document
    .querySelector(".toggle-area")
    .addEventListener("transitionend", () => {
      document
        .querySelector(".toggle-area")
        .classList.remove("pointer-event-off");
      document.querySelector(".toggle-area").classList.add("pointer-event-on");
    });
  document.querySelector(".toggle-area").classList.toggle("clicked");

  // theme toggle color changes
  backroundColorDark1.forEach((color) =>
    color.classList.toggle("backround-color-light-1")
  );
  backroundColorDark2.forEach((color) =>
    color.classList.toggle("backround-color-light-2")
  );
  backroundColorDark3.forEach((color) =>
    color.classList.toggle("backround-color-light-3")
  );
  document.querySelector(".overview h2").classList.toggle("txt-color-light-2");
  txtColorDark1.forEach((color) => color.classList.toggle("txt-color-light-1"));
  txtColorDark2.forEach((color) => color.classList.toggle("txt-color-light-2"));
});
