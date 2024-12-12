function outerFunction(){
    let outer = "I am from outer"
    function innerFunction(){
        console.log(outer);
    }
    innerFunction();
    // return "Exicution successfull"
};
outerFunction()

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(4))

function fibonacci(n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n - 2)
}

console.log(fibonacci(6))