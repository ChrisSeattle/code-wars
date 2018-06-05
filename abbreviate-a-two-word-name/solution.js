'use strict;'

function abbrevName(name){
    var arr = name.split(" ");
    var first = arr[0].charAt(0).toUpperCase();
    var second = arr[1].charAt(0).toUpperCase();
    
    var initials = first + "." + second;
    
    return initials
 }
 