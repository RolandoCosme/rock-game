$(document).ready(function() {
  var choices = ["rock", "paper", "scissors"];
  var computerScoreUp = 0
  var playerScoreUp = 0
  var tied = 0
  var barUp = 10
  var gameProgress = 0

 $(".btn-success").on("click", function (){
  var ranNum = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[ranNum];
  var barIncrease = $("#gameBar").css("width", barUp + "%");

      $("#computerSelection").html(computerChoice);
      $("#playerSelection").html(this.id);
      if ($(this).attr("id") === computerChoice) {
        tied++;
        $("#tied").html(tied)
        barUp = (barUp)+ 10;
        $("#gameBar").css("width", (barIncrease))
        gameProgress = (gameProgress) +1;
        $("#gameBar").html(gameProgress)
      }
      else if ($(this).attr("id") === "rock" && computerChoice === "paper") {
        computerScoreUp++;
        $("#computerScore").html(computerScoreUp)
        barUp = (barUp)+ 10;
        $("#gameBar").css("width", (barIncrease))
        gameProgress = (gameProgress) +1;
        $("#gameBar").html(gameProgress)
      }
      else if ($(this).attr("id") === "rock" && computerChoice === "scissors") {
        playerScoreUp++;
        $("#playerScore").html(playerScoreUp)
        barUp = (barUp)+ 10;
        $("#gameBar").css("width", (barIncrease))
        gameProgress = (gameProgress) +1;
        $("#gameBar").html(gameProgress)       
      }
      else if ($(this).attr("id") === "paper" && computerChoice === "rock") {
        playerScoreUp++;
        $("#playerScore").html(playerScoreUp)
        barUp = (barUp)+ 10;
        $("#gameBar").css("width", (barIncrease))
        gameProgress = (gameProgress) +1;
        $("#gameBar").html(gameProgress)     
      }
      else if ($(this).attr("id") === "paper" && computerChoice === "scissors") {
        computerScoreUp++;
        $("#computerScore").html(computerScoreUp)
        barUp = (barUp)+ 10;
        $("#gameBar").css("width", (barIncrease))
        gameProgress = (gameProgress) +1;
        $("#gameBar").html(gameProgress)     
      }
      else if ($(this).attr("id") === "scissors" && computerChoice === "paper") {
        playerScoreUp++;
        $("#playerScore").html(playerScoreUp)
        barUp = (barUp)+ 10;
        $("#gameBar").css("width", (barIncrease))
        gameProgress = (gameProgress) +1;
        $("#gameBar").html(gameProgress)
      }
      else if ($(this).attr("id") === "scissors" && computerChoice === "rock") {
        computerScoreUp++;
        $("#computerScore").html(computerScoreUp)
        barUp = (barUp)+ 10;
        $("#gameBar").css("width", (barIncrease))
        gameProgress = (gameProgress) +1;
        $("#gameBar").html(gameProgress) 
      }
      else if ($(this).attr("id") === "chuck" && computerChoice === "rock" || "paper" || "scissors") {
        computerScoreUp = 0;
        playerScoreUp = 0;
        tied = 0;
        gameProgress = 0;
        $("#gameBar").html(gameProgress)
        $("#computerScore").html(computerScoreUp)
        $("#playerScore").html(playerScoreUp)
        $("#tied").html(tied)
        $("#gameBar").css("width", "0%")
      }

      if (barUp + 10 >110) {
        $("#gameOverModal").modal()
        $("#modalComputerScore").html(computerScore)
        $("#modalPlayerScore").html(playerScore)
        // if (computerScore > layerScore)

        computerScoreUp = 0;
        playerScoreUp = 0;
        tied = 0;
        gameProgress = 0;
        
      console.log("game over!")
      };

  });

});



            
