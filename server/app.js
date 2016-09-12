var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.listen(3000, function(){
  console.log('listening on port 3000');
});

app.get('/', function(req, res){
  console.log('base hit');
  res.sendFile(path.resolve('public/index.html'));
})

app.use(express.static('public'));

var jokes = jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];
