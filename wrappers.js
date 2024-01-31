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
const res = timeout(1000, fn)
const res2 = timeout(2000, fn)
const res3 = timeout(3000, fn)
const res4 = timeout(4000, fn)
const res5 = timeout(5000, fn)

setTimeout(() => {
    res()
    res2()
    res3()
    res4()
    res5()
}, 3500)