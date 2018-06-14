// loads page before running content
$(document).ready(function() {

// define global variables
var userGuess = "";
var randomNumber = 0;
var add;
var win = 0;
var loss = 0;

// checks to see if all barriers complete (user hits 10 wins)
if (win > 9) {
    alert("")
}

// checks to make sure the crystals arent overused (user losses game)
else if (loss > 4){
    alert("The Infinity Stones have been overused and this plan will no longer work.")
}

// otherwise continues to accept input to reach desired number
else {

    // on click event for class containing all the stones
    $("#stoneClick").click(function() {

        //adds value to firstNum
        userGuess += this.value; 

        //writes to DOM
        $("#userGuess").html(userGuess);

        console.log(userGuess);
    
    });


    // if (userGuess > randomNumber){
    //     $("#alert").html("Damn! The barrier overloaded and difused. Thats a failure...")
    //     loss++;
    // }
    // else if (userGuess === randomNumber){
    //     $("#alert").html("Success! Barrier Created!")
    //     win ++;
    // }
    // else (userGuess < randomNumber); {
    //     alert("");
    // }

}

});