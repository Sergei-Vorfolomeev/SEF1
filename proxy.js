// proxy
const user = {
    name: 'Sergey',
    age: 27
}

const person = new Proxy(user, {})

for (let key in person) {
    console.log(person[key])
}
console.log(person === user) // false