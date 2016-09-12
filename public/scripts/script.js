console.log('script sourced');

$(document).ready(function() {
  console.log('jq working');
  $.ajax({
    url: '/',
    type: 'POST',
    data: {
      whoseJoke: 'Dude',
      jokeQuestion: 'fjdkslafjkds',
      punchLine: 'fdfdas'
    },
    success: function(data){
      console.log(data);
    }
  })
})
