const toDoList = [];
function remaber(task){
    toDoList.push(task);
}

function getTask(){
    return toDoList.shift();
}

function remaberUrgently(task){
    toDoList.unshift(task);
}

remaber("pay bill")
remaberUrgently("coding")
let task = getTask()

// console.log(toDoList)
// console.log(task)

function remove(array, index){
    return array.slice(0, index).concat(array.slice(index + 1))
}
let myArray = ["a", "b", "c", "d", "e"]
// console.log(remove(myArray, 2))
// console.log(myArray)

function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if(number > result){
            result = number;
        }
    }
    return result
}

console.log(max(2, 8, 49, 94, -45, -900))