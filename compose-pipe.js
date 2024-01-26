const toLowerCase = string => string.toLowerCase()
const firstToUpperCase = string => {
    return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}
const evenToUpper = string => {
    return string.split(' ').map(word => {
        let res = ''
        for (let i=0; i < word.length; i++) {
            if (i%2) res += word[i].toUpperCase()
            else res += word[i].toLowerCase()
        }
        return res
    }).join(' ')
}
const trim = string => string.trim()

const example = 'SERGEY VORFOLOMEEV AHOJ KAMARAD'

const compose = (f, g) => x => f(g(x))
const pipe = (f, g) => x => g(f(x))

const res1 = compose(firstToUpperCase, toLowerCase)(example)
const res2 = pipe(firstToUpperCase, toLowerCase)(example)
// // console.log(res1)
// // console.log(res2)

// // ======================================================================================

const compose1 = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
const pipe1 = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const res3 = compose1(firstToUpperCase, toLowerCase)(example)
const res4 = pipe1(firstToUpperCase, toLowerCase)(example)
// // console.log(res3)
// // console.log(res4)

// ======================================================================================

const example1 = '    SERGEY VORFOLOMEEV AHOJ KAMARAD     '
const example2 = '    сЪешь яблОчкО БУДеТ прЫщик нА пОПЕ     '

const compose2 = (...fns) => x => {
    let res = x
    if (fns.length === 0) return res
    for (let i = fns.length-1; i >= 0; i--) {
        res = fns[i](res)
    }
    return res
}

const pipe2 = (...fns) => x => {
    let res = x
    if (fns.length === 0) return res
    for (let i=0; i < fns.length; i++) {
        res = fns[i](res)
    }
    return res
}

const res5 = compose2(firstToUpperCase, evenToUpper, toLowerCase, trim)(example1)
const res6 = pipe2(trim, evenToUpper)(example2)
console.log(res5)
console.log(res6)




