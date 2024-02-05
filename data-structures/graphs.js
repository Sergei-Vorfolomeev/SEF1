const artem = {
    id: 1,
    name: 'Artem',
    friendsList: [6],
}
const fedir = {
    id: 2,
    name: 'Fedir',
    friendsList: [3, 5],
}
const sergey = {
    id: 3,
    name: 'Sergey',
    friendsList: [2, 4, 5],
}
const irina = {
    id: 4,
    name: 'Irina',
    friendsList: [3, 5],
}
const vadim = {
    id: 5,
    name: 'Vadim',
    friendsList: [2, 3, 4],
}
const jamhur = {
    id: 6,
    name: 'Jamhur',
    friendsList: [1],
}

class Graph {
    constructor(keyField) {
        this.keyField = keyField
        this.vertices = new Map()
    }

    add(data) {
        const vertex = new Vertex(this, data)
        const key = data[this.keyField]
        if (!this.vertices.has(key)) {
            this.vertices.set(key, vertex)
        }
        return vertex
    }
}

class Vertex {
    constructor(graph, data) {
        this.graph = graph
        this.data = data
        this.links = new Set()
    }

    link(...args) {
        const vertices = new Set(args)
        const keyField = this.graph.keyField
        for (let vertex of vertices) {
            const key = this.data[keyField]
            this.links.add(key)

        }
        return this
    }
}

const graph = new Graph('name')
const sergeyV = graph.add(sergey)
const irinaV = graph.add(irina)
const artemV = graph.add(artem)
const vadimV = graph.add(vadim)
const fedirV = graph.add(fedir)
const jamhurV = graph.add(jamhur)

sergeyV.link(irinaV, vadimV, fedirV)
irinaV.link(sergeyV, vadimV, sergeyV)
artemV.link(jamhurV)
vadimV.link(irinaV, sergeyV, fedirV)
fedirV.link(vadimV, sergeyV)
jamhurV.link(artemV)

// const matesGraph = new Graph()
// friendList.map(el => {
//     const vertex = new Vertex(matesGraph, el)
//     matesGraph.addVertex(vertex)
// })
//
console.log(graph)