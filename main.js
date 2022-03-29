// CONSTANTES DE ELEMENTOS HTML
const diceNumber = document.querySelector('.js-diceNum');
const userNumber = document.querySelector('.js-userNum');
const buttonPlay = document.querySelector('.js-buttonPlay');
const content = document.querySelector ('.js-content');
const balance =document.querySelector ('.js-balance');

//CONSTANTES DE INPUTS
const selectDiceNum = diceNumber.value;
const userBet =userNumber.value;

// CONTANTES PARA RESULTADO TEXTO
const win = `<h4> Has ganado el doble de lo apostado</h4>`;
const loose = `<h4> Has perdido lo apostado</h4>`;

//CONTANTE PARA GUARDAR RANDOM NUMBERS
const randomNum = getRandomNumber(6);

//FUNCIÓN NÚMERO RANDOM DADO ORDENADOR
function getRandomNumber (max) {
    return Math.ceil(Math.random() *max);
}

// FUNCIÓN APUESTA
function bet (){
    if (selectDiceNum === randomNum){
        content.innerHTML = win

    }else{
        content.innerHTML = loose
    };
}


//FUNCIÓN HANDLE CLICK
function handleClick (event){
    event.preventDefault();
    console.log("clickaaaa!!");
}



//CLICK BOTÓN
buttonPlay.addEventListener ('click' , handleClick)

    
