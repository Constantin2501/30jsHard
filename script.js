const guessNumBot = function () {

    const randomNum = function () {
        return Math.round(Math.random() * 99 + 1)
    }

    const successNum = function () {
        let userNum = prompt('Угадай число от 1 до 100')

        if (userNum > numBot) {
            alert('Загаданное число меньше')
            successNum()
        } 
        
        if (userNum < numBot) {
            alert('Загаданное число больше')
            successNum()
        } 

        if (isNaN(userNum) || userNum === '') {
            alert('Введи число!')
            successNum()
        }

        if (userNum === numBot) {
            alert('Поздравляю, Вы угадали!!!')
            return
        }

        if (userNum === null) {
            alert('Игра окончена')
            return
        }

    }
    

    let numBot = randomNum()
    successNum()

}

guessNumBot()


// let userNum = prompt('Угадай число от 1 до 100')
// console.log(typeof userNum)