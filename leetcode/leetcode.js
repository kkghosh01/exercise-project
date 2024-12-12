

var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i <nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++
        }
    }
    return k
};

// let nums = [3,2,2,3];
// let expectedNums = removeElement(nums, 3)
// console.log(expectedNums)
// console.log(nums.slice(0, expectedNums))



function checkTwoNumber(a, b){
    if(a === 100 || b === 100 || (a+b) === 100){ 
        return true
    }
    return false 
}

let check = checkTwoNumber(5, 50)
// console.log(check)

function getFileExtention(str){
    return str.slice(str.lastIndexOf("."))
}

// console.log(getFileExtention("index.html"))

const myString = "I love Javascript"

// console.log(myString.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join(''));

function createHelloWorld(){
    return () => "Hello World"
}

const n = createHelloWorld()
// console.log(n())

var createCounter = function(n) {
    
    return function() {
        return n++
    };
};

const f = createCounter(10)
// console.log(f())
// console.log(f())
// console.log(f())

var createCounter = function(init) {
    let currentCount = init;
    return {
        increment() {
            return ++currentCount;
        },
        reset(){
            currentCount = init;
            return currentCount;
        },
        decrement(){
            return --currentCount;
        }  
    }
};

const counter = createCounter(0)
// console.log(counter.increment())
// console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.reset())
// console.log(counter.reset())


function outerFunction(a, b){
    return () => a + b
}

const outer = outerFunction(5, 10)
// console.log(outer())

function great(name, callback){
    return callback(name);
}

const user1 = great("Kishor", (name) => `Hello ${name}`)
// console.log(user1)

function outerFunction(){
    let outer = "I am from outer"
    function innerFunction(){
        console.log(outer);
    }
    innerFunction();
    return "Exicution successfull"
};
outerFunction()
