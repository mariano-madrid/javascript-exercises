const sumAll = function(number1, number2) {
    let numberSumAcumulator = 0;
    /*
    if(number1 < 0 | number2 < 0 | !(number1 % 1 == 0) | !(number2 % 1 == 0) | number1 === String | number2 === String){
        return 'ERROR';
    }
    */
    if( (!(number1 % 1 == 0)) | (!(number2 % 1 == 0)) | number1 < 0 | number2 < 0 | typeof number1 === 'string' | typeof number2 === 'string'){
        return 'ERROR';
    };

    if(number1 > number2){
        for(let i = number2; i <= number1; i++){
            numberSumAcumulator += i;
        }
        return numberSumAcumulator;
    }

    for(let i = number1; i <= number2; i++){
        numberSumAcumulator += i;
    }
    return numberSumAcumulator;
};

// Do not edit below this line
module.exports = sumAll;
