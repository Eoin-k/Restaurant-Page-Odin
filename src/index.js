import  './style.css';
import menuPage from './menu'
import aboutPage from './about';
import mainContent from './home'
const menu = document.getElementById("menu")
const home = document.getElementById("home");
const about = document.getElementById("about")
mainContent();
menu.addEventListener("click", menuPage);
home.addEventListener("click", mainContent);
about.addEventListener("click",aboutPage);