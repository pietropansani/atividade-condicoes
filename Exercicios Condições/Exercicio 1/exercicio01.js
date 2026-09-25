let temp = Number(prompt("Digite uma temperatura: "));

if (temp < 15) {
    console.log("Muito Frio");
} else if (temp >= 15 && temp < 20) {
    console.log("Frio");
} else if (temp >= 21 && temp < 28 ) {
    console.log("Agradável");
} else {
    console.log("Quente");
}
