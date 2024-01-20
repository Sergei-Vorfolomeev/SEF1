console.log('start script')

new Promise(resolve => {
    console.log('promise-1')
    resolve()
}).then(() => {
    console.log('then-1')
})

setTimeout(() => {
    console.log('timer-1')
}, 0)

console.log('end script')

//start script -> promise-1 -> end script -> then-1 -> timer-1

//=============================================================================//

console.log('start script')

setTimeout(() => {
    console.log('timer-1')
},30)

new Promise((resolve) => {
    console.log('promise-1')
    resolve()
}).then(() => {
    console.log('then-1')
}).then(() => {
    console.log('then-2')
})

setTimeout(() => {
    console.log('timer-2')
},20)

new Promise((resolve) => {
    console.log('promise-2')
    resolve()
}).then(() => {
    console.log('then-3')
}).then(() => {
    console.log('then-4')
})

setTimeout(() => {
    console.log('timer-3')
    new Promise((resolve) => {
        console.log('promise-3')
        resolve()
    }).then(() => {
        console.log('then-5')
    }).then(() => {
        console.log('then-6')
    })
},10)

console.log('end script')

// start script => promise-1 => promise-2 => end script => then-1 => then-3 => then-2 => then-4 => timer-3
// promise-3 => then-5 => then-6 => timer-2 => timer-1
