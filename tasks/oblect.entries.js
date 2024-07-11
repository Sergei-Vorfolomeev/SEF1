// Дан объект, представляющий количество различных фруктов на складе.
// Используя Object.entries(), выведи на экран каждую пару ключ-значение в формате: "На складе X: Y".

const fruits = {
    apples: 10,
    oranges: 20,
    bananas: 5,
};

const res = Object.entries(fruits)
// console.log(res)

/*Дан объект с оценками студентов. Используя Object.entries() и Object.fromEntries(),
создай новый объект, который содержит только тех студентов, у которых оценка выше 50.*/

const grades = {
    Alice: 88,
    Bob: 45,
    Charlie: 72,
    Dave: 30,
    Eve: 95,
}

const arr = Object.entries(grades).filter(([name, grade]) => grade > 50)
console.log(arr)
const res1 = Object.fromEntries(arr)
// console.log(res1)

class Payment {
    paymentTypes = ['cash', 'nonCash', 'card', 'advance']

    calc = () => {
        return Math.random() * 1000
    }

    getPayment = () => {
        return this.paymentTypes.map((key) => ({
            [key]: this.calc(),
        }))
    }

}

const payment = new Payment()
const re2 = payment.getPayment()
console.log(re2)






