function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i)
    }
}

let myArray = [];
repeat(5, i => {
    myArray.push(`Unit ${i + 1}`)
})

// console.log(myArray)


function greaterThan(n){
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11))


function noisy(n){
    return (...args) => {
        console.log("calling with " + args)
        let result = n(...args);
        console.log("called with " + args + ", returned " + result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1)


function unless(test, then){
    if(!test) then();
}

repeat(5, n => {
    unless(n % 2 == 1, () =>{
        console.log(n, "is even")
    })
})