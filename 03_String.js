// const name = 'Роман'
// const age = 25

// function getAge() {
//     return age
// }

// //const output = 'Привет меня зовут ' + name + ' и мой возраст ' + age + ' лет'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B' } лет.`


// const output = `
// <div>This is div</div>
// <p>Thi is paragrph</p>`


// const name = 'Роман'
// console.log(name.length)
// console

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Roman'
const personName2 = 'Максим'
const personAge = 25
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)
