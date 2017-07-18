var pokemon1 = {
 name: "Lucario", 
 type:"fighting/Steel",
 hp:301,
 def:240,
 atk:396, 
 legend: false
}

var pokemon2 = {
 name:"Blaziken",
 type:"fire/Fighting",
 hp:301,
 def:195,
 atk:321,
 legend:false
}

var pokemon3 = {
 name:"mismagius",
 type:"ghost",
 hp:270, 
 def:156,
 atk:112, 
 legend:false
}

var pokemon4 = {
 name:"darkrai",
 type:"dark",
 hp:281,
 def:216,
 atk:166,
 legend:false
}
var pokemon5 = {
 name:"garchomp",
 type:"dragon/ground",
 hp:400,
 def:251,
 atk:330,
 legend:false
}
var pokemon6 = {
 name:"crawdaunt",
 type:"water/dark",
 hp:330,
 def:206, 
 atk:372, 
 legend:false
}

var pokemonArray = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6]

function printRoster(){
    for(var i= 0; i < pokemonArray.length; i++ ){
        console.log(pokemonArray[i]);
    }

}
printRoster();


function pokemonAttacked(){
    for(var i= 0; i < pokemonArray.length; i++){

pokemonArray[i].hp = pokemonArray[i].hp - 10;
    console.log(pokemonArray[i]);
    }
}
pokemonAttacked();