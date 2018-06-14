var gimme = function (arr) {
  for(var i in arr) {
    if(arr[i] != Math.max(...arr) && arr[i] != Math.min(...arr)) {
      return parseInt(i); 
    } 
  }
// if current value is not the max and it is not the min, then we are at the index we wanted to return!  
};