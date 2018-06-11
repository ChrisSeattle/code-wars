function capitalize(s){
    let input = s.split(''); 
    let arr1 = [];
    let arr2 = []; 
    for (var i in input) {
      if (i % 2) { // i is odd
        arr1.push(input[i]);
        arr2.push(input[i].toUpperCase()); 
      } else { // i is even
        arr1.push(input[i].toUpperCase()); 
        arr2.push(input[i]); 
      }
    } // looped through all input characters
    return [arr1.join(''), arr2.join('')];
  };