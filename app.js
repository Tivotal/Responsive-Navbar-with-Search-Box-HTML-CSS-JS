/* Created by Tivotal */

let nav = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");

let searchBtn = document.querySelector(".search-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  nav.classList.toggle("search-active");
});
