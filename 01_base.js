//const firstName = 'Roman'
//const age = 25
//const isProgrammer = true

//const lastName = prompt( message "Введите фамилию")
//alert(firstName + ' ' + lastName)

// 3 Операторы
//let currentYear = 2022
//const birthYear = 1997

//const age = currentYear - birthYear

//const a = 10
//const b = 3

//console.log(a + b)
//console.log(a * b)
//console.log(currentYear)
//console.log(currentYear)

//const a = 10
//const b = 2
//let c = 32
//c = c + a
//c += a
//console.log(c)

// 4 Типы данных
//const isProgrammer = true
//const name = 'Roma'
//const age = 25
//let x

//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log(null)

// 5 Приоритет операторов
// const fullAge = 25
// const birthYear = 1997
// const currentYear = 2022

// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }



// if (isReady) {
//      console.log('Vse gotovo')
// } else {
//      console.log('Все не готово')
// }

// Тернарное выражение
// const isReady = true
// isReady ? console.log('Vse gotovo') : console.log('Все не готово')

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2) 

// 7 Булевая логика

// 8 Функции

// function calculateAge(year) {
//     return 2022 - year
// }

// // console.log(calculateAge(1997))
// // console.log(calculateAge(1992))
// // console.log(calculateAge(1990))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     console.log('Chelovek po imeni ' + name + ' seichas imeet vosrast ' + age)
// }

// logInfoAbout('roma')

// 9 Массивы
//const cars = ['BMW', 'Mercedes', 'Toyota']
// //const cars = new Array('BMW', 'Mercedes', 'Toyota')
// console.log(cars.length)


// cars[0] = 'Porsche'
// cars[cars.length] = 'Kia'
// console.log(cars)

// 10 Циклы
// const cars = ['BMW', 'Mercedes', 'Toyota', 'ВАЗ']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)

// // }
// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
const person = {
    firstName: 'Roma',
    lastName: 'Zdunov',
    year: 1997,
    languages: ['Rus', 'En', 'De'],
    hasWife: true,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = false
person.isProgrammer = true
console.log(person)
