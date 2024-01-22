class Queue {
    constructor() {
        this.last = null
        this.first = null
    }

    put(data) {
        const last = this.last
        const newElement = {
            next: null,
            data: data
        }
        if (last) {
            this.last = newElement
            last.next = newElement
        } else {
            this.last = newElement
            this.first = newElement
        }
        return newElement.data
    }

    pick() {
        const pickedElement = this.first
        if (!pickedElement) return null
        if (pickedElement === this.last) {
            this.first = null
            this.last = null
        } else {
            this.first = pickedElement.next
        }
        return pickedElement.data
    }
}

const a1 = new Queue
a1.put('first')
a1.put('second')
a1.put('third')
a1.pick()

console.log(a1)