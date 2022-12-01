/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#My-resp").innerHTML = generaExcusa();
  });
};
let generaExcusa = () => {
  let pronoun = ['the','our','meat','floor','pencil'];
  let adj = ['great', 'big','small','fast','flash' ];
  let noun = ['jogger','racoon','geen','red','blue'];
  let exten =['com','es','info','cl','org','net']

  let uno= (Math.floor(Math.random * pronoun.length ))
  let dos =(Math.floor(Math.random * adj.length ))
  let tres=(Math.floor(Math.random * noun.length ))
  let cuatro=(Math.floor(Math.random * exten.length ))

  return pronoun[uno] +' '+adj[dos]+' '+noun[tres]+' '+exten[cuatro]
};