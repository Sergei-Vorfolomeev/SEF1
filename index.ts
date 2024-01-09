// Реализуйте функцию range(start: number, end: number): array
// которая отдает массив чисел из диапазона [15, 30] включая крайние числа.
const range = (start: number, end: number): Array<number> => {
    const res = [];
    for (let i = start; i <= end; i++) {
        i % 2 && res.push(i);
    }
    return res;
};

console.log(range(15,30))


// Реализуйте функцию rangeOdd(start: number, end: number): array
// которая отдает массив нечетных чисел из диапазона [15, 30] включая крайние числа.
const rangeOdd = (start: number, end: number): Array<number> => {
    const res = [];
    for (let i = start; i <= end; i++) {
        i % 2 && res.push(i);
    }
    return res;
};

console.log(rangeOdd(15,30))

// Реализуйте функцию average с сигнатурой average(a: number, b: number): number
// вычисляющую среднее арифметическое своих аргументов.
const average = (a: number, b: number): number => {
    return (a + b) / 2
};

console.log(average(10,20)) // 15

// Реализуйте функцию square с сигнатурой square(x: number): number вычисляющую квадрат своего аргумента.
const square = (x: number): number => {
    return x ** 2
};

console.log(square(10)) // 100

// Реализуйте функцию cube с сигнатурой cube(x: number): number вычисляющую куб своего аргумента.
const cube = (x: number): number => {
    return x ** 3
};

console.log(cube(10)) // 1000

// Вызовите функции square и cube в цикле от 0 до 9, вычисляя,
// соответственно квадрат и куб от переменной цикла. Передайте
// квадрат и куб на каждой итерации в функцию average. Результаты
// сложите в массив и возвратите из функции calculate.
const calculate = (): number[] => {
    let res = []
    for (let i=0; i<10; i++) {
        res.push(average(square(i), cube(i)))
    }
    return res
};

console.log(calculate()) // [0, 1, 6, 18, 40, 75, 126, 196, 288,...]