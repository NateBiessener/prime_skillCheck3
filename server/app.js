var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var path = require('path');

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('listening on port 3000');
});

app.get('/', function(req, res){
  console.log('base hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.post('/', urlencodedParser, function(req, res){
  console.log(req.body);
  jokes.push(req.body);
  res.send(jokes);
})


var jokes = [
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
