import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {

  const iconos = ['♦', '♥', '♠', '♣'];
  const numeros = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];


  let palos = document.getElementById(`palo`);
  let numeroCont = document.getElementById('numero');
  let palo2 = document.getElementById(`paloReves`)
  let elIcono = numeroAleatoriomath(iconos);
  // console.log(elIcono);


  palos.textContent = elIcono;
  numeroCont.textContent = numeroAleatoriomath(numeros);
  palo2.textContent = elIcono;

}
// ---------------------------------funcion aleatorio-----------------------------------------
const numeroAleatoriomath = (array) => {
  const indiceRandom = Math.floor(Math.random() * array.length)
  // console.log(array[indiceRandom]);
  return array[indiceRandom];
  ;
}