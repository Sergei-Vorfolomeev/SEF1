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

const fn = () => 'Function has worked'

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

// =============================================================================================

const fnWithCallback = (par, callback) => {
    console.log('Function has worked')
    callback(null, par)
}

// const res6 = timeout(1000, fnWithCallback)
// const res7 = timeout(2000, fnWithCallback)
// const res8 = timeout(3000, fnWithCallback)
// const res9 = timeout(4000, fnWithCallback)
// const res10 = timeout(5000, fnWithCallback)
//
// setTimeout(() => {
//     res6('First', (p1, p2) => (console.log(p2 + ' callback works')))
//     res7('Second', (p1, p2) => console.log(p2 + ' callback works'))
//     res8('Third', (p1, p2) => console.log(p2 + ' callback works'))
//     res9('Fourth', (p1, p2) => console.log(p2 + ' callback works'))
//     res10('Fifth', (p1, p2) => console.log(p2 + ' callback works'))
// }, 3500)

// =============================================================================================

//once

const once = fn => (...args) => {
    if (!fn) {
        console.log('this function does not exist')
        return null
    }
    const res = fn(...args)
    fn = null
    return res
}

// const res11 = once(fn)
// const res12 = res11()
// const res13 = res11()
// console.log(res12)
// console.log(res13)

// =============================================================================================

// limit

const limit = (fn, max) => {
    let counter = 0
    return (...args) => {
        if (counter >= max) {
            return 'Maximum function call exceeded'
        }
        counter++
        return fn(...args)
    }
}

const res14 = limit(fn, 3)
// console.log(res14())
// console.log(res14())
// console.log(res14())
// console.log(res14())

// =============================================================================================

// cancelable

const cancelable = (fn) => {
    const wrapper = (...args) => {
        if (fn) return fn(...args)
        else return 'Function was canceled'
    }
    wrapper.cancel = () => {
        fn = null
    }
    return wrapper
}

const res15 = cancelable(fn)
console.log(res15())
res15.cancel()
console.log(res15())

