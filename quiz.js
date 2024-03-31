// 1. Do you have a variable that generates a random number? Line 15
// 2. Is the player's answer submitted with the submit button? 
// 3. Can the player see how many guesses they have made?
// 4. Do you have a function that checks the player's guess?
// 5. Does the if else statement congratulate the player? 
// 6. Does the function stop if the player is correct?
// 7. Does the if else statement tell the player if they are incorrect?
// 8. Does the game give the player a hint?
// 9. Does game restart when the restart button is pressed?
// 10. Does the game prompt the player to visit the About page to send feedback?
// 11. Does the contact form on About page submit an email to your prof email?

// Answer to 1: Creates a random number
function checkAnswer(){
    const genNum = Math.floor(Math.random()* 10) +1;
    console.log(genNum);
}
