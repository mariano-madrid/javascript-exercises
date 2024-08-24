const palindromes = function (string) {

string = string.toLowerCase();
let normalArray = Array.from(string);
let reversedArray = [];
normalArray = normalArray.filter(spaces => spaces != ' ');
normalArray = normalArray.filter(comas => comas != ',');
normalArray = normalArray.filter(dots => dots != '.');
normalArray = normalArray.filter(exclamation => exclamation != '!');


for(let i = 0; i < normalArray.length; i++){
    reversedArray[i] = normalArray[(normalArray.length - 1) - i];
}

if(normalArray.toString() === reversedArray.toString()){
    return true;
}
else{
    return false
}


};

// Do not edit below this line
module.exports = palindromes;
