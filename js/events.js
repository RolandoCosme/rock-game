$(document).ready(function() {
  var choices = ["rock", "paper", "scissors"];

 $(".btn-success").on("click", function (){
  var ranNum = Math.floor(Math.random() * choices.length);
      $("#computerSelection").html(choices[ranNum]);
      $("#playerSelection").html(this.id);
      if ($(this).attr("id") === choices[ranNum]) {
       console.log("blah!");
      }
});

      

// if (("#computerSelection").html === paper | ("#playerSelection") === paper) {
//   alert("blah!");
  
// }

//           $(".modal-body").html("Same choice. No points");
// add the prevent default (e) e.prevernt default

            
});