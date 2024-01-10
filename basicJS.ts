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

// Выполнить следующие пункты внутри функции fn (см. заготовку: 7-objects.js)
// Создайте объект с одним полем name и присвойте его в константу.
// Создайте объект с одним полем name и присвойте его в переменную.
// Попробуйте поменять поле name у обоих объектов.
// Попробуйте присвоить другой объект в оба идентификатора.
// Объясните поведение кода и оставьте только рабочий код.

const fn = () => {
    const obj1 = { name: 'Sergey' }
    let obj2 = { name: 'Sergey' }

    obj1.name = 'Irina'
    obj2.name = "Vadim"

    obj2 = { name: 'Pushkin' }
};

// Реализуйте телефонную книгу на массиве объектов.
// Объявите массив объектов с двумя полями: name и phone для хранения телефонной книги. Пример объекта: { name: 'Marcus Aurelius', phone: '+380445554433' } и добавьте несколько объектов в массив, чтоб было на чем проверять.
// Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string. При вызове функция должна находить объект, где поле name равно аргументу name и возвращать номер телефона из объекта. Для поиска воспользуйтесь циклом for. A. Реализуйте телефонную книгу на хеш-таблицах, т.е. справочниках (объектах).
// Задайте справочник (объект) с ключами равными значениям поля name (из предыдущего примера) и значениями равными полю phone.
// Реализуйте функцию findPhoneByName с сигнатурой findPhoneByName(name: string): string которая находит телефон в хеше по имени и возвращает номер телефона. Используйте hash[key] для поиска телефона.

const contactsBook = [
    {
        name: 'Sergey',
        phone: '+380445554433',
    },
    {
        name: 'Vadim',
        phone: '+123456789012',
    },
    {
        name: 'Irina',
        phone: '+483724859345',
    },
]

function findPhoneByName(name) {
    for (let contact of contactsBook) {
        if (contact.name === name) return contact.phone
    }
}

console.log(findPhoneByName('Vadim')) //"+123456789012"

const contactsBook2 = {
    sergey: {phone: '+380445554433'},
    vadim: {phone: '+123456789012'},
    irina: {phone: '+483724859345'},
}

function findPhoneByName2(name) {
    return contactsBook2[name].phone
}

console.log(findPhoneByName2('vadim')) //"+123456789012"