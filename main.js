'use strict';

//FUNCIÓN GET ELEMENTS HTML
function getHtmlElement (jsClass){
   const nameConst=document.querySelector (jsClass);
   return nameConst;
}

const diceNumber = getHtmlElement('.js-diceNum');
const userNumber= getHtmlElement('.js-userNum');
const buttonPlay = getHtmlElement ('.js-buttonPlay');
const resultDice = getHtmlElement( '.js-resultDice');
const content = getHtmlElement('.js-content');
const balance = getHtmlElement('.js-balance');



// CONTANTES PARA RESULTADO TEXTO
const win = `<h3> Has ganado el doble de lo apostado</h3>`;
const loose = `<h3> Has perdido lo apostado</h3>`;



//FUNCIÓN NÚMERO RANDOM DADO ORDENADOR
function getRandomNumber (max) {
    return Math.ceil(Math.random() *max);
  
}

//FUNCION INNERHTML
function printHtml (element , msg) {
    element.innerHTML = msg;
}


// FUNCIÓN APUESTA
function bet (){
    const randomNum = getRandomNumber(6);

    //CONSTANTES DE INPUTS
    const selectDiceNum = parseInt(diceNumber.value);
    const userBet =parseInt(userNumber.value);
   
    if (selectDiceNum === randomNum){
       printHtml(resultDice , `<p>Dado = ${randomNum} </p>`) ;
       printHtml(content, win);
       

    }else{
        printHtml(resultDice , `<p>Dado = ${randomNum} </p>`) ;
       printHtml(content , loose)
    };
};

//FUNCION ACTUALIZACION DE SALDO
/*function balanceUpdate (){
    const userBetMoney = parseInt (userNumber.value);
    const selectDiceNum = parseInt(diceNumber.value);
    const balance =document.querySelector ('.js-balance');
    const balanceNum = parseInt (balance.innerHTML);

   if (selectDiceNum === randomNum){
        balance.innerHTML = parseInt((userBetMoney*2) + balanceNum);

    }else{
        balance.innerHTML = parseInt(userBetMoney - balanceNum);
      
    };
}*/


//FUNCIÓN HANDLE CLICK
function handleClick (event){
event.preventDefault();
  bet();
 //balanceUpdate ();
}



//CLICK BOTÓN
buttonPlay.addEventListener ('click' , handleClick);

    
