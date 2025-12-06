import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {

  const iconos = ["♦", "♥", "♠", "♣"];
  const numeros = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];


  let palos = document.getElementById(`palo`);
  let numeroCont = document.getElementById('numero');
  let palo2 = document.getElementById(`paloReves`)
  let elIcono = numeroAleatoriomath(iconos);
  let elboton = document.querySelector(".boton");
  let color = `negro`


elboton.addEventListener(`click`,()=>{location.reload()})


  // console.log(elIcono);
  if (elIcono ==="♦" ) {
    color = `rojo`
    console.log(elIcono);
    console.log(color);
    
  }else if(elIcono==="♥") {
    color = `rojo`
    console.log(color);
    
  }
// console.log(color);

  palos.innerHTML =`<h2 class="${color}"> ${elIcono}</h2>`;

  numeroCont.textContent = numeroAleatoriomath(numeros);
  palo2.innerHTML= `<h2 class="${color}"> ${elIcono}</h2>`;

  // coloricono.textContent=cambiarcolor(`palo`);

  // let colorCambiado = () => {

  // }





}
// ---------------------------------funcion aleatorio-----------------------------------------
const numeroAleatoriomath = (array) => {
  const indiceRandom = Math.floor(Math.random() * array.length)
  // console.log(array[indiceRandom]);
  return array[indiceRandom];
  ;
}