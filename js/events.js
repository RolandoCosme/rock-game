    $(document).ready(function() {

    var choices = ["rock", "paper", "scissors"];

    function playerPick(){
        
    var ranNum = Math.floor(Math.random() * choices.length);
    $("#computerSelection").html(choices[ranNum]);


        $(".btn-success").on('click', function(){
        $("#playerSelection").html(playerPick);
    });

  };

  playerPick();




});