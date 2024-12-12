// function speak(line){
//     console.log(`The ${this.type} rabbit says "${line}"`)
// }

// let whiteRabbit = {type: 'White Rabbit', speak}

// whiteRabbit.speak('I\'m the white rabbit')

// let finder = {
//     find(array){
//         return array.some(v => v === this.value)
//     },
//     value: 5
// };

// console.log(finder.find([2, 3, 5]))

// const protoRabbit = {
//     speak(line){
//         console.log(`The ${this.type} rabbit says "${line}"`)
//     }
// }

// const blackRabbit = Object.create(protoRabbit);

// blackRabbit.type = 'black'
// blackRabbit.speak('I\'m black rabbit')


// class Rabbit{
//     constructor(type){
//         this.type = type;
//     }
//     speak(line){
//         console.log(`The ${this.type} rabbit says "${line}"`);
//     }
// }

// let newRabbit = new Rabbit("Killer")
// newRabbit.speak("I'm killer rabbit")

class Temperature{
    constructor(celsius){
        this.celsius = celsius;
    }

    get fahrenheit(){
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }

    static fromfahrenheit(value){
        return new Temperature((value - 32) / 1.8);
    }
}

const temp = new Temperature(22)
console.log(temp.fahrenheit)
temp.fahrenheit = 86;
console.log(temp.celsius)

let boil = Temperature.fromfahrenheit(212);
console.log(boil.fahrenheit);
