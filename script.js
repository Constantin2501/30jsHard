const guessNumBot = function () {
    let tryCount = 10

    const randomNum = function () {
        return Math.round(Math.random() * 99 + 1)
    }

    const successNum = function () {

        if (tryCount === 0) {
            let tryAgain = confirm('Попытки закончились, хотите сыграть еще?')
            if (tryAgain) {
                guessNumBot()
            } else alert('спасибо за игру!')
            return
        }

        let userNum = prompt(`Угадай число от 1 до 100. Осталось попыток: ${tryCount}`)

        if (userNum === null) {
            alert('Игра окончена')
            return
        }

        if (+userNum === numBot) {
            let playAgain = confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?')
            if (playAgain) {
                guessNumBot()
            } else alert('спасибо за игру!')
            return
        }

        if (isNaN(+userNum) || userNum === '') {
            alert('Введи число!')
            successNum()
        }

        if (userNum > numBot) {
            tryCount--
            alert(`Загаданное число меньше. Осталось попыток: ${tryCount}`)
            successNum()
        }

        if (userNum < numBot) {
            tryCount--
            alert(`Загаданное число больше Осталось попыток: ${tryCount}`)
            successNum()
        }


    }
    

    let numBot = randomNum()
    successNum()

}

guessNumBot()