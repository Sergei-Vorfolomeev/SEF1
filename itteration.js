// написать функцию вычисляющую сумму матрицы
// написать функцию вычисляющую сумму наибольших элементов каждого массива матрицы

const matrix = [
    [3,18,24,12,32],
    [9,11,8,17,20],
    [0,28,10,35,18],
]

const getSum = (a, b) => (a+b)
const getMax = (a, b) => (a > b ? a : b)

const sum = matrix.map(el => el.reduce(getSum)).reduce(getSum)
const sumOfMax = matrix.map(el => el.reduce(getMax)).reduce(getSum)

//console.log(sum)
//console.log(sumOfMax)

// написать протокол итерируемости массива в обратном порядке

const arr = [2, 5, -1, 7, 0];

arr[Symbol.iterator] = function() {
    let index = this.length
    return {
        next: () => ({
            value: this[index-1],
            done: index-- === 0
        })
    }
}

 console.log(...arr)


