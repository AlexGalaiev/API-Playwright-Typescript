
let numbers = [2,6,3,4]
let strin = ['Alex', 'Bob', 'Mick']
let mixed = [1, 'Alex', 'Bob', 2]


// console.log(numbers.indexOf(4))
// console.log(numbers.find(n=> n/2 >= 1 ))
// console.log(strin.find(n => n ==='Bob'))
// console.log(strin.map(n => n + '_master'))
// console.log(strin.push('Diana'))
// console.log(strin.pop())
// console.log(strin)

// console.log(strin.map(i=> i + '_master'))
// strin.forEach((key, value)=> console.log(`${key} has index ${value}`))

// type User = {
//     name: string,
//     sName: string,
//     ageL: number
// }

let myUser = [
    {name:'Alex', sName:'Galaiev', ageL: 12},
    {name:'Mykola', sName:'Galaiev', ageL:25},
    {name:'Roman', sName:'Tkachenko', ageL:40}
]

//let user = myUser.find(i => i.name === 'Roman')
// let user = myUser.filter(i => i.name === 'Mykola')
// console.log(user)

// //myUser.push({name:'Diana', sName: 'Zoro', ageL:23})
// //console.log(myUser.forEach((key, value)=>console.log(`user ${key.name} ${key.sName} has ${key.ageL} age and has index ${value}`)))
// console.log(myUser.find(i => i.sName === 'Tkachenko'))
// console.log(myUser.filter(i => i.sName === 'Galaiev'))

//console.log(myUser.every(i => i.sName === 'Galaiev'))
//console.log(numbers.reduce((i, n)=>(i+n*3)))

//console.log(numbers.includes(5))
//console.log(numbers.sort((a, b)=>(a+b)))
//console.log(numbers.splice(0,2))
//console.log(numbers)

//console.log(myUser.filter(i => i.ageL > 20))

let bigArray = [
    {name:'Alex', animal:'cat', age:14},
    {name:'Roma', animal:'dog', age:34},
    {name:'Kostya', animal:'pig', age:56}
]

let newArray = bigArray.map(num => ({
  [num.age]: {[num.name] : num.animal}
}))
//console.log(newArray)

//bigArray.forEach((i) => (console.log(i.filter(n => n.animal === 'pig'))))

//console.log(bigArray.filter(i => i.animal === 'pig'))

const users = [
  { name: 'Anna', age: 17 },
  { name: 'Boris', age: 21 },
  { name: 'Clara', age: 30 }
]

//console.log(users.filter(i => i.age >= 18))

let arra = [1,2,3,4,5,6]

// function oddNumbers(list:number[]){
//     console.log(list.)
// }

//oddNumbers(arra)

let dataArray : (string | number)[] = ['cat', 11]
dataArray.push('dog')
//console.log(dataArray)

let datArray: (string | number | boolean)[]

datArray = [1,2, '1', true]
//console.log(datArray)

//datArray.map(value => `${value} + value`)
//console.log(datArray)

let customer = {
  name: 'Alex',
  age: 35
}
let user = {
  name: 'Albert',
  sname:'NeMax'
}
let newCustomer ={...customer, ...user}
//console.log(newCustomer)

let arra1 = [1,2,3,4,5,6]
let arra2 = [10]
let arra3 = [...arra2, ...arra1]
console.log(arra3)

let trickyObject: {} = 0
//console.log(trickyObject)

enum User { 
  admin='ADMIN',
  user='USER',
  qa='QA'
}
//console.log(User.admin)