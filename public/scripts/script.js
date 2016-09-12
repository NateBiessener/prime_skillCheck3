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
        for (var i = 0; i < data.length; i++) {
          var joke = '<div class="joke" style="display: none"><p class="question">' + data[i].jokeQuestion + '</p><p class="funny">' + data[i].punchLine + '</p><p class="author">Submitted by - ' + data[i].whoseJoke + '</p></div>';
          $('#outDiv').append(joke);
        };
        showJokes();
      }
    })
  })
})//end doc ready

var showJokes = function(){
  $('.joke').each(function(){
    $(this).fadeIn();
  })
}
