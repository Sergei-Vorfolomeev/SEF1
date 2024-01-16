// Реализуйте функцию array() создающую функциональный объект, который
// содержит массив в своем замыкании и обеспечивает следующий интерфейс доступа к нему:
// - Создание нового экземпляра const a = array();
// - Получение элемента по индексу a(i)
// - Добавление элемента в конец a.push(value)
// - Удаление последнего элемента и получение его значения a.pop()

const array = () => {
    const arr = []
    const get = index => arr[index]
    get.push = el => arr.push(el)
    get.pop = () => arr.pop()
    return get
}

const arr = array()

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first

console.log(arr.pop()); // undefined