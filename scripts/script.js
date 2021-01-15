// JavaScript Document

var deButton = document.querySelector("nav");
var navUl = document.querySelector("nav ul")
deButton.addEventListener("click", toggleMenu);
navUl.addEventListener("click", stopPropagation)

function toggleMenu() {
  navUl.classList.toggle("toonMenu");
}

function stopPropagation(event){
  event.stopPropagation()
}
