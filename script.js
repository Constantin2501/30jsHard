
let n = 100

nextPrime:
for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime
    }

    console.log(i + ' ' + `Делители этого числа: 1 и ${i}`)
}



const arr = ['234124', '523235', '4424142', '42143151', '124342', '124532125', '652351']

arr.forEach( (e) => {
    if (e.startsWith('2') || e.startsWith('4')) {
        console.log(e)
    }
})



let screenPrice

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?')
        if (screenPrice !== null) {
            screenPrice = screenPrice.trim()
        }
    } while (!isNumber(screenPrice))

}
asking()
console.log(typeof screenPrice)
console.log(screenPrice)