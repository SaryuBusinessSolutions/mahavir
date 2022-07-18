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


const menu = document.querySelectorAll('nav ul li');
const underline = document.querySelector('.underlinelink');
const navUl = document.querySelector('nav ul');
const menuToggle = document.querySelector('.menu-toggle');
const diagnostic = document.querySelector(".diagnostic");
const interventional = document.querySelector(".interventional");
const diagnosticMenu = document.querySelector(".diagnostic-menu");
const interventionalMenu = document.querySelector(".interventional-menu");


document.addEventListener('DOMContentLoaded', () => {
  splideInit();
  menuInteractive();
});

document.onscroll = () => {
};

window.onload = () => {}

function underlineLink() {
  try {
    const linkCoords = this.getBoundingClientRect();
    underline.style.transform = `translate(${linkCoords.left + window.scrollX}px, -4px)`;
    underline.style.borderBottomWidth = "4px";
    underline.style.width = `${linkCoords.width}px`;
    underline.style.opacity = "100";
  } catch (error) {
    if(showlog) console.log(error);
  }
}

function removeLink() {
  try {
    underline.style.opacity = "0";
  } catch (error) {
    if(showlog) console.log(error)    
  }
}

function menuExpand() {
  try {
    navUl.classList.toggle("h-auto");
    document.querySelector('.bar2').classList.toggle("opacity-0");
    document.querySelector('.bar1').classList.toggle("-rotate-45");
    document.querySelector('.bar1').classList.toggle("translate-y-px");
    document.querySelector('.bar3').classList.toggle("-translate-y-px");
    document.querySelector('.bar3').classList.toggle("rotate-45");
  } catch (error) {
    if(showlog) console.log(error);
  }
}

function splideInit(){
  try {
    new Splide('.splide', {
      type: 'loop',
      width: '1280px',
      drag: true,
      lazyLoad: 'nearby',
      preLoadPages: 0,
    }).mount();
  } catch (error) {
    if (showlog) console.log(error);
  }
}

function megaMenu() {
  diagnostic.classList.toggle("bg-white");
  diagnostic.classList.toggle("text-black");
  interventional.classList.toggle("bg-white");
  interventional.classList.toggle("text-black");
  diagnosticMenu.classList.toggle("hidden");
  interventionalMenu.classList.toggle("hidden");
}

function menuInteractive() {
  try {
    menu.forEach(link => link.addEventListener('mouseenter', underlineLink));
    navUl.addEventListener('mouseleave', removeLink);
    menuToggle.addEventListener('click', menuExpand);
    interventional.addEventListener('click', megaMenu);
    diagnostic.addEventListener('click', megaMenu);
  } catch (error) {
    if(showlog) console.log(error);
  }
}