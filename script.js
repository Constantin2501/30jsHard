const getSting = (str) => {

    if (typeof str !== 'string') {
        console.log('передана не строка')
        return
    }

    str = str.trim()

    if (str.length > 30) {
        str = str.substring(0, 30) + '...'
    }

    return str
}

console.log(getSting('Готово'))