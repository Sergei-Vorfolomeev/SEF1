const arr1 = ['Sergey', 'Irina', 'Vadim', 'Fedor', 'Vlad', ]
const arr2 = ['Nikita', 'Sergey', 'Anton', 'Vadim', 'Katya', ]

const union = (arr1, arr2) => {
    const newArr = arr1.slice()
    for(let i=0; i<arr2.length; i++) {
        const value = arr2[i]
        if (!arr1.includes(value)) newArr.push(value)
    }
    return newArr
}

const intersection = (arr1, arr2) => {
    const res = []
    for (let i=0; i<arr2.length; i++) {
        const value = arr2[i]
        if (arr1.includes(value)) res.push(value)
    }
    return res
}

const difference = (arr1, arr2) => {
    const res = []
    for (let i=0; i<arr1.length; i++) {
        const value = arr1[i]
        if (!arr2.includes(value)) res.push(value)
    }
    return res
}

const complement = (arr1, arr2) =>  difference(arr2, arr1)

const unionRes = union(arr1, arr2)
const intersectionRes = intersection(arr1, arr2)
const differenceRes = difference(arr1, arr2)
const complementRes = complement(arr1, arr2)

console.log(unionRes)
console.log(intersectionRes)
console.log(differenceRes)
console.log(complementRes)

//===========================================================================================//

// USING SET

const unionWithSet = (arr1, arr2) => new Set([...arr1, ...arr2])
const intersectionWithSet = (arr1, arr2) => new Set(arr1.filter(el => arr2.includes(el)))
const differenceWithSet = (arr1, arr2) => new Set(arr1.filter(el => !arr2.includes(el)))
const complementWithSet = (arr1, arr2) => new Set(arr2.filter(el => !arr1.includes(el)))


const unionWithSetRes = unionWithSet(arr1, arr2)
const intersectionWithRes = intersectionWithSet(arr1, arr2)
const differenceWithSetRes = differenceWithSet(arr1, arr2)
const complementWithSetRes = complementWithSet(arr1, arr2)

console.log(unionWithSetRes)
console.log(intersectionWithRes)
console.log(differenceWithSetRes)
console.log(complementWithSetRes)

