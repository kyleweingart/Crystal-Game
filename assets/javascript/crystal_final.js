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

  //  create variable array for each crystal div id
  var crystalValue = [
    $("#quartz"),
    $("#garnet"),
    $("#brookite"),
    $("#benitoite")
  ];

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

    for (var i = 0; i < crystalValue.length; i++) {
      varRandomValue = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
      crystalValue[i].attr("crystalvalue", varRandomValue);
      console.log("random " + varRandomValue);
      console.log(crystalValue.length);
    }
  }

  newGame();

  // MAIN PROCESS
  // ============================================================================================================

  $(".win-display").append(wins);
  $(".loss-display").append(losses);

  $(".crystal-image").on("click", function() {
    console.log("i was clicked");
    var crystalStoredValue = $(this).attr("crystalvalue");
    console.log(" hi " + crystalStoredValue);
    crystalStoredValue = parseInt(crystalStoredValue);
    console.log("yo " + crystalStoredValue);
    totalScore = totalScore += crystalStoredValue;
    $(".score-display")
      .empty()
      .append(totalScore);
    console.log("total score " + totalScore);

    if (totalScore == randNumberChoice) {
      wins++;
      console.log("youwin");
      $(".win-display")
        .empty()
        .append(wins);
      newGame();
    } else if (totalScore > randNumberChoice) {
      losses++;
      console.log("youlose");
      $(".loss-display")
        .empty()
        .append(losses);
      newGame();
    }
  });
});
