// Given a string str, reverse it and omit all non-alphabetic characters.

function reverseLetter(str) {
    const res = []
    for(let i=0; i<str.length; i++){
        if (str[i].toLowerCase() !== str[i].toUpperCase()) {
            res.push(str[i])
        }
    }
    return res.reverse().join('')
}

console.log(reverseLetter('ultr53o?n')) // nortlu