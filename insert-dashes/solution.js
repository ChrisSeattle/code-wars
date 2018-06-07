'use strict';

function insertDash(num) {
    let lastOdd = false; 
    let newArr = [];
    let oldArr = num.toString().split(''); 
    for(var i in oldArr) {
      if (oldArr[i] % 2 === 0) { // if even
        newArr.push(oldArr[i]);
        lastOdd = false; 
    } else { // this digit is odd 
       if (lastOdd === true) { newArr.push('-'); }
       newArr.push(oldArr[i]);
       lastOdd = true; 
    }
       }
       return newArr.join(''); 
 } // end function insertDash
     