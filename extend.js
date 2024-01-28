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

// console.log(user)
// console.log(actions)

// ==============================================================

const extend = (obj, mix) => {
    let extendedObj = {...obj}
    const keys = Object.keys(mix)
    for (let key of keys) {
        extendedObj[key] = mix[key]
    }
    return extendedObj
}

const res = extend(user, actions)

// console.log(res)

// ==============================================================

const res2 = Object.assign({}, user, actions)
console.log(res2)

// ==============================================================