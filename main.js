// CONSTANTES DE ELEMENTOS HTML
const diceNumber = document.querySelector('.js-diceNum');
const userNumber = document.querySelector('.js-userNum');
const buttonPlay = document.querySelector('.js-buttonPlay');
const resultDice = document.querySelector('.js-resultDice');
const content = document.querySelector ('.js-content');
const balance =document.querySelector ('.js-balance');

//CONSTANTES DE INPUTS



// CONTANTES PARA RESULTADO TEXTO
const win = `<h3> Has ganado el doble de lo apostado</h3>`;
const loose = `<h3> Has perdido lo apostado</h3>`;


//CONTANTE PARA GUARDAR RANDOM NUMBERS
const randomNum = getRandomNumber(6);

//FUNCIÓN NÚMERO RANDOM DADO ORDENADOR
function getRandomNumber (max) {
    return Math.ceil(Math.random() *max);
  
}

// FUNCIÓN APUESTA
function bet (){
    const randomNum = getRandomNumber(6);
    const selectDiceNum = parseInt(diceNumber.value);
    const userBet =parseInt(userNumber.value);
   
    if (selectDiceNum === randomNum){
        resultDice.innerHTML = `<p>Dado = ${randomNum} </p>`;
        content.innerHTML = win;

    }else{
        resultDice.innerHTML = `<p>Dado = ${randomNum} </p>`;
        content.innerHTML = loose;
    };
}


//FUNCIÓN HANDLE CLICK
function handleClick (event){
event.preventDefault();
  bet();
}



//CLICK BOTÓN
buttonPlay.addEventListener ('click' , handleClick)

    
