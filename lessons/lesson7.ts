
// const user: Record<string, any> = {
//   name: 'Alex',
//   age: 30,
//   address: {
//     city: 'Kyiv',
//     zip: 12345
//   }
// };
// function newUserFunc(userN: Record<string, any>){
//     let newUser = {
//         ...userN,
//         address: {
//             ...userN.address,
//             city: 'Lviv',
//         }
//     }
//     return newUser
// }

// console.log(newUserFunc(user))

// function getUnlimitedNumbers([...numbers]:number[]){
//     let newNumber = numbers.reduce((ac, value)=>(ac+value), 0)
//     return newNumber
// }

// console.log(getUnlimitedNumbers([1,2,3,4,5,6,7,8,9,10]))

// task 3



// function filterPass(data: testData[]){
//     let newData = data.filter(num => num.status === 'passed').map(item => item.name)
//     return newData
// }

// function countDuration(data: testData[]){
//     let newData = data.reduce((ac, value)=>ac+value.duration,0)
//     return newData
// }   


// console.log(filterPass(testRuns))
// console.log('count', countDuration(testRuns))
// //task 5

// function getFirstElement<T>(obj:T[]){
//     return obj[0]
// }
// console.log(getFirstElement([1,2,3,4,5]))
// console.log(getFirstElement(['a','b','c']))


// function mergeArrays<T, U>(object1:T[], object2:U[]){
//     let newData = [...object1, ...object2]
//     return newData
// }

// console.log(mergeArrays([1,2,3,4,5], ['a','b','c']))

// function getString(testName:string, status: 'passed'|'failed'){
//     console.log(`Test ${testName} -> ${status}`)
// }

// getString('testLogin','failed')

// interface testData {
//     name: string,
//     status: string, 
//     duration: number
// }

// let testRuns: testData[] = [
//   { name: 'Login', status: 'passed', duration: 1.2 },
//   { name: 'Checkout', status: 'failed', duration: 2.5 },
//   { name: 'Logout', status: 'passed', duration: 0.7 },
// ];

// function getStatusColore(status: string){
//     switch(status){
//         case status === 'success'
//         return c
//     }
// }


// interface TestResult {
//   id: string;
//   name: string;
//   status: 'passed' | 'failed' | 'skipped';
//   duration: number; // в миллисекундах
// }

// const testResults: TestResult[] = [
//   { id: 'test-1', name: 'User Login', status: 'passed', duration: 1500 },
//   { id: 'test-2', name: 'User Registration', status: 'failed', duration: 2500 },
//   { id: 'test-3', name: 'Profile Update', status: 'passed', duration: 1200 },
//   { id: 'test-4', name: 'Password Reset', status: 'skipped', duration: 0 },
//   { id: 'test-5', name: 'Item Purchase', status: 'passed', duration: 3200 },
// ];

// interface testReport {
//     summary: {
//         passed: number,
//         failed: number,
//         skipped: number
//     },
//     slowestTest: TestResult 
// }


// function getSummary(data: TestResult[]){
//     let passedNumber = data.filter(num => num.status === 'passed').reduce((ac, value)=>(ac), 0)
//     console.log(passedNumber)
// }

// getSummary(testResults)

// function getUniqueNumber(data:number[]){
//     let newData = new Set()
//     for( let i of data){
//         if(!newData.has(i)){
//             newData.add(i)
//         }
//     }
//     return newData
// }

// console.log(getUniqueNumber([1,1,12,2,3,4,5,5,5]))

interface User {
    id: number,
    name: string,
    email: string
}

