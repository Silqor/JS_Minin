const cars = ['mazda', 'ford', 'BMW', 'Mers']
const people = [
    {name: 'Roman', budget: 4400},
    {name: 'Vika', budget: 3500},
    {name: 'Petr', budget: 1700}
]

const allBudeget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
    acc+= person.budget
    return acc
}, 0)

console.log(allBudeget)

// const fib = [1, 1, 2, 3, 5, 8, 13]
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const fiteredNumbers = pow2Fib.filter(num => {
//     return num > 20
// })
// console.log(pow2Fib)
// console.log(fiteredNumbers)



// const pow2 = num => num ** 3
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(sqrt)
// console.log(pow2Fib)



// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

// console.log(upperCaseCars)
// console.log(cars)


// //Колбэк функция
// const person = people.find(person => 
//     person.budget === 1700
// )

// console.log(person)
// // let findedPerson
// // for (const person of people) {
// //     if (people.budget === 3500) {
//         findedPerson === person
//     }
// }

// console.log(findedPerson)






// const fib = [1, 1, 2, 3, 5, 8, 13]

// const index = cars.indexOf('BMW')







// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// const person = people.find(function(person) {
//     return person.budget === 3500
// })
// console.log(person)
// // cars[index] = 'Volvo'
// console.log(cars)

// cars.push('Porsche')

// cars.unshift('Lada')

// console.log(cars)