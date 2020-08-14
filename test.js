function sort(word){
    
    var chars = []
    
    
    for(var i = 0; i < word.length; i++){
        chars.push(word.charCodeAt(i));
    }
    

    var sorted = []
    for(var i = 0; i < word.length; i++){
       
       var lowest = getLowestInt(chars); 
       sorted.push(lowest);
       chars.splice(chars.indexOf(lowest), 1) 
    }
    
    
    var sortedString = "";
    for(var i = 0; i < sorted.length; i++){
       sortedString += String.fromCharCode(sorted[i]);
    }
    
    return sortedString;
}

function getLowestInt(array){
   
   var lowest = 1000; 
   for(var i = 0; i < array.length; i++){
       
       if(array[i] < lowest){
          lowest = array[i];
       }
       
   }
   
   return lowest; 
}