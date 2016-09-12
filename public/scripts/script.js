console.log('script sourced');

$(document).ready(function() {
  console.log('jq working');
  $('#submitJoke').on('click', function(){
    var joke = '<div class="joke"><p class="question" style="display: none">' + $('#questionIn').val() + '</p><p class="funny" style="display: none">' + $('#funnyIn').val() + '</p><p class="author" style="display: none">Submitted by ' + $('#nameIn').val() + '</p><button type="button" class="nextJoke" style="display: none" onclick="showJokes(' + ($('.joke').length + 1) + ')">Next Joke</button></div><br>';
    $('#outDiv').append(joke);
    $.ajax({
      url: '/',
      type: 'POST',
      data: {
        whoseJoke: $('#nameIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#funnyIn').val()
      },
      success: function(data){
        $('#jokeAddedDiv').html('Your joke has been added to the book.');
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
          var joke = '<div class="joke"><p class="question" style="display: none">' + data[i].jokeQuestion + '</p><p class="funny" style="display: none">' + data[i].punchLine + '</p><p class="author" style="display: none">Submitted by ' + data[i].whoseJoke + '</p><button type="button" class="nextJoke" style="display: none" onclick="showJokes(' + (i + 1) + ')">Next Joke</button></div><br>';
          $('#outDiv').append(joke);
        };
        showJokes(0);
      }
    })
  })
})//end doc ready

var showJokes = function(joke){
  $('#jokeAddedDiv').empty();
  if (joke > $('.joke').length - 1){
    $('#jokeAddedDiv').html('No more jokes! Add some more!');
  }
  console.log('in showJokes');
  $($('.joke')[joke]).children('.question').fadeIn(400, function(){
    $(this).parent().children('.funny').delay(1200).fadeIn(400, function(){
      $(this).parent().children('.author').delay(600).fadeIn(400, function(){
        $(this).parent().children('.nextJoke').fadeIn();
      });
    });
  });
}
