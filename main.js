//variaveis
const randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let xAttempts = 1;

//Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);


//funções
function handleTryClick(event) {
    event.preventDefault();//não façao o padrão, que seria enviar o formulário

    const inputNumber = document.querySelector("#inputNumber");

    if (Number(inputNumber.value) == randomNumber) {
        toogleScreen();
        screen2.querySelector("h2").innerText = `Voce acertou em ${xAttempts} tentativas`;
    }

    inputNumber.value = "";
    xAttempts++;
}

function handleResetClick() {
    toogleScreen();
    xAttempts = 1;
}

function toogleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

