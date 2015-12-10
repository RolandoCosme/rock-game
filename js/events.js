    $(document).ready(function() {

    var choices = ["rock", "paper", "scissors"];

    function gamePick(){
        
      var ranNum = Math.floor(Math.random() * choices.length);
      $("#computerSelection").html(choices[ranNum]);
          $(".btn-success").on('click', function(){
          $("#computerSelection").html(gamePick);
          $("#playerSelection").html(this.id);
      });
    };
    
        $("#startGame").on("click", gamePick());


        if (computerSelection === paper | playerSelection === paper) {
          $(".modal-body").html("Same choice. No points");
        }

            
});