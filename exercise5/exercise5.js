function range(start, end, step = start < end ? 1 : -1){
    let myArry = [];
    if(step === 0){
        console.error("Step cannot be zero");
        return [];
    }
    if(step > 0){
        for(let i = start; i <= end; i+=step) myArry.push(i);
    }else{
        for(let i = start; i >= end; i += step) myArry.push(i);
    }
    return myArry;
}

function sum(array){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}


console.log(sum(range(1, 10)));