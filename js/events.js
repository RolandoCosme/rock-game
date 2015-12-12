    $(document).ready(function() {
      var choices = ["rock", "paper", "scissors"];
      // $("#computerSelection").hide;

     $(".btn-success").on("click", function gamePick(){
      var ranNum = Math.floor(Math.random() * choices.length);
          $("#computerSelection").html(choices[ranNum]);
          $("#playerSelection").html(this.id);
    });

  //     $(".btn-success").on("click", function(playerPick){
        
  // });

//         if (computerSelection === paper | playerSelection === paper) {
//           $(".modal-body").html("Same choice. No points");
          
//         }

// add the prevent default (e) e.prevernt default

            
});