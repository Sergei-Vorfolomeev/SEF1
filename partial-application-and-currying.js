// Define function power(exp, n), the same as Math.pow(n, exp) but with reverse order of arguments.

const power = (exp, n) => Math.pow(n,exp)

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