// // // 1 Функции
// // // Function Declaration
// // function greet(name) {
// //     console.log('Privet -', name)
// // }

// // // 2 Function Expression
// // const greet2 = function greet2(name) {
// //     console.log('Privet 2 - ', name)

// // }

// // greet('Roma')
// // greet2('Roma')

// // console.log(typeof greet)
// // console.dir(greet)

// // // 3 Анонимные функции
// // let counter = 0
// // const interval = setTimeout(function() {
// //     if (counter === 10) {
// //     clearInterval(interval) // clearTimeout
// //  } else {
// //     console.log(++counter)
// // }
// //  }, 1000)

// // // 3 Стрелочные функции
// // function greet(name) {
// //     console.log('Privet -', name)
// // }

// // const arrow = (name, age) => {
// //     console.log('Privet -', name, age )
// // }

// const arrow2 = name => console.log('Privet -', name)

// arrow2('Roma')

// const pow2 = num => num ** 2
// console.log(pow2(5))

// // 4 Параметры по умолчанию
// const sum = (a = 40, b = а * b) => a + b

// console.log(sum(41, 3))

// function sumAll(...all) {
//     const result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 Замыкания
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Romario')
console.log(logWithLastName('Zdunov'))
console.log(logWithLastName('Bacha'))