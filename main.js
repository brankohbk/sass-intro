const menu = document.querySelector("#menu");
const burger = document.querySelector(".burger");
burger.addEventListener("click",e=>{
  menu.classList.toggle("expand");
})

window.addEventListener("resize", ()=>{
  if(window.innerWidth>=768){
    menu.classList.remove("expand");
  }
})