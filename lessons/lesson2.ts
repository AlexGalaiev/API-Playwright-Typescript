import { skip } from "node:test"

let data1 = ['alex', 'roman', 'ira']

function toUpperCase(data: string[]){
    let res = data.map(i => i.toUpperCase())
    console.log(res)
}

//toUpperCase(data1)

let animals = ['cat', 'dog', 'parrot']

function addIndexToAnimal(dataI:string[]){
    let res = dataI.map((data1, index) => `${data1}+${index}`)
    console.log(res)
}
//addIndexToAnimal(animals)

let words = ['hello', 'qa', 'typescript']

function getWordsLengs(dataI: string[]){
    let res = dataI.map(word => word.length)
    console.log(res)
}

//getWordsLengs(words)

const users = [
  { name: 'Alex', age: 25 },
  { name: 'Roman', age: 30 },
  { name: 'Ira', age: 22 }
];

function getUsersName(dataU: string[]){
    let res = dataU.map(user => user.name)
    console.log(res)
}

//getUsersName(users)

function addNewFiledNewStatus(dataU: string[]){
    let filt = dataU.filter(user => user.age >= 18)
    let newU = filt.map(user => ({
        name: user.name, 
        age: user.age, 
        isAdultTrue: true}))
    console.log(newU)
}
//addNewFiledNewStatus(users)

let numbers = [1, 2, 3, 4, 5]

function getDifferentNumberType(dataU: string[]){
    let evenNumbers = []
    let oddNumbers = []
    for( let i of dataU){
        if ( i % 2 == 0){
            evenNumbers.push(i)
        } else {
            oddNumbers.push(i)
        }
    }
    console.log( `Even numbers ${evenNumbers}, Odd numbers  ${oddNumbers}`)
}
//getDifferentNumberType(numbers)

function changeToEvenNotEvenNumbers(dataU: string[]){
    let res = dataU.map(num => {
        if(num % 2 == 0){
            return 'even'
        } else {
            return 'odd'
        }
    })
    console.log(res)
}
//changeToEvenNotEvenNumbers(numbers)

const dates = ['2025-01-10', '2024-12-31'];

function changeToFormat(dataU: string[]){
    let res = dataU.map(res => res.replace(/-/g, '/'))
    console.log(res)
}
//changeToFormat(dates)

const arr = [
  { a: 1, b: 2 },
  { a: 3, b: 4 }
];

function flatTestFunction(dataU:string[]){
  let res = dataU.map(num => ({

  }))
  console.log(res)
}
//flatTestFunction(arr)


let userList = ['Alex 25', 'Roman 30', 'Ira 22']

function changeList(dataU:string[]){
    let result  = []
    for(let user of dataU){
        let [name, age] = user.split(' ')
        result.push({
            name: name,
            age: age
        })
        console.log(result)
    }   
}

//changeList(userList)\

let numbersL =[1, 2, 2, 3, 4, 4, 5]

function getUniqueNumbers(numb:string[]){
    let newSet = new Set<string>()
    for( let i in numb){
        if(!newSet.has(i)){
            newSet.add(i)
        } else { skip}
    }
    console.log(newSet)
}
//getUniqueNumbers(numbersL)


let revArray = [1, 2, 3, 4]

// function reverseArray(arr: string[]){
//     let newAr = []
//     revArray.reverse().forEach((num, i)=>(
//         console.log(`number ${num} index ${i}`)
//     ))
// }

function reverseArray(arr: string[]){
    let newArrr = []
    for(let i=arr.length; i>0; i--){
        newArrr.push(i)
    }
    console.log(newArrr)
}
//reverseArray(revArray)

const user1 = [
  { name: 'Alex', active: true },
  { name: 'Roman', active: false },
  { name: 'Ira', active: true }
];

function getArrayNames(dataNa: string[]){
    let newArra = dataNa.filter(nams => nams.active === true).map(nam => nam.name.toUpperCase())
    console.log(newArra)
}
//getArrayNames(user1)

const cart = [
  { product: 'Apple', qty: 3 },
  { product: 'Banana', qty: 2 },
  { product: 'Orange', qty: 5 }
];

function getNumberOfqty(data1: string[]){
    let newErray = data1.reduce((ac, dat)=> ac + dat.qty, 0)
    console.log(newErray)
}

//getNumberOfqty(cart)

const numsGeneral = [1, 2, 3, 4, 5, 6]

