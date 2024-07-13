/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio] + " ";
  }

  let who = ["The Elephant", "My Cousin", "The Elf", "The Ghost"];
  let action = ["took away", "hid", "broke", "threw away"];
  let what = ["my umbrella", "my cookies", "the clock"];
  let when = [
    "before the party",
    "while cooking",
    "during the storm",
    "when I was at the cinema"
  ];

  let excusa =
    aleatorio(who) + aleatorio(action) + aleatorio(what) + aleatorio(when);

  let elementExcuse = document.querySelector("#excuse");
  elementExcuse.innerHTML = excusa;

  let excuseButton = document.querySelector("#generate-excuse");

  excuseButton.addEventListener("click", () => {
    let nuevaExcusa =
      aleatorio(who) + aleatorio(action) + aleatorio(what) + aleatorio(when);
    elementExcuse.innerHTML = nuevaExcusa;
  });
  // document.querySelector("#excuse").innerHTML = excusa;
};
