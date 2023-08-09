import onLoad from "./page-load";
import loadMenu from "./menu";
import loadContact from "./contact";

onLoad();

const contentDiv = document.querySelector('#content');
const homeBttn = document.querySelector('.home-bttn');
const menuBttn = document.querySelector('.menu-bttn');
const contactBttn = document.querySelector('.contact-bttn');

homeBttn.addEventListener('click', () => {
    clearPage();
    onLoad();
})

menuBttn.addEventListener('click', () => {
    clearPage();
    loadMenu();
})

contactBttn.addEventListener('click', () => {
    clearPage();
    loadContact();
})


function clearPage () {
    contentDiv.textContent = '';
}
