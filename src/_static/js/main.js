// ! all variables
var showlog = true;
var w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
var h =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

document.addEventListener('DOMContentLoaded', () => {
});

document.onscroll = () => {
};

window.onload = () => {}


const menu = document.querySelectorAll('nav ul li');
const underline = document.querySelector('.underline');
const navUl = document.querySelector('nav ul');
const menuToggle = document.querySelector('.menu-toggle');

function underlineLink() {
  const linkCoords = this.getBoundingClientRect();
  underline.style.transform = `translate(${linkCoords.left + window.scrollX}px, -3px)`;
  underline.style.borderBottomWidth = "3px";
  underline.style.width = `${linkCoords.width}px`;
  underline.style.opacity = "100";
}

function removeLink() {
  underline.style.opacity = "0";
}

function menuExpand() {
  navUl.classList.toggle("h-auto");
  document.querySelector('.bar2').classList.toggle("opacity-0");
  document.querySelector('.bar1').classList.toggle("-rotate-45");
  document.querySelector('.bar1').classList.toggle("translate-y-px");
  document.querySelector('.bar3').classList.toggle("-translate-y-px");
  document.querySelector('.bar3').classList.toggle("rotate-45");
}

new Splide('.splide', {
  type: 'loop',
  width: '1280px',
  drag: true,
  lazyLoad: 'nearby',
  preLoadPages: 0,
}).mount();

menu.forEach(link => link.addEventListener('mouseenter', underlineLink));
navUl.addEventListener('mouseleave', removeLink);
menuToggle.addEventListener('click', menuExpand);