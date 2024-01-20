// const EventEmitter = function() {
//     this.events = {}
// }
//
// EventEmitter.prototype.on = function(name, fn) {
//     if (this.events[name]) {
//         this.events[name].push(fn)
//     } else {
//         this.events[name] = [fn]
//     }
// }
//
// EventEmitter.prototype.emit = function(name, ...data) {
//     if (this.events[name]) {
//         this.events[name].forEach(fn => fn(...data))
//     } else console.log('no found events')
//
// }
//
// const ee = new EventEmitter()
//
// ee.on('click', (data) => console.log(`CLICK EVENT WITH ${data}`))
// ee.on('click', (data) => console.log(`SECOND CLICK EVENT WITH ${data}`))
// ee.on('drop', (data) => console.log(`DROP EVENT WITH ${data}`))
//
// ee.emit('click', 'data1')
// ee.emit('click', 5)
// ee.emit('drop', true)
// ee.emit('no-found', 10)

// =====================================================================================
// Event Emitter with closure

const eventEmitter = () => {
    const events = {}
        return {
            on: (name, fn) => {
                if (events[name]) events[name].push(fn)
                else events[name] = [fn]
            },
            emit: (name, ...data) => {
                if (events[name]) {
                    events[name].forEach(fn => fn(...data))
                } else console.log('event was not found')
            },
        }

}

const emitter = eventEmitter()

emitter.on('click', (data) => console.log(`CLICK EVENT WITH ${data}`))
emitter.on('click', (data) => console.log(`SECOND CLICK EVENT WITH ${data}`))
emitter.on('drop', (data) => console.log(`DROP EVENT WITH ${data}`))

emitter.emit('click', 'data1')
emitter.emit('click', 5)
emitter.emit('drop', true)
emitter.emit('no-found', 10)