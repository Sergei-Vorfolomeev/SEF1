class Person {
    constructor({name}) {
        this.name = name
        this.connections = []
    }

    introduce() {
        return `Меня зовут ${this.name}`
    }

    getConnections() {
        return this.connections
    }

    addConnection(person) {
        if (!this.connections.includes(person)) {
            this.connections.push(person)
            person.addConnection(this)
        }
        return this
    }
}

const Ivan = new Person({name: 'Иван Петров'})
const Petr = new Person({name: 'Петр Иванов'})

Ivan.introduce()  // 'Меня зовут Иван Петров'
Ivan.getConnections() // []
Ivan.addConnection(Petr)  // Ivan
Ivan.getConnections()  // [Petr]
Petr.getConnections()  // [Ivan]