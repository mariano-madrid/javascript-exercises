const removeFromArray = function(array, ...args) {

    args.forEach((arg) =>{
        let index = array.indexOf(arg)
         
        for(let i = 0; i < array.length; i++){
            if(array[index] === array[index + 1]){
                array.splice(index + 1, 1);
            }
        }
        
        if(!(index === -1 | String)){
            array.splice(index, 1);
        }
    });

    return array;


};

// Do not edit below this line
module.exports = removeFromArray;
