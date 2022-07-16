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
const underline = document.querySelector('.underline');
const navUl = document.querySelector('nav ul');
const menuToggle = document.querySelector('.menu-toggle');

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
    underline.style.transform = `translate(${linkCoords.left + window.scrollX}px, -3px)`;
    underline.style.borderBottomWidth = "3px";
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

function menuInteractive() {
  try {
    menu.forEach(link => link.addEventListener('mouseenter', underlineLink));
    navUl.addEventListener('mouseleave', removeLink);
    menuToggle.addEventListener('click', menuExpand);
  } catch (error) {
    if(showlog) console.log(error);
  }
}
