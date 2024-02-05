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
      //  const keyField = this.graph.keyField
        for (let vertex of vertices) {
          //  const key = vertex.data[keyField]
            this.links.add(vertex)
        }
        return this
    }
}


const graph = new Graph('name')
const sergey = graph.add({id: 3, name: 'Sergey',})
const irina = graph.add({id: 4, name: 'Irina',})
const artem = graph.add({id: 1, name: 'Artem',})
const vadim = graph.add({id: 5, name: 'Vadim',})
const fedir = graph.add({id: 2, name: 'Fedir',})
const jamhur = graph.add({id: 6, name: 'Jamhur',})

sergey.link(irina, vadim, fedir)
irina.link(sergey, vadim, sergey)
artem.link(jamhur)
vadim.link(irina, sergey, fedir)
fedir.link(vadim, sergey)
jamhur.link(artem)

for (let vertex of graph.vertices) {
    console.log(vertex)
}

//console.log(graph)
