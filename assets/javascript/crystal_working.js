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
  // create variables to assign each crystal to its div id
  var quartzCrystal = $("#quartz");
  var garnetCrystal = $("#garnet");
  var brookiteCrystal = $("#brookite");
  var benitoiteCrystal = $("#benitoite");

  //  create variable array for each crystal value
  var crystalValue = [];

  // FUNCTIONS
  // ======================================================================================================

  // Start New Game function: resets all variables, chooses new random number, and resets the value of each crystal

  function newGame() {
    totalScore = 0;
    $(".score-display")
      .empty()
      .append(totalScore);

    randNumberChoice = [Math.floor(Math.random() * (120 - 19 + 1) + 19)];
    $(".number-display")
      .empty()
      .append(randNumberChoice);

    crystalValue[0] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    crystalValue[1] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    crystalValue[2] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    crystalValue[3] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];

    quartzCrystal.attr("crystalvalue", crystalValue[0]);
    garnetCrystal.attr("crystalvalue", crystalValue[1]);
    brookiteCrystal.attr("crystalvalue", crystalValue[2]);
    benitoiteCrystal.attr("crystalvalue", crystalValue[3]);
  }

  newGame();

  // MAIN PROCESS
  // ============================================================================================================

  // display wins and losses 
  $(".win-display").append(wins);
  $(".loss-display").append(losses);

  // on crystal click add crytal value to score
  // if score===number add 1 to win counter and start new game
  // if score > number add 1 to loss counter and start new game 

  $(".crystal-image").on("click", function() {
    
    var crystalStoredValue = $(this).attr("crystalvalue");

    crystalStoredValue = parseInt(crystalStoredValue);

    totalScore = totalScore += crystalStoredValue;
    $(".score-display")
      .empty()
      .append(totalScore);

    if (totalScore == randNumberChoice) {
      wins++;
      $(".win-display")
        .empty()
        .append(wins);
      newGame();
    } else if (totalScore > randNumberChoice) {
      losses++;
      $(".loss-display")
        .empty()
        .append(losses);
      newGame();
    }
  });
});
