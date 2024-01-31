const timeout = (ms, fn) => {
    let timer = setTimeout(() => {
        if (timer) {
            console.log('Time is over')
            timer = null
        }
    }, ms)
    return (...args) => {
        if (timer) {
            clearTimeout(timer)
            timer = null
            return fn(...args)
        }
    }
}

const fn = (arg) => console.log('Function has worked')

// const res = timeout(1000, fn)
// const res2 = timeout(2000, fn)
// const res3 = timeout(3000, fn)
// const res4 = timeout(4000, fn)
// const res5 = timeout(5000, fn)

// setTimeout(() => {
//     res()
//     res2()
//     res3()
//     res4()
//     res5()
// }, 3500)

const fnWithCallback = (par, callback) => {
    console.log('Function has worked')
    callback(null, par)
}

const res6 = timeout(1000, fnWithCallback)
const res7 = timeout(2000, fnWithCallback)
const res8 = timeout(3000, fnWithCallback)
const res9 = timeout(4000, fnWithCallback)
const res10 = timeout(5000, fnWithCallback)

setTimeout(() => {
    res6('First', (p1, p2) => (console.log(p2 + ' callback works')))
    res7('Second', (p1, p2) => console.log(p2 + ' callback works'))
    res8('Third', (p1, p2) => console.log(p2 + ' callback works'))
    res9('Fourth', (p1, p2) => console.log(p2 + ' callback works'))
    res10('Fifth', (p1, p2) => console.log(p2 + ' callback works'))
}, 3500)