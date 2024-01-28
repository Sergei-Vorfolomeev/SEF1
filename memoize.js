const generateKeys = (args) => {
   return args.map(arg => arg.toString() + ':' + typeof arg).join('|')
}

const memoize = (fn) => {
    const cache = Object.create(null)
    return (...args) => {
        const key = generateKeys(args)
        const value = cache[key]
        if (value) return value
        const res = fn(...args)
        cache[key] = res
        return res
    }
}

const fib = (n) => n <= 2 ? 1 : fib(n-2) + fib(n-1)
const mFib = memoize(fib)

const speedTest = (name, fn, args, count) => {
    const tmp = []
    const start = new Date().getTime()
    for (let i=0; i<count; i++) {
        tmp.push(fn(...args))
    }
    const end = new Date().getTime()
    const time = end - start
    return console.log(`${name} * ${tmp.length}: ${time}ms`)
}

speedTest('fib', fib, [25], 10000)
speedTest('mFib', mFib, [25], 10000)

// ====================================================================================

const memoize2 = (fn, length) => {
    const cache = new Map()
    return (...args) => {
        const key = generateKeys(args)
        if (cache.has(key)) return cache.get(key)
        if (cache.size >= length) {
            let firstKey = cache.keys().next().value
            cache.delete(firstKey)
        }
        const res = fn(...args)
        cache.set(key, res)
        return res
    }
}

