// loads page before running content
$(document).ready(function() {

// define global variables
var userGuess = "";
var win = 0;
var loss = 0;

//randomNumber random number randomly generated here...
var randomNumber = Math.floor(Math.random() * 30) + 30;
    $(".guessNumber").html(randomNumber);

// the "color" variables have rngs that pick one of two numbers
// !!! turn on the console logs if you want to "cheat" while grading !!!
var red = {value: Math.floor(Math.random() * 3) + 1};
// console.log(red.value);

var blue = {value: Math.floor(Math.random() * 4) + 2};
// console.log(blue.value);

var orange = {value: Math.floor(Math.random() * 4) + 4};
// console.log(orange.value);

var grey = {value: Math.floor(Math.random() * 2) + 7};
// console.log(grey.value);


//function to reset the game
function resetGame() {
    userGuess = "";
    randomNumber = Math.floor(Math.random() * 30) + 30;
        $(".guessNumber").html(randomNumber);
    red = {
        value: Math.floor(Math.random() * 3) + 1
    };

    blue = {
        value: Math.floor(Math.random() * 4) + 2
    };

    orange = {
        value: Math.floor(Math.random() * 4) + 4
    };

    grey = {
        value: Math.floor(Math.random() * 2) + 7
    };
}

// sets up click event for red crystal
$("#red").click(function() {
    // checks if user loset
    if (userGuess > randomNumber) {
        // writes statment to spicific id on dom
        $("#alert").html("Darn, the number changed...")
        // increases value of loss
        loss++;
        // running tally of losses
        $("#loss").html("<p>Losses :</p>" + loss);
        //restarts game
        resetGame();
    }
    // checks to see if user has won, triggers win protocol
    else if (userGuess === randomNumber) {
        // writes statment to dom
        $("#alert").html("Nice! One step closer!")
        // increases win value
        win++;
        // running win tally
        $("#win").html("<p>Wins: </p>" + win);
        // resets game
        resetGame();
    }
    // if user can still guess
    else (userGuess < randomNumber); {
        //adds value to userGuess
        userGuess = parseInt(userGuess + red.value); 
        //writes to DOM
        $(".userGuess").html(userGuess);        
    }

});

// sets up click event for blue crystal
$("#blue").click(function() {

    if (userGuess > randomNumber) {
        $("#alert").html("Darn, the number changed...")
        loss++;
        $("#loss").html("<p>Losses :</p>" + loss);
        resetGame();
    }
    // checks to see if user has won, triggers win protocol
    else if (userGuess === randomNumber) {
        $("#alert").html("Nice! One step closer!")
        win++;
        $("#win").html("<p>Wins: </p>" + win);
        resetGame();
    }
    else (userGuess < randomNumber); {
        //adds value to userGuess
        userGuess = parseInt(userGuess + blue.value); 

        //writes to DOM
        $(".userGuess").html(userGuess);        
    }

});

// sets up click event or orange crystal
$("#orange").click(function() {

    if (userGuess > randomNumber) {
        $("#alert").html("Darn, the number changed...")
        loss++;
        $("#loss").html("<p>Losses :</p>" + loss);
        resetGame();
    }
    // checks to see if user has won, triggers win protocol
    else if (userGuess === randomNumber) {
        $("#alert").html("Nice! One step closer!")
        win++;
        $("#win").html("<p>Wins: </p>" + win);
        resetGame();
    }
    else (userGuess < randomNumber); {
        //adds value to userGuess
        userGuess = parseInt(userGuess + orange.value); 

        //writes to DOM
        $(".userGuess").html(userGuess);        
    }

});

// sets up click event for grey crystal
$("#grey").click(function() {

    if (userGuess > randomNumber) {
        $("#alert").html("Darn, the number changed...")
        loss++;
        $("#loss").html("<p>Losses :</p>" + loss);
        resetGame();
    }
    // checks to see if user has won, triggers win protocol
    else if (userGuess === randomNumber) {
        $("#alert").html("Nice! One step closer!")
        win++;
        $("#win").html("<p>Wins: </p>" + win);
        resetGame();
    }
    else (userGuess < randomNumber); {
        //adds value to userGuess
        userGuess = parseInt(userGuess + grey.value); 
        //writes to DOM
        $(".userGuess").html(userGuess);        
    }

});

});