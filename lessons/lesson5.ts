
// let europeanUsers = ['Pierre', 'Hans', 'Marco'];
// let asianUsers = ['Kenji', 'Lin', 'Sanjay'];

// let allUsers = [...europeanUsers, ...asianUsers]
// console.log(allUsers)

// let b = [...allUsers]
// console.log(b)

// let settings = {
//   username: 'test_user',
//   theme: 'light',
//   notifications: true
// }

// let newSettings = {...settings, theme: 'dark'}
// console.log(newSettings)

function multiplayF(multiplier: number, ...arrayL: number[]): number[]{
    return arrayL.map(num => num * multiplier)
}
//console.log(multiplayF(2,3,3,4,5,6))

function separatedHead(array:number[]){
    let [head, ...tail] = array
    return [head, tail]
}

//console.log(separatedHead([1,2,3,4,5,6]))

// const user = {
//   id: 101,
//   email: 'user@example.com',
//   password: 'very_secret'
// }

function removePartOfObject(array, key){
    let {[key] : _, ...other } = array
    return other
}

//console.log(removePartOfObject(user, 'password'))


// let numbers = [1, 2, 3]
// let newNumbers = [...numbers, 4, 5]
// let newnewNumbers = [...newNumbers, 6, 7]
// console.log(newnewNumbers)


// let user = { name: 'Alex', age: 30 };
// let updatedUser = { ...user, city: 'Kyiv' };
// let newUser = {...updatedUser, age: 31}
// console.log(newUser)

// function getSumArray(...number: number[]){
//     let newData = number.reduce((ac, i)=>(ac+i))
//     console.log(newData)
// }
// getSumArray(1,2,3,4,5,6,7)


// let defaultSettings = { theme: 'light', notifications: true };
// let userSettings = { theme: 'dark' };
// let newData = {...defaultSettings, ...userSettings}
// console.log(newData)

// let fruits = ['apple', 'banana', 'cherry']
// let newfruts = [...fruits]
// console.log(newfruts === fruits)

// let names = ['Alex', 'Roma', 'Mike']

// function getNames(arrayN:string[]):string[]{
//     let [name, ...other] = arrayN
//     return [name, other]
// }
// let [mainName, other] = getNames(names)
// console.log(mainName)
// console.log(other)

// let users = [
//   { name: 'Alex', age: 30 },
//   { name: 'Roma', age: 25 }
// ]

// function changeArray(users:object[]){
//     let newArray = users.map(user => ({
//         ...user, 'age':user.age+1
//     }))
//     return newArray
// }

// console.log(changeArray(users))

// const frontend = ['HTML', 'CSS'];
// const backend = ['Node', 'Express'];
// const database = ['MongoDB'];

// let fullStack = [...frontend, ...backend, ...database]
// console.log(fullStack)

// const [first, ...rest] = [10, 20, 30, 40];

// console.log(first)
// let otherSum = rest.reduce((ac, i)=>(ac+i),0)
// console.log(otherSum)

// const user = {
//   name: 'Alex',
//   address: {
//     city: 'Kyiv',
//     zip: 12345
//   }
// };

// let newUser = {...user, address:{ ...user.address, city: 'Lviv'}}
// console.log(newUser)

// const defaultConfig = {
//   browser: 'chrome',
//   timeout: 10000,
//   headless: true
// };

// const testConfig = {
//   timeout: 20000,
//   baseUrl: 'https://test.example.com'
// };

// let newArray = {...defaultConfig, ...testConfig}
// console.log(newArray)

// const initialUsers = ['Alice', 'Bob'];
// const newUser = 'Charlie';
// let newArray = [newUser, ...initialUsers]
// console.log(newArray)

// function loginedUser(userName:string, ...otherStaps: any[]){
//     console.log(`[${userName} : [${otherStaps.join(',')}]]`)
// }

// loginedUser('Alex', 'Ale', '123', 12122, 1211)

// function checkSelectors(selectors:string[]): boolean | undefined{
//     let [firstElement, ...others] = selectors
//    if(firstElement === 'h1'){
//         others.every(num => num === 'p')
//    } else { return false}
// }

// console.log(checkSelectors(['a','b','c']))
// console.log(checkSelectors(['h1','p','c']))

// let data = [1, 2, 'a', 3, 'b', 2, 'a', 1, 4];
// function getUniqueNumber(dat: (string|number)[]){
//     let newArray = dat.reduce((acamulator:(string|number)[], currentValue) =>{
//         if(!acamulator.includes(currentValue)) {
//             acamulator.push(currentValue)
//         }
//         return acamulator
//     }, [])
//     console.log(newArray)
// }

// getUniqueNumber(data)

// interface testResult{
//     id: number,
//     name: string,
//     status: string
// }

// let testResults: testResult[] = [
//   { id: 1, name: 'Login test', status: 'passed' },
//   { id: 2, name: 'Profile page test', status: 'failed' },
//   { id: 3, name: 'Settings test', status: 'passed' },
//   { id: 4, name: 'Logout test', status: 'skipped' },
//   { id: 5, name: 'Dashboard test', status: 'failed' },
// ];

// function groupById(arrayL: testResult[]){
//     let newArray = arrayL.reduce((acamulator, currentV )=>{
//         acamulator[currentV.id] = currentV
//         return acamulator
//     },{} )

//     console.log(newArray)
// }

// groupById(testResults)