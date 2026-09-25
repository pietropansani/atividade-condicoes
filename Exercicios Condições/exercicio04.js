let peso = 75;
let altura = 1.83;

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obeso");
}
