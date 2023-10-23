const week = ['воскресение','понедельник','вторник','среда','четверг','пятница','суббота']
const currentDayIndex = new Date().getDay()
const currentDay = week[currentDayIndex]


const weekList = document.createElement('ul')
document.body.append(weekList)

week.forEach((item) => {
    let listItem = document.createElement('li')

    if (item === 'суббота' || item === 'воскресение') {
        listItem.innerHTML = `<em>${item}</em>`
    } else if (item === currentDay) {
        listItem.innerHTML = `<strong>${item}</strong>`
    } else {
        listItem.textContent = item
    }
    weekList.insertAdjacentElement('beforeend', listItem)
})
