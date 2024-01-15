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






