'use strict';

//FUNCIÓN GET ELEMENTS HTML
/*function getHtmlElement (jsClass){
   const nameConst=document.querySelector (jsClass);
   return nameConst;
}*/

const diceNumber = document.querySelector('.js-diceNum');
const userNumber= document.querySelector('.js-userNum');
const buttonPlay = document.querySelector('.js-buttonPlay');
const resultDice = document.querySelector( '.js-resultDice');
const content = document.querySelector('.js-content');
const balance = document.querySelector('.js-balance');

// CONTANTES 
const win = `<h3> Has ganado el doble de lo apostado</h3>`;
const loose = `<h3> Has perdido lo apostado</h3>`;

let initialBalance = 50;

//FUNCIÓN NÚMERO RANDOM DADO ORDENADOR
function getRandomNumber (max) {
    return Math.ceil(Math.random() *max);
  
};

// FUNCIÓN APUESTA
function bet ( selectDiceNum , randomNum){

    if (selectDiceNum === randomNum){
      resultDice.innerHTML= `<p>Dado = ${randomNum} </p>`;
      content.innerHTML = win;

    }else{
       resultDice.innerHTML=`<p>Dado = ${randomNum} </p>`;
       content.innerHTML= loose;
    };
};

//FUNCION ACTUALIZACION DE SALDO
function balanceUpdate (selectDiceNum  , randomNum){

   const userBetMoney = parseInt(userNumber.value);
    console.log(userBetMoney);
   

   if (selectDiceNum === randomNum){
        initialBalance = userBetMoney * 2 + initialBalance;

    }else{
      initialBalance = initialBalance - userBetMoney;
      
    };

 balance.innerHTML = `${initialBalance}`;
}


//FUNCIÓN HANDLE CLICK
function handleClick (event){
    event.preventDefault();
    const randomNum = getRandomNumber(6);
    const selectDiceNum = parseInt (diceNumber.value); 
  bet(selectDiceNum , randomNum);
  balanceUpdate (selectDiceNum , randomNum)

}



//CLICK BOTÓN
buttonPlay.addEventListener ('click' , handleClick);

    
