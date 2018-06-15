function solution(str){
    let arr = [];
    str.split('').forEach(e => arr.unshift(e)); 
    return arr.join('');   
  }