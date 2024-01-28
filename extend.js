const extend = (obj, mix) => {
    let extendedObj = {...obj}
    const keys = Object.keys(mix)
    for (let key of keys) {
        extendedObj[key] = mix[key]
    }
    return extendedObj
}

const user = {
    name: 'Sergey',
    age: 27,
}

const actions = {
    getName() {
        return this.name
    },
    getAge() {
        return this.age
    }
}

const res = extend(user, actions)

console.log(res)
console.log(user)
console.log(actions)