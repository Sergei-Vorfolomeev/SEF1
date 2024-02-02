const oddToUpper = string => {
    const wordsArray = string.split(' ')
    return wordsArray.map(word => {
        let res = ''
        for (let i=0; i<word.length; i++){
            if (!(i%2)) {
                res += word[i].toUpperCase()
            } else res += word[i]
        }
        return res
    }).join(' ')
}

const example = 'sergey vorfolomeev'
const res = oddToUpper(example)
console.log(res)