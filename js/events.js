$(document).ready(function() {
  var choices = ["rock", "paper", "scissors"];
  var computerScoreUp = 0
  var playerScoreUp = 0
  var tied = 0


 $(".btn-success").on("click", function (){
  var ranNum = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[ranNum];

      $("#computerSelection").html(computerChoice);
      $("#playerSelection").html(this.id);
      if ($(this).attr("id") === computerChoice) {
        tied++;
        $("#tied").html(tied)
      }
      else if ($(this).attr("id") === "rock" && computerChoice === "paper") {
        computerScoreUp++;
        $("#computerScore").html(computerScoreUp)  
      }
      else if ($(this).attr("id") === "rock" && computerChoice === "scissors") {
       playerScoreUp++;
       $("#playerScore").html(playerScoreUp)      
      }
      else if ($(this).attr("id") === "paper" && computerChoice === "rock") {
       playerScoreUp++;
       $("#playerScore").html(playerScoreUp)
      }
      else if ($(this).attr("id") === "paper" && computerChoice === "scissors") {
        computerScoreUp++;
        $("#computerScore").html(computerScoreUp) 
      }
      else if ($(this).attr("id") === "scissors" && computerChoice === "paper") {
       playerScoreUp++;
       $("#playerScore").html(playerScoreUp)
      }
      else if ($(this).attr("id") === "scissors" && computerChoice === "rock") {
        computerScoreUp++;
        $("#computerScore").html(computerScoreUp)
      }
});

//           $(".modal-body").html("Same choice. No points");
// add the prevent default (e) e.prevernt default

            
});