const Ivan = new Person({name: 'Иван Петров'})
const Petr = new Person({name: 'Петр Иванов'})

Ivan.introduce()  // 'Меня зовут Иван Петров'
Ivan.getConnections() // []
Ivan.addConnection(Petr)  // Ivan
Ivan.getConnections()  // [Petr]
Petr.getConnections()  // [Ivan]