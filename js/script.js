const form = document.querySelector("form");
const campo_resultado = document.querySelector(".campo_resultado");
var resultado = document.getElementById("resultado");

function calcular_imc() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value / 100;
  var calculo = peso / (altura * altura);

  const imc = calculo.toFixed(2);

  if (imc < 18.5) {
    resultado.innerHTML = "IMC de " + imc + " Abaixo do peso normal";
  } else if (imc > 18.5 && imc <= 24.9) {
    resultado.innerHTML = "IMC de " + imc + " Peso normal";
  } else if (imc > 25 && imc <= 29.9) {
    resultado.innerHTML = "IMC de " + imc + " Excesso de peso";
  } else if (imc > 30 && imc <= 34.9) {
    resultado.innerHTML = "IMC de " + imc + " Obesidade I";
  } else if (imc > 35 && imc <= 39.9) {
    resultado.innerHTML = "IMC de " + imc + " Obesidade II";
  } else if (imc >= 40) {
    resultado.innerHTML = "IMC de " + imc + " Obesidade III";
  }

  form.style.display = "none";
  campo_resultado.style.display = "flex";
}

function voltar_imc() {
  form.style.display = "flex";
  campo_resultado.style.display = "none";
}
