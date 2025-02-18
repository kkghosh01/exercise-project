function arrayToList(array){
    let list = null;
    for(let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

let list = arrayToList([10, 20, 30])

function listToArray(list){
    let array = [];
    for(let node = list; node; node = node.rest){
        array.push(node.value)
    }
    return array;
}

function prepend(value, list){
    return {value, rest: list}
}

function nth(list, n){
    if(!list) return undefined;
    else if(n == 0){
        return list.value;
    }else{
        return nth(list.rest, n - 1);
    }
}

console.log(nth(list, 2))