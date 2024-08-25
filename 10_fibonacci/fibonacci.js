const fibonacci = function(num) {
num = parseInt(num);
let fiboNum = 0;
let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;

if(num === 0){
    return 0;
}
else if (num < 0){
    return 'OOPS'
}
else{
    for(let i = 2; i < num; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
}

fiboNum = parseInt(fibonacci[num - 1]);

return fiboNum;

};

// Do not edit below this line
module.exports = fibonacci;
