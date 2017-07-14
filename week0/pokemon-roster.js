

var pokemon1 = ["Lucario" ,"fighting/Steel" ,301 ,240 ,396 ,false];
var pokemon2 = ["Blaziken" ,"fire/Fighting" ,301 ,195 ,321 ,false];
var pokemon3 = ["mismagius" ,"ghost",270 ,156 ,112 ,false];
var pokemon4 = ["darkrai" ,"dark" ,281 ,216 ,166 ,false];
var pokemon5 = ["garchomp" ,"dragon/ground" ,400 ,251 ,330 ,false];
var pokemon6 = ["crawdaunt" , "water/dark" ,330 ,206 ,372 ,false];

var roster = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];

for(var i= 0; i <roster.length; i++){
    console.log("#"+ (i+1) + roster[i][0] + "TYPE" + roster[i][1] +"HP:"+ roster[i][2] + "ATK:" + roster[i][3] + "DEF:" + roster[i][4] + "Legend:" + roster[i][5])
}