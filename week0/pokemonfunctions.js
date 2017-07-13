   function randletter(){
     var alphabet = ["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"U" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
    
    
    var letter = Math.floor(Math.random() * alphabet.length);
   return letter;
  }
  randletter();

console.log(randletter());
