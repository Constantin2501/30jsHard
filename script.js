// const getDayName = (lang) => {
//     const days = {
//         en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//         ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
//     };
//
//     return days[lang]
// };
//
// console.log(getDayName('en'));
// console.log(getDayName('ru'));

let lang = 'ru'
let  namePerson = 'Артем'


namePerson === 'Артем' ? console.log('директор') : namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент')

switch (lang) {
    case 'ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break
    case 'en':
        console.log('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        break
}