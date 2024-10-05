//"1".onclick = document.getElementById("z").style.display='block';
let swappingCase = "elZERo";
let swappedstring = swappingCase.split("").map(function(element,index,arr){
    return element==element.toUpperCase()?element.toLowerCase():element.toUpperCase();

},swappingCase.length);
console.log(swappedstring.join(''));
let invertednumbers = [1, -10, -20, 15, 100, -30];
let invert = invertednumbers.map(function(element){
    return -element;
},invertednumbers.length());
console.log(invert);