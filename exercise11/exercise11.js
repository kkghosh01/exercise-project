function loop(start, test, update, body){
    for(let value = start; test(value); value = update(value)){
        body(value);
    }
}

loop(5, n => n > 0, n => n - 1, console.log)

function every(array, test) {
    // Your code here.
    for(let element of array){
        if(!test(element)) return false;
    }
    return true;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true