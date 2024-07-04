import  './style.css';
import menuPage from './menu'
const menu = document.getElementById("menu")
const home = document.getElementById("home");
const about = document.getElementById("about")
function mainContent(){
     const content = document.getElementById("content");
     const mainPage = `<div class="meme">HI there</div>`;
     content.innerHTML = "";
     content.innerHTML += `<div class="meme">HI there</div>`;
}

mainContent();
menu.addEventListener("click", menuPage);
home.addEventListener("click", mainContent);
about.addEventListener("click",(c));