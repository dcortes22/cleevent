// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$( document ).ready(function() {
  var quotes = $(".quotes");
  var quoteIndex = -1;
  var stop = false;

  function showNextQuote() {
      ++quoteIndex;
      if (stop == false){
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(100)
            .delay(100)
            .fadeOut(100, showNextQuote);
      }else{
        quotes.eq(Math.floor(Math.random() * quotes.length) % quotes.length).show()
      }
  }

  $(document).on("click",".stop",function() {
      stop = true;
  });

  showNextQuote();
});
