var prompt = require('prompt-sync')();
var mashArray = ["FinalDestination" ,"StarShip" ,"BattleField" ,"PokemonStadium"];

var firstQuestion = [1,2];
var secondQuestion = ["BlackMage" ,"Goku"];

var attack = prompt ("How many times will you strike? ");
firstQuestion.push(attack);

var target = prompt ("Who will you choose to fight? ");
secondQuestion.push(target);

var fighter = secondQuestion[Math.floor(Math.random()* secondQuestion.length)];

var arena = mashArray[Math.floor(Math.random()* mashArray.length)];

var combat = firstQuestion[Math.floor(Math.random()* firstQuestion.length)];

console.log("You fought as " + fighter + " in the " + arena + " and hit them " + combat + " times. Too bad Mewtwo wins!");