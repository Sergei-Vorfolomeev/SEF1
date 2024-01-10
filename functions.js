// Реализуйте функцию random(min, max), возвращающую псевдо-случайное значение от min до max.
// Используйте Math.random() и Math.floor(). При вызове random(max) нужно считать, что min = 0.

const random = (min = 0, max) => {

    if (max === undefined) {
        max = min;
        min = 0;
    }

    const getRandom = () => {
        let number = Math.random() * max+1
        return Math.floor(number)
    }

    let randomInt = getRandom()

    while (randomInt < min) {
        randomInt = getRandom()
    }

    return randomInt
}

const easierSolution = (min, max) => {
    if(max === undefined) {
        max = min
        min = 0
    }
    return Math.floor(Math.random() * (max-min+1))
}

console.log(random(5,10))
console.log(easierSolution(20,70))
