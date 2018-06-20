function high(str){
  let winner = '';
  let winScore = 0;
  let words = str.split(' '); 
  for(j in words) {
    let v = 0;
    for(var i = 0; i < words[j].length; i++) { 
      v += words[j].charCodeAt(i) - 96;  
    }
    if(v > winScore) {
      winner = words[j]; 
      winScore = v;
    }
  }
return winner;
}