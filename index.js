var readlineSync = require ('readline-sync');

var score = 0;

//input
var userName = readlineSync.question("What's your name?\n");

console.log("Welcome " + userName + ". Let's check whether you know Neeraj or not." )
console.log("----------")

function play(question, answer){
  userAnswer = readlineSync.question(question)
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right !")
    score = score + 1;
    console.log("current score : " + score)
    console.log("----------")
  }else{
    console.log("Wrong")
    score = score;
    console.log("current score : " + score)
    console.log("----------")
  }
}

var question1 =  {
    question : "Where do he live?\n",
    answer : "Baloda Bazar"
  }

var question2 = {
    question : "Favourite superhero would be?\n",
    answer : "Batman"
  }

var question3 = {
    question : "Where do he study?\n",
    answer : "DAV"
  }  

var question =[question1, question2, question3]

for(var i =0; i<question.length; i++){
  var txt = question[i];
  play(txt.question, txt.answer)
}

console.log("Your final score : " + score);
