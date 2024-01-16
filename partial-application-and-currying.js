// 1) Define function power(exp, n), the same as Math.pow(n, exp) but with reverse order of arguments.

const power = (exp, n) => Math.pow(n,exp)
//const powerBounded = Math.pow.bind(null, 2)

const curry1 = fn => (...args) => {
    if (fn.length > args.length) {
        return curry1(fn.bind(null, ...args))
    } else return fn(...args)
}

const curriedPower = curry1(power)
const powTo2 = curriedPower(2)
const powTo3 = curriedPower(3)
const powTo4 = curriedPower(4)
const powTo5 = curriedPower(5)

// console.log(powTo2(2)) // 4
// console.log(powTo3(2)) // 8
// console.log(powTo4(2)) // 16
// console.log(powTo5(2)) // 32


// 2) Implement function square(n) which returns a number to the power of two.
const square = (n) => power(2, n)

const sq1 = square(1)
const sq2 = square(2)
const sq3 = square(3)
const sq4 = square(4)
const sq5 = square(5)

// console.log(sq1) // 1
// console.log(sq2) // 4
// console.log(sq3) // 9
// console.log(sq4) // 16
// console.log(sq5) // 25


// 3) bind() function power(exp, n) to obtain function cube(n).
const cube = (n) => power.bind(null, 3)(n)

const c1 = cube(1)
const c2 = cube(2)
const c3 = cube(3)
const c4 = cube(4)
const c5 = cube(5)

// console.log(c1) // 1
// console.log(c2) // 8
// console.log(c3) // 27
// console.log(c4) // 64
// console.log(c5) // 125


// 4) Use constructor-like function that returns a function to define different specific functions.


// 5) Use nested functions for functional inheritance
const nestedFunction = (a, b) => {
    const fn = () => {
        return ({ a, b })
    }
}


// 6) Use method bind() to existing function to apply preceding arguments and obtain a new function.


// 7) Given function someFunc() which accepts n arguments (e.g. 3 arguments). Implement function curry()
// that generates other function which accepts someFunc() arguments partially and supplies them to someFunc():

const curry = (length, fn) => {
    return (...args) => {
        if (length > args.length) {
            return curry(length - args.length, fn.bind(null, ...args))
        } else return fn(...args)
    }
}

const someFunc = (a,b,c) => a+b+c

const func = curry(3, someFunc);
const funcRes1 = func(1)(2)(3) === someFunc(1, 2, 3) // true
const funcRes2 = func(4, 5)(6) === someFunc(4, 5, 6) // true
const funcRes3 = func(7)(8, 9) === someFunc(7, 8, 9) // true

console.log(funcRes1)
console.log(funcRes2)
console.log(funcRes3)


// 8) Implement one-argument function that passes its argument to another function and returns
// an object which has the same function:

function func1(a) {
    return func1()
}

const someFoo = (...args) => {
    for(let i=0; i>args.length; i++)
    return someFoo(func1(args[i]))
}

// console.log(func1(1).func1(2).func1(3) === someFoo(1, 2, 3)) // true


