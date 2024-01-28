// Event Emitter with prototype inheritance

const EventEmitter = function() {
    this.events = {}
}

EventEmitter.prototype.on = function(name, fn) {
    if (this.events[name]) {
        this.events[name].push(fn)
    } else {
        this.events[name] = [fn]
    }
}

EventEmitter.prototype.emit = function(name, ...data) {
    if (this.events[name]) {
        this.events[name].forEach(fn => fn(...data))
    } else console.log('no found events')

}

const ee = new EventEmitter()

ee.on('click', (data) => console.log(`CLICK EVENT WITH ${data}`))
ee.on('click', (data) => console.log(`SECOND CLICK EVENT WITH ${data}`))
ee.on('drop', (data) => console.log(`DROP EVENT WITH ${data}`))

ee.emit('click', 'data1')
ee.emit('click', 5)
ee.emit('drop', true)
ee.emit('no-found', 10)

// =====================================================================================

// Event Emitter with closure
const eventEmitter = () => {
    let events = {}
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
        remove: (name, fn) => {
            if (events[name]) {
                const index = events[name].indexOf(fn)
                if (index !== -1) events[name].splice(index, 1)
                else console.log('such a handler does not exist')
            } else console.log('such an event does not exist')
        },
        clear: (name) => {
            if (name) delete events[name]
            else events = {}
        },
        count: (name) => {
            if (events[name]) return events[name].length
            else console.log('such an event does not exist')
        },
        listeners: (name) => {
            return events[name].slice()
        },
        names: () => Object.keys(events)
    }

}

const emitter = eventEmitter()

const fn = (data) => console.log(`CLICK ${data}`)

// emitter.on('click', fn)
// emitter.on('click', (data) => console.log(`SECOND CLICK ${data}`))
// emitter.on('click', (data) => console.log(`THIRD CLICK ${data}`))
// emitter.on('drop', (data) => console.log(`DROP ${data}`))
// emitter.on('move', (data) => console.log(`MOVE ${data}`))

emitter.emit('click', 'string')
emitter.emit('click', 5)
emitter.emit('drop', true)
emitter.emit('no-found', 10)

// console.log(emitter.count('click'))
// console.log(emitter.remove('click', fn))
// console.log(emitter.remove('is not existed', fn))
// console.log(emitter.remove('click', () => {}))
// console.log(emitter.count('click'))
// console.log(emitter.listeners('click'))
// console.log(emitter.names())

// =====================================================================================

const evEmitter = (events = {}) => Object.assign(events, {
    on(name, fn) {
        let event = events[name] || []
        events[name] = event
        event.push(fn)
    },
    emit(name, ...data) {
        let event = events[name]
        if (event) event.forEach(fn => fn(...data))
    }
})

const emitter1 = evEmitter()

emitter1.on('click', fn)
emitter1.on('click', (data) => console.log(`SECOND CLICK ${data}`))
emitter1.on('click', (data) => console.log(`THIRD CLICK ${data}`))
emitter1.on('drop', (data) => console.log(`DROP ${data}`))
emitter1.on('move', (data) => console.log(`MOVE ${data}`))

emitter1.emit('click', 'string')
emitter1.emit('click', 5)
emitter1.emit('drop', true)
emitter1.emit('no-found', 10)
