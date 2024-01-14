// 1) Define function power(exp, n), the same as Math.pow(n, exp) but with reverse order of arguments.

const power = (exp, n) => Math.pow(n,exp)
//const powerBounded = Math.pow.bind(null, 2)

const curry = fn => (...args) => {
    if (fn.length > args.length) {
        return curry(fn.bind(null, ...args))
    } else return fn(...args)
}

const curriedPower = curry(power)
const powTo2 = curriedPower(2)
const powTo3 = curriedPower(3)
const powTo4 = curriedPower(4)
const powTo5 = curriedPower(5)

console.log(powTo2(2)) // 4
console.log(powTo3(2)) // 8
console.log(powTo4(2)) // 16
console.log(powTo5(2)) // 32


// 2) Implement function square(n) which returns a number to the power of two.
const square = (n) => power(2, n)

const sq1 = square(1)
const sq2 = square(2)
const sq3 = square(3)
const sq4 = square(4)
const sq5 = square(5)

console.log(sq1) // 1
console.log(sq2) // 4
console.log(sq3) // 9
console.log(sq4) // 16
console.log(sq5) // 25


// 3) bind() function power(exp, n) to obtain function cube(n).
const cube = (n) => power.bind(null, 3)(n)

const c1 = cube(1)
const c2 = cube(2)
const c3 = cube(3)
const c4 = cube(4)
const c5 = cube(5)

console.log(c1) // 1
console.log(c2) // 8
console.log(c3) // 27
console.log(c4) // 64
console.log(c5) // 125