function getOddNumbersAndSQRT(data1:number[]){
    let oddNumbers = data1.filter(num => num %2 == 0)
    let newArray = oddNumbers.map(num => num*num)
    console.log(newArray)
}

//getOddNumbersAndSQRT(numsGeneral)

const team = [
  { name: 'Alex', role: 'QA' },
  { name: 'Roman', role: 'Dev' },
  { name: 'Ira', role: 'QA' }
];

function getQANames(team1:string[]){
    let newteam = team.filter(rol => rol.role === 'QA').map(name => name.name)
    console.log(newteam)
}

//getQANames(team)

const orders = [
  { id: 1, status: 'done' },
  { id: 2, status: 'in progress' },
  { id: 3, status: 'done' }
];

function getNumberofOrders(orders:string[]){
    let newArray = orders.filter(ord => ord.status === 'done').map(ord => ord.status)
    console.log(newArray.length)
}

//getNumberofOrders(orders)

const products = [
  { name: 'iPhone', category: 'tech' },
  { name: 'Shirt', category: 'clothes' },
  { name: 'MacBook', category: 'tech' }
];

function getUniqueCategories(data1:string[]){
    let newCatSet = new Set<string>()
    for(let i of data1){
        if(!newCatSet.has(i.category)){
            newCatSet.add(i.category)
        }
    }
    console.log(Array.from(newCatSet))
}

//getUniqueCategories(products)

let nums = [1, 2, 2, 3, 1, 2]

function counter(data1:number[]){
    let oneNumber = data1.filter(num => num == 1).length
    let twoNumber = data1.filter(num => num == 2).length
    let threeNumber = data1.filter(num => num == 3).length
    let newAr = data1.map(num => ({ '1': oneNumber, '2': twoNumber, '3': threeNumber}))
    console.log(newAr)
}
//counter(nums)

const usersT = [
  { name: 'Alex', age: 25 },
  { name: 'Roman', age: 30 }
];

// function changeData(data1: {name: string, age: number}[]){
//     let newData = data1.map(num => ({
//         num.name : num.age
//     }))
//     console.log(newData)
// }
//changeData(usersT)

const apiResponse = [
  { id: 1, name: 'Alex', email: 'alex@mail.com' },
  { id: 2, name: 'Roman', email: 'roman@mail.com' }
];

function getIdNameData(data1: {id:number, name:string}[]){
    let newData = data1.map(num => ({
        id: num.id,
        name: num.name
    }))
    console.log(newData)
}

//getIdNameData(apiResponse)

const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Logout test', status: 'passed' }
];

function getStatisticsOfTests(data1: {name:string, status:string}[]){
    let allTestsStat = data1.filter(num => num.status).length
    let failedStatistics = data1.filter(num => num.status === 'failed')
    
    let failedName = failedStatistics.map(num => num.name)
    let rate = (failedStatistics.length/allTestsStat) *100
    console.log(failedName, rate)
}

//getStatisticsOfTests(tests)

const testRuns = [
  { suite: 'Login', name: 'should login with valid credentials', status: 'passed', duration: 1.2 },
  { suite: 'Login', name: 'should show error for invalid password', status: 'failed', duration: 0.8 },
  { suite: 'Checkout', name: 'should add item to cart', status: 'passed', duration: 1.5 },
  { suite: 'Checkout', name: 'should complete payment', status: 'passed', duration: 2.0 },
  { suite: 'Profile', name: 'should update user info', status: 'failed', duration: 0.9 },
];

function statistics(data1: {suite: string, name: string, status:string, duration: number}[]){
    let numberOfTests = data1.filter(num => num.suite).length
    let passedTests = data1.filter(num => num.status === 'passed').length
    let failedTests = data1.filter(num => num.status === 'failed').map(num => num.name)
    let succesRate = (passedTests/numberOfTests)*100
    let averageDuration = data1.reduce((ac, duration) => ac + duration.duration, 0)

    let result = {
        'total': numberOfTests,
        'passed': passedTests,
        'failed': numberOfTests-passedTests,
        'successRate': succesRate/numberOfTests,
        'avgDuration': averageDuration/numberOfTests,
        'failedTests': failedTests
    }
    console.log(result)
}

//statistics(testRuns)


interface Man {
    name : string,
    sname : string,
    car: string,
    number: number
}

function getRandomNumber(){
    let randomNumber = Math.random() * 1000
    return randomNumber
} 

let userQA: Man = {
    name:'Alex',
    sname:'Galaiev',
    car:'Volvo',
    number: getRandomNumber()
}

//console.log(userQA)




