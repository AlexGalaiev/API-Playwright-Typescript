// let data1 = [1,2,3,4,5,6]

import { skip } from "node:test";

// function getOddData(data){
//     let num = data.filter( i => i % 2 === 0)
//     console.log(num)
// }

// //getOddData(data1)


// let sumArray = [1, 2, 3]

// function getTotalSum(data){
//     let num = data.reduce((start, end)=>(start+end), 0)
//     console.log(num)
// }
// //getTotalSum(sumArray)

// let max = [-10, 3, 25, 7]

// function getMaxValue(max){
//     let num = max.sort((a, b)=>(a-b))
//     let index = num.length - 1
//     console.log(`array - ${num}, biggest number is`+ num[index])
// }
// //getMaxValue(max)

// function reverseArray(max){
//     let num = max.sort((a,b)=>(b-a))
//     console.log(num)
// }

// //reverseArray(max)

let myUser = [
    {name:'Alex', sName:'Galaiev', ageL: 12, isActive: true},
    {name:'Mykola', sName:'Galaiev', ageL:25, isActive: true},
    {name:'Roman', sName:'Tkachenko', ageL:40, isActive: true}
]

// function onlyAdultActiveUsers(users){
//     let user = users.filter(aged => aged.ageL >= 18 && aged.isActive == true)
//     console.log(user)
// }

// //onlyAdultActiveUsers(myUser)
// function getFirstNameWithLetterM(users){
//     let user = users.find(i => i.name.startsWith('M') && i.isActive === true)
//     console.log(user)
// }
// //getFirstNameWithLetterM(myUser)



function countNumberOfAdultUsers(users:any){
    let adult = []
    for(let i of users){
        if(i.ageL > 18){
            adult.push(i)
        }}
    console.log(adult.length)
}

//countNumberOfAdultUsers(myUser)

interface Product {
  id: number;
  name: string;
  price: number;
  available: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, available: true },
  { id: 2, name: "Mouse", price: 25, available: true },
  { id: 3, name: "Monitor", price: 150, available: false },
  { id: 4, name: "Keyboard", price: 110, available: true },
  { id: 5, name: "Webcam", price: 90, available: true },
];
// function getExpensiveAvailableProductNames(data: Product[]){
//     let names = []
//     let dat = data.filter(dat => dat.available === true && dat.price >= 100)
//     dat.forEach(n => names.push(n.name))
//     console.log(names)

// }
//getExpensiveAvailableProductNames(products)


interface Order {
  orderId: string;
  totalAmount: number;
}

interface PartialOrder {
  orderId: string;
  totalAmount?: number; // Необязательное свойство
}

const orders: PartialOrder[] = [
  { orderId: "A1", totalAmount: 50.0 },
  { orderId: "B2", totalAmount: 120.5 },
  { orderId: "C3"}, // Нет totalAmount
  { orderId: "D4", totalAmount: 30.0 },
];

function calculateTotalRevenue(table: PartialOrder[]){
  let newDat = []
  for( let amount of table) {
    if( amount.totalAmount === undefined){
      skip
    } else {
      newDat.push(amount.totalAmount)
    }}
    console.log(newDat.reduce((a,b)=>(a+b)))
}

//calculateTotalRevenue(orders)

const userEmails: string[] = [
  "a@test.com",
  "b@test.com",
  "a@test.com", // Дубликат
  "c@test.com",
  "b@test.com", // Дубликат
  "d@test.com",
]

function findDuplicateEmails(emails: string[]){
  let unique = new Set<string>()
  let dublicates = new Set<string>()
  for(let i in emails){
    let email = emails[i]
    if(!unique.has(email)){
      unique.add(email)
    }else{dublicates.add(email)}
  }
  console.log('unique', unique)
  console.log('dublicates', dublicates)
}
//findDuplicateEmails(userEmails)

interface TestResult {
  testName: string;
  status: 'Passed' | 'Failed' | 'Skipped';
  durationMs: number;
}

const results: TestResult[] = [
  { testName: "Login", status: "Passed", durationMs: 1500 },
  { testName: "Checkout", status: "Failed", durationMs: 4000 },
  { testName: "Profile", status: "Passed", durationMs: 800 },
  { testName: "Search", status: "Skipped", durationMs: 0 },
];

function groupResultsByStatus(res: TestResult[]){
  let passResults = res.filter(testStatus => testStatus.status === 'Passed')
  let newArray = passResults.map(stat => ({
      testName: stat.testName,
      status: stat.status
    }))
  console.log(newArray)
}

//groupResultsByStatus(results)

