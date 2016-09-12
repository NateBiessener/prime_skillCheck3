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
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var joke = '<div class="joke" style="display: inline-block"><p class="question">' + data[i].jokeQuestion + '</p><p class="funny">' + data[i].punchLine + '</p><p class="author">Submitted by - ' + data[i].whoseJoke + '</p></div>';
          $('#outDiv').append(joke);
        }
      }//end success callback
    });//end ajax call
  });//end submitJoke onclick
})//end doc ready
