class Graph {
    constructor(keyField) {
        this.keyField = keyField
        this.vertices = new Map()
    }

    add(vertex) {
        //const vertex = new Vertex(this, data)
        const key = vertex.data[this.keyField]
        if (!vertex.graph) {
            vertex.graph = this
        }
        if (!this.vertices.has(key)) {
            this.vertices.set(key, vertex)
        }
        return vertex
    }

    delete(vertex) {
        const key = vertex.data[this.keyField]
        if (this.vertices.has(key)) {
            this.vertices.delete(key)
            delete vertex.graph
            for (let link of vertex.links) {
                vertex.unlink(link)
                link.unlink(vertex)
            }
        }
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
       // const keyField = this.graph.keyField
        for (let vertex of vertices) {
            if (!this.graph.vertices.has(vertex)) {
                this.graph.add(vertex)
            }
            if (!this.links.has(vertex)) {
                this.links.add(vertex)
            }
            if (!vertex.links.has(this)) {
                vertex.link(this)
            }
        }
        return this
    }

    unlink(...args) {
        const vertices = new Set(args)
        for (let vertex of vertices) {
            if (this.links.has(vertex)) {
                this.links.delete(vertex)
            }
        }
    }
}

const graph = new Graph('name')

const sergey = new Vertex(graph, {id: 3, name: 'Sergey',})
const irina = new Vertex(graph, {id: 4, name: 'Irina',})
const artem = new Vertex(graph, {id: 1, name: 'Artem',})
const vadim = new Vertex(graph, {id: 5, name: 'Vadim',})
const fedir = new Vertex(graph, {id: 2, name: 'Fedir',})
const jamhur = new Vertex(graph, {id: 6, name: 'Jamhur',})

graph.add(sergey)
graph.add(irina)
graph.add(artem)
graph.add(vadim)
graph.add(fedir)
graph.add(jamhur)

sergey.link(irina, vadim, fedir)
irina.link(sergey, vadim, sergey)
artem.link(jamhur, sergey, vadim, sergey, fedir)
vadim.link(irina, sergey, fedir)
fedir.link(vadim, sergey)
jamhur.link(artem)

graph.delete(artem)
graph.add(artem)
artem.link(jamhur)

console.log(artem)

for (let vertex of graph.vertices) {
    console.log(vertex)
    //console.log(vertex.map(el => el.links))
}

//console.log(graph)
