$(document).ready(function() {
  var choices = ["rock", "paper", "scissors"];


 $(".btn-success").on("click", function (){
  var ranNum = Math.floor(Math.random() * choices.length);
  var computerChoice = choices[ranNum];
      $("#computerSelection").html(computerChoice);
      $("#playerSelection").html(this.id);
      if ($(this).attr("id") === computerChoice) {
       console.log("tied");
      }
      else if ($(this).attr("id") === "rock" && computerChoice === "paper") {
       console.log("your computer wins");
      }
      else if ($(this).attr("id") === "rock" && computerChoice === "scissors") {
       console.log("you win");
      }
      else if ($(this).attr("id") === "paper" && computerChoice === "rock") {
       console.log("you win");
      }
      else if ($(this).attr("id") === "paper" && computerChoice === "scissors") {
       console.log("your computer wins");
      }
      else if ($(this).attr("id") === "scissors" && computerChoice === "paper") {
       console.log("you win");
      }
      else if ($(this).attr("id") === "scissors" && computerChoice === "rock") {
       console.log("your computer wins");
      }
});

      

// if (("#computerSelection").html === paper | ("#playerSelection") === paper) {
//   alert("blah!");
  
// }

//           $(".modal-body").html("Same choice. No points");
// add the prevent default (e) e.prevernt default

            
});