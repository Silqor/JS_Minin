// Number
// const num = 42
// const float = 42.42
// const pow = 10e4

// // console.log('MAX_SAFE_INTEGER', MAX_SAFE_INTEGER)
// // // console.log(Math.pow(x=2, y=53)-1)
// // // console.log(Number.MIN_SAFE_INTEGER)
// // //console.log('MAX_VALUE', Number.MAX_VALUE)
// //  console.log(Number.NaN)
// //  console.log(typeof NaN) // Not A Number
// //  const weird = 2 / undefined
// // console.log(isNaN(weird))
// // console.log(isNaN(42))
// // console.log(isFinite(42))


// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(parseInt(stringInt) + 2)

// // BigInt новый тип данных 
// // console.log()

// // 3 Math
// console.log(Math.E)
// console.log(Math.PI)

// console.log(Math.sqrt(25))
// console.log()

function getRandomBetween(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

console.log(getRandomBetween(10, 42))