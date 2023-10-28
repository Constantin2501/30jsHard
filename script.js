const formatA = document.querySelector('.formatA')
const formatB = document.querySelector('.formatB')


const formatTimeA = (time) => {
    const day = time.getDay()
    const dayTitle = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

    const date = time.getDate().toString().padStart(2, '0')

    const month = time.getMonth()
    const monthTitle = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    const year = time.getFullYear()

    const formatHours = time.getHours().toString().padStart(2, '0')
    const hours = time.getHours()
    const hourDeclension = getHourDeclension(hours)

    const minutes = time.getMinutes().toString().padStart(2, '0')
    const seconds = time.getSeconds().toString().padStart(2, '0')


    return `Сегодня ${dayTitle[day]}, ${date} ${monthTitle[month]} ${year} года, ${formatHours} ${hourDeclension} ${minutes} минут ${seconds} секунды`
}

const formatTimeB = (time) => {
    const date = time.getDate().toString().padStart(2, '0')
    const month = (time.getMonth() + 1).toString().padStart(2, '0')
    const year = time.getFullYear()
    const hours = time.getHours().toString().padStart(2, '0')
    const minutes = time.getMinutes().toString().padStart(2, '0')
    const seconds = time.getSeconds().toString().padStart(2, '0')


    return `${date}.${month}.${year} - ${hours}:${minutes}:${seconds}`
}

const getHourDeclension = (hours) => {
    if (hours === 1 || hours === 21) {
        return 'час';
    } else if ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 24)) {
        return 'часа';
    } else {
        return 'часов';
    }
}

const updateTime = () => {
    const currentDate = new Date()

    formatA.textContent = formatTimeA(currentDate)
    formatB.textContent = formatTimeB(currentDate)
}


setInterval(updateTime, 1000)