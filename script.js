const guessNumBot = function () {

    const randomNum = function () {
        return Math.round(Math.random() * 99 + 1)
    }

    const successNum = function () {
        let userNum = prompt('Угадай число от 1 до 100')

        if (isNaN(userNum) || userNum === '') {
            alert('Введи число!')
            successNum()
        }

        if (userNum === null) {
            alert('Игра окончена')
            return
        }
        
        if (userNum === numBot) {
            alert('Поздравляю, Вы угадали!!!')
            return
        }

        if (userNum > numBot) {
            alert('Загаданное число меньше')
            successNum()
        } 
        
        if (userNum < numBot) {
            alert('Загаданное число больше')
            successNum()
        } 

    }
    

    let numBot = randomNum()
    successNum()

}

guessNumBot()
