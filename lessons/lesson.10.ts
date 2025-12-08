// // let counter = 1;
// // let a = ++counter
// // console.log(a)


// let A: number = 1
// let B: number = ++A
// //console.log(B)

// //let isMember: boolean
// //let parkingHours: number

// function countParkingPrice(isMember: boolean, hours: number){
//     let result = isMember ? 100*hours : 1000*hours
//     return result
// }

// //console.log(countParkingPrice(true, 10))

function accessViaAge(name: string, age: number, id: number){
    let accessToPerson = (age >= 18) ? ((id >= 100) ? console.log(`Welcome ${name}`) : console.log(`Access denied because Id`)): console.log(`Access denied because age`)
    return accessToPerson
}

//accessViaAge('Alex', 35, 90)

//let functionCopy = accessViaAge

//console.log(functionCopy('Max', 45, 1000))
//console.log(accessViaAge('Max', 45, 1000))

let dataTypes : Array<string|number> = []

// dataTypes.push('Car')
// dataTypes.push(10)
// console.log(dataTypes)
dataTypes = [111, "Alex"]

type CustomData = number | string 
let cusData: CustomData;
cusData = 12
cusData = "ALLO"
//cusData = true

let arrayNumbers: number[]

arrayNumbers = [1,2]
arrayNumbers = [5,6]
arrayNumbers = [6,6]

//console.log(arrayNumbers) // перезаписывает


let tuppleArray: [number, string, string]
tuppleArray = [1, 'Alex', 'Galaiev']
//console.log(tuppleArray)

type objectType = {
    name: string,
    age: string |number,
    hobbies: string[],
    experience: [string, string]
}

let QAPerson: objectType = {
    'name': 'Alex',
    'age': 35,
    'hobbies': ['Cooking', 'coding', 'smoking'],
    'experience': ['2023-2025', 'Capex']
}

//console.log(QAPerson.experience)

enum Role {admin, user, guest}

enum userRole {
    admin='admin',
    user='user',
    guest='guest'
}

console.log(userRole.admin)

type userR = 'admin'|'user'|'guest'
let customer: userR = 'user'
//console.log(customer)






