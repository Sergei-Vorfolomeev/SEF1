const between = (string, quotes) => {
    const start = string.indexOf(quotes[0])
    const end = string.indexOf(quotes[1])
    if (start > -1 && end > -1 && start < end) {
        return string.slice(start+1, end)
    } else return ''
}

const string = "Hello everybody! Check out my new email: <new-email@gmail.com>"

const res = between(string, '<>')
console.log(res) // new-email@gmail.com
