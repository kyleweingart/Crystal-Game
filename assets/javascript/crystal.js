$(document).ready(function() {

//  VARIABlES
// =======================================================================================================


  
  // create variable to store random number choice
  var randNumberChoice;
  // create counter variable with number wins
  var wins = 0;
  // create counter variable with number losses
  var losses = 0;
  // create variable to track totalScore
  var totalScore;
  // create variables to assign random values to each crystal
//   var quartzValue;
//   var garnetValue;
//   var brookiteValue;
//   var benitoiteValue;

  //  create variable array for each crystal value
  var crystalValue = [];

 
  
  // FUNCTIONS
  // ======================================================================================================
  
  // Start New Game function: resets all variables and chooses new random number
  function newGame() {
    
    totalScore = 0;
    $(".score-display").append(totalScore);
    randNumberChoice = [Math.floor(Math.random() * (120-19+1)+19)];
    $(".number-display").append(randNumberChoice);
    crystalValue[0]= [Math.floor(Math.random() * (12-1+1)+1)];
    crystalValue[1]= [Math.floor(Math.random() * (12-1+1)+1)];
    crystalValue[2]= [Math.floor(Math.random() * (12-1+1)+1)];
    crystalValue[3]= [Math.floor(Math.random() * (12-1+1)+1)];

     }

    // quartzValue = [Math.floor(Math.random() * (12-1+1)+1)];
    // console.log(quartzValue);
    // garnetValue = [Math.floor(Math.random() * (12-1+1)+1)];
    // console.log(garnetValue);
    // brookiteValue = [Math.floor(Math.random() * (12-1+1)+1)];
    // console.log(brookiteValue);
    // benitoiteValue = [Math.floor(Math.random() * (12-1+1)+1)];
    // console.log(benitoiteValue);

    
    // wins = 0;
    // $(".win-display").append(wins);
    // losses= 0;
    // $(".loss-display").append(losses);


    

    // computerWordChoiceArray = computerWordChoice.split("");
    // dashes = [];
  
    // for (var i = 0; i < computerWordChoiceArray.length; i++) {
    //   dashes.push("_");
    //   var dashesString = dashes.join(" ");
    //   document.querySelector("#empty-word-display").innerHTML = dashesString;
    //   document.querySelector("#guesses-remaining").innerHTML =
    //     "Guesses Remaining: " + guesses;
    // }
 

  newGame();
  
  // MAIN PROCESS
  // ============================================================================================================
  
    $(".win-display").append(wins);
    $(".loss-display").append(losses);


    for (var i = 0; i < crystalValue.length; i++) {
    
        // For each iteration, we will create an imageCrystal
        var imageCrystal = $(".crystal-image");
       
    
        
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", crystalValue[i]);
       
    
      }

      $(".crystal-image").on("click", function() {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
        
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        totalScore += crystalValue;

      
    
        
       
    
        if (totalScore === randNumberChoice) {
          wins++;
        }
    
        else if (totalScore >= randNumberChoice) {
          losses++;
        }

        })   
    
     
    
    
    


})