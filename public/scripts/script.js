console.log('script sourced');

$(document).ready(function() {
  console.log('jq working');
  $('#submitJoke').on('click', function(){
    $.ajax({
      url: '/',
      type: 'POST',
      data: {
        whoseJoke: $('#nameIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#funnyIn').val()
      },
      success: function(data){
        $('#outDiv').html('Your joke has been added to the book.');
      }//end success callback
    });//end ajax call
  });//end submitJoke onclick
  $('#getJokes').on('click', function(){
    $.ajax({
      url: '/getJokes',
      type: 'GET',
      data: {},
      success: function(data){
        $('#outDiv').empty();
        for (var i = 0; i < data.length; i++) {
          var joke = '<div class="joke"><p class="question" style="display: none">' + data[i].jokeQuestion + '</p><p class="funny" style="display: none">' + data[i].punchLine + '</p><p class="author" style="display: none">Submitted by - ' + data[i].whoseJoke + '</p><button type="button" class="nextJoke" style="display: none" onclick="showJokes(' + (i + 1) + ')">Next Joke</button></div>';
          $('#outDiv').append(joke);
        };
        showJokes(0);
      }
    })
  })
})//end doc ready

var showJokes = function(joke){
  if (joke > $('.joke').length - 1){
    alert('No more jokes! Add some more!');
    return;
  }
  console.log('in showJokes');
  $($('.joke')[joke]).children('.question').fadeIn(400, function(){
    $(this).parent().children('.funny').fadeIn(400, function(){
      $(this).parent().children('.author').fadeIn(400, function(){
        $(this).parent().children('.nextJoke').fadeIn();
      });
    });
  });
}
