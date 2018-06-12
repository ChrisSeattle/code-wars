function isNice(arr){
    if (!arr.length > 0) {
      return false; 
    } else {
      for(var i in arr) {
        if(!arr.includes(arr[i]+1) && !arr.includes(arr[i]-1)) {
          return false; 
        }
      } // end for loop
    } // end if/else 
    return true; 
  }