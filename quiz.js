


// 1. Do you have a variable that generates a random number? Line 13
// Answer to 1: Creates a random number

function beginGame(){
   const genNum = Math.floor(Math.random()* 10) +1;

    console.log(genNum);

    document.getElementById('result').textContent = '';   


// Answer to 2: Counts the number of guesses
    const userGuess = parseInt(document.getElementById('guessInput').value);

    if(isNaN(userGuess)|| userGuess < 1 || userGuess > 10){
        document.getElementById('result').textContent = 'Please enter a number valid number.';
    } else if(userGuess === genNum){
        document.getElementById('result').textContent = 'Congratulations! You are a true spy.';
    } else if(userGuess < genNum){
        document.getElementById('result').textContent = 'Wrong! Try a higher number.';
    } else {
        document.getElementById('result').textContent = 'Wrong! Try a lower number.';
    }
}


//To activate reset button
function resetGame(){
    beginGame();
    document.getElementById('guessInput').value = '';
}



