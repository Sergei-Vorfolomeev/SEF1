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