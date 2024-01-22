// single-proto

function Node(prev, data) {
    this.prev = prev
    this.data = data
}

// const n1 = new Node(null, 'first')
// const n2 = new Node(n1, 'second')
// const n3 = new Node(n2, 'third')
//
// console.log(n1)
// console.log(n2)
// console.log(n3)

// ====================================================================================

// single factory

const node2 = (prev, data) => ({ prev, data })

// const a1 = node2(null, 'first')
// const a2 = node2(n1, 'second')
// const a3 = node2(n2, 'third')

// console.log(n1)
// console.log(n2)
// console.log(n3)

// ====================================================================================

// with closure

const node3 = (data) => {
    const nextElement = (data2) => {
        const next = node3(data2)
        next.prev = nextElement
        return next
    }
    nextElement.data = data
    return nextElement
}

const c1 = node3('first')('second')('third')('forth')('fifth')

//console.log(c1)

// ====================================================================================

// single-iterable

const createList = () => {
    let element = null
    return {
        push(data) {
            element = {
                data: data,
                prev: element,
            }
            return element
        },
        last: () => element,
        [Symbol.iterator]: () => ({
            current: element,
            next() {
                const element = this.current
                if (!element) return {
                    done: true,
                    value: null,
                }
                this.current = element.prev
                return {
                    done: false,
                    value: element.data
                }
            }
        })
    }
}

const list = createList()
const b1 = list.push('first')
const b2 = list.push('second')
const b3 = list.push('third')

for (let el of list) {
   // console.log(el)
}

//console.log([...list])

// ====================================================================================

// list using classes

class List {
    constructor() {
        this.last = null
    }
    push(data) {
        this.last = {
            data: data,
            prev: this.last
        }
        return this.last
    }
}


const d1 = new List()
d1.push('first')
d1.push('second')
d1.push('third')

//console.log(d1)

// ====================================================================================

// double-list using prototypes

function List2() {
    this.last = null
    this.first = null
    this.length = 0
}

List2.prototype.push = function(data) {
    let newElement = {
        prev: this.last,
        next: null,
        data: data
    }
    if (this.length > 0) this.last.next = newElement
    if (this.length === 0) this.first = newElement
    this.last = newElement
    this.length++
    return this.last.data
}

List2.prototype.pop = function() {
    if (this.length === 0) return null
    const removedElement = this.last
    this.last = removedElement.prev
    removedElement.prev = null
    removedElement.next = null
    if (this.last) this.last.next = null
    this.length--
    return removedElement.data
}

const e1 = new List2()
console.log(e1.push('first'))
console.log(e1.push('second'))
console.log(e1.push('third'))
console.log(e1.pop())
console.log(e1.pop())
console.log(e1.pop())
console.log(e1.pop())

//console.log(e1)

