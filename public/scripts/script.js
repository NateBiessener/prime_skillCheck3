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
      }//end success callback
    });//end ajax call
  });//end submitJoke onclick
})
