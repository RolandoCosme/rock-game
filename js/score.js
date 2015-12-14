window.events = {
  initialState: {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}

$(document).ready(function() {

  $(".btn-info").on("click", function() {
    var tagName = $(this).data("tag");
    helloGoodbye.initialState[tagName]++;

    $("#" + tagName).html(helloGoodbye.initialState[tagName]);
  });

});