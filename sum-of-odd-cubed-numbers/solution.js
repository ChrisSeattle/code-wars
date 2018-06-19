function cubeOdd(arr) {
  for(var i in arr) {if(!Number.isInteger(arr[i])) return undefined;}
  return arr.filter(input => input%2).map(input => Math.pow(input,3)).reduce((a,b) => a+b,0); 
  }