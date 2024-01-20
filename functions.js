// 1) Реализуйте функцию random(min, max), возвращающую псевдо-случайное значение от min до max.
// Используйте Math.random() и Math.floor(). При вызове random(max) нужно считать, что min = 0.

const random = (min = 0, max) => {

    if (max === undefined) {
        max = min;
        min = 0;
    }

    const getRandom = () => {
        let number = Math.random() * max + 1
        return Math.floor(number)
    }

    let randomInt

    do {randomInt = getRandom()} while (randomInt < min)

    return randomInt
}

const easierSolution = (min, max) => {
    if (max === undefined) {
        max = min
        min = 0
    }
    return Math.floor(Math.random() * (max - min + 1))
}

console.log(random(5, 10))
console.log(easierSolution(20, 70))

// 2) Реализуйте функцию generateKey(length, characters), возвращающую строку случайных символов
// из набора characters длиной length.

const generateKey = (length, characters) => {
    let res = ''
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * characters.length)
        res += characters[randomNumber]
    }
    return res
}

console.log(generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789')) // 9z0iyu72nuzwlj4z

// 3.1) Преобразовывать строку '10.0.0.1' в массив ['10', '0', '0', '1']
const fromStringToArray = iPAddress => iPAddress.split('.')

console.log(fromStringToArray('10.0.0.1')) // [ '10', '0', '0', '1' ]

// 3.2) Преобразовываем массив ['10', '0', '0', '1'] в массив [10, 0, 0, 1]
const fromStringToNumber = iPAddressArray => iPAddressArray.map(Number)

console.log(fromStringToNumber(['10', '0', '0', '1'])) // [ 10, 0, 0, 1 ]

// Реализуйте интроспекцию объекта:
// -Проитерируйте все ключи объекта iface
// -Возьмите ключи функционального типа
// -Для каждой функции возьмите количество аргументов
// -Сохраните результаты в двумерный массив

const obj = {
    m1: x => [x],
    m2: 4,
    m3: function (x, y) {
        return [x, y];
    },
    m4: 'string',
    m5(x, y, z, i, k) {
        return [x, y, z, i, k];
    },

}

const foo = (obj) => {
    const res = []
    for(let key in obj) {
        if (typeof obj[key] === 'function'){
            res.push([key, obj[key].length])
        }
    }
    return res
}

console.log(foo(obj)) // [ [ 'm1', 1 ], [ 'm3', 2 ], [ 'm5', 5 ] ]

// Реализуйте метод Array.prototype.map?

const map =  (arr, callback) => {
    if (!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
        return []
    } else {
        const res = []
        for (let i = 0; i < arr.length; i++) {
            res.push(callback(arr[i], i, arr))
        }
        return res
    }
}

// Реализуйте метод Array.prototype.filter?

const filter = (arr, callback) => {
    if (!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
        return []
    } else {
        const res = []
        for(let i=0; i < arr.length; i++) {
            if(callback(arr[i], i, arr)) res.push(arr[i])
        }
        return res
    }
}

// Реализуйте метод Array.prototype.reduce?

const reduce = (arr, callback, init) => {
    if (!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
        return []
    } else {
        const isInit = typeof init !== 'undefined'
        let acc = isInit? init : arr[0]
        for(let i = isInit ? 0 : 1; i<arr.length; i++) {
            acc = callback(acc, arr[i], i, arr)
        }
        return acc
    }
}







