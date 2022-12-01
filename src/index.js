import "./style.css";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#My-resp").innerHTML = generaExcusa();
  });
};
let generaExcusa = () => {
  let quien = ['Mi perro','El gato','El auto','El vecino','Una persona'];
  let accion = ['rompio','aplasto','destrozo','perdio','borro'];
  let que = ['mi tarea','mi comida','mi telefono','mi pc'];
  let cuando = ['hoy','ayer','la semana pasada','hace 2 dias'];

  let uno= (Math.floor(Math.random * quien.length ))
  let dos =(Math.floor(Math.random * accion.length ))
  let tres=(Math.floor(Math.random * que.length ))
  let cuatro=(Math.floor(Math.random * cuando.length )) 

  return quien[uno] +' '+accion[dos]+' '+que[tres]+' '+cuando[cuatro]
};