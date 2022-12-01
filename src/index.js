import "./style1.css";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#My-resp").innerHTML = generaExcusa();
  });
};
let generaExcusa = () => {
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let exten =['com','es','info','cl','org','net']

  let uno= (Math.floor(Math.random * pronoun.length ))
  let dos =(Math.floor(Math.random * adj.length ))
  let tres=(Math.floor(Math.random * noun.length ))
  let cuatro=(Math.floor(Math.random * exten.length ))

  return pronoun[uno] +' '+adj[dos]+' '+noun[tres]+' '+exten[cuatro]
};