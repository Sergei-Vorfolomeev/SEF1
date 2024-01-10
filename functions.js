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

    let randomInt = getRandom()

    while (randomInt < min) {
        randomInt = getRandom()
    }

    return randomInt
}

const easierSolution = (min, max) => {
    if (max === undefined) {
        max = min
        min = 0
    }
    return Math.floor(Math.random() * (max - min + 1))
}

// console.log(random(5, 10))
// console.log(easierSolution(20, 70))

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

// console.log(generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789')) // 9z0iyu72nuzwlj4z

// 3.1) Преобразовывать строку '10.0.0.1' в массив ['10', '0', '0', '1']
const fromStringToArray = iPAddress => iPAddress.split('.')

// console.log(fromStringToArray('10.0.0.1')) // [ '10', '0', '0', '1' ]

// 3.2) Преобразовываем массив ['10', '0', '0', '1'] в массив [10, 0, 0, 1]
const fromStringToNumber = iPAddressArray => iPAddressArray.map(Number)

// console.log(fromStringToNumber(['10', '0', '0', '1'])) // [ 10, 0, 0, 1 ]
