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