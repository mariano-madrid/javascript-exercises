const repeatString = function(word, numberOfLoops) {
    let multipleWords = '';
    for(let i = 0; i < numberOfLoops; i++){
        multipleWords = multipleWords + word;
    }

    if(numberOfLoops < 0){
        return "ERROR"
    }
    else{
        return multipleWords;
    }
};

// Do not edit below this line
module.exports = repeatString;
