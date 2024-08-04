const reverseString = function(wordNotReversed) {
    let arrayWordNotReversed = [];
    let arrayWordReversed = [];
    let wordReversed = '';

    for(let i = 0; i < wordNotReversed.length; i++){
        arrayWordNotReversed[i] = wordNotReversed.charAt(i);
        arrayWordReversed[wordNotReversed.length - (i + 1)] = arrayWordNotReversed[i];
    }

    for(let i = 0; i < wordNotReversed.length; i++){
        wordReversed += arrayWordReversed[i];
    }

    return wordReversed;
};

// Do not edit below this line
module.exports = reverseString;
