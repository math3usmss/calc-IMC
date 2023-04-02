const form = document.querySelector("form");
const campo_resultado = document.querySelector(".campo_resultado");

const peso = document.getElementById("peso").value;
const altura = document.getElementById("altura").value;
var resultado = document.getElementById("resultado");

const calculo = peso * (altura * altura);

function calcular_imc() {
  switch (true) {
    case calculo < 18.5:
      resultado.innerHTML = "Abaixo do peso normal";
      break;
    case calculo > 18.5 && calculo <= 24.9:
      resultado.innerHTML = "Peso normal";
      break;
    case calculo > 25 && calculo <= 29.9:
      resultado.innerHTML = "Excesso de peso";
      break;
    case calculo > 30 && calculo <= 34.9:
      resultado.innerHTML = "Obesidade I";
      break;
    case calculo > 35 && calculo <= 39.9:
      resultado.innerHTML = "Obesidade II";
      break;
    case calculo >= 40:
      resultado.innerHTML = "Obesidade III";
      break;
    default:
      resultado.innerHTML = "Erro!! tente novamente";
      break;
  }

  form.style.display = "none";
  campo_resultado.style.display = "flex";
}

function voltar_imc() {
  form.style.display = "flex";
  campo_resultado.style.display = "none";
}
