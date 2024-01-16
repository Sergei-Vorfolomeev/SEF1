const functionalChaining = (a) => {
    return (b) => {
        return (c) => {
            return a*b*c
        }
    }
}

const res1 = functionalChaining(2)(3)(4)
//console.log(res1)

//---------------------------------------------------------------------------------------------------

// PROTOTYPE
function Animal(name) {       // ФУНКЦИЯ КОНСТРУКТОР ПРОТОТИПА (возвращает пустой объект - this {})
    this.name = name
    this.isExisted = true
}

Animal.prototype.jump = function(){
    console.log(`${this.name} jumps`)
    return this               // тк возвращает объект -> можем вызывать методы прототипа
}
Animal.prototype.eat = function(){
    console.log(`${this.name} eats`)
    return this
}
Animal.prototype.run = function(){
    console.log(`${this.name} runs`)
    return this
}
Animal.prototype.die = function(){
    this.isExisted = false
    console.log(`${this.name} has died`)
    return this
}

const Rabbit = new Animal('Rabbit')  // CHAINING
    .jump()
    .eat()
    .run()
    .die()


//---------------------------------------------------------------------------------------------------

// CLASS
class User {
    constructor(name) {
        this.isCreated = true
        this.name = name
    }

    type(string) {
        console.log(`${this.name} types ${string}`)
        return this
    }
    listen(smth) {
        console.log(`${this.name} listens to ${smth}`)
        return this
    }
    delete() {
        this.isCreated = false
        console.log(`${this.name} deleted account`)
        return this
    }
}

const Sergey = new User('Sergey')
    .type('message')
    .listen('music')
    .delete()

//---------------------------------------------------------------------------------------------------

// FUNCTOR
const functor = (string = '') => ({
    newLine: line => functor(string + line),
    toString: () => string
})

const qq = functor()
    .newLine('s1')
    .newLine('s2')
    .newLine('s3')   // при этом каждый раз создается новый объект => операция немутирующая

console.log(qq + '')

//---------------------------------------------------------------------------------------------------

// Реализуйте функцию seq(...args) с использованием замыканий и чеининга,
// которая может быть вызвана по цепочке с произвольным количеством функций,
// а первый вызов со значением типа Number приведет к исполнению переданных ранее функций

// const seq = (f) => (g) => typeof g === 'number' ? f(g) : seq((x) => f(g(x)))

function seq(f) {
    return function(g){
        if(typeof g === 'number') {
            return f(g)
        } else {
            return seq(x => f(g(x)))
        }
    }
}

const ww = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)

console.log(ww)

//---------------------------------------------------------------------------------------------------

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Implement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')

const press = (number) => {
    let PIN = number.toString()
    return {
        get: () => PIN,
        press: (number) => press(PIN + number)
    }
}

const PIN = press(1).press(2).press(3).press(4)

console.log(PIN.get())
