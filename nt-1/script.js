"use strict";


input_1.addEventListener("input", () => {
  let notice1 = document.getElementsByClassName('n1')[0];
  let notice2 = document.getElementsByClassName('n2')[0];
  let input_1 = document.getElementById("input_1");

  let lorem = document.getElementById("lorem");
  let param = document.getElementsByClassName("param")[0];

  let result = lorem.innerText.includes(input_1.value);

  if (result === true) {
    // notice1.style.display = "block";
    // input_1.style.background = "green";
    // param.innerHTML = "Ushbu so'z matnda mavjud!";
  } else if (result === false) {
    // notice2.style.display = "block";
    // input_1.style.background = "red";
    // param.innerHTML = "Ushbu so'z matnda mavjud emas!";
  } else {
    alert ("Maydon bo'sh!!!");
  }
});
//////////////////////////////////////////////

let meva = document.getElementById("meva");
let input_2 = document.getElementById("input_2");
let params = document.getElementById("params");

let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", () => {
  let results = meva.innerText.includes(input_2.value);

   if (results === true) {
    params.innerHTML = "Ajoyib meva tanladingiz😁!";

  } else {
    params.innerHTML = "Kechirasiz, bazamizda bunday meva yoq😔!";
  }
});

// //////////////////////////////////////////////////
let form = document.getElementById('form');

        form.onsubmit = function (e) {
            e.preventDefault()[0];
       
        };


