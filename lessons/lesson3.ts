

type Role = 'admin' | 'moderator' | 'user'
type Posts = 'ImagePost' | 'TextPost'
type ApiResponse = 'success' | 'failed'

interface User {
    id: number,
    username: string,
    email: string,
    role: Role
}

interface BasePost {
    postId: number,
    timestamp: Date,
}

interface TextPost extends BasePost{
    content: string
}

interface ImagePost extends BasePost{
    imageUrl: string
}

interface success {
    user: User,
    posts: Posts[]
}
interface failed {
    error: string
}

// let ar = [1,2,3,4,5]

// for(var i of ar){
//     console.log(`for each ${i}`)
// }

//console.log(`out of block ${i}`)




// function generaicFunct<T>(arrayValue: T[]): void{
//     let data = arrayValue.map( value => value+'1')
//     console.log(data)
// }



function getFirstArrayElement<T>(arrayValue: T[]): T | undefined {
    return arrayValue.length > 0 ? arrayValue[0] : undefined
}

// console.log(getFirstArrayElement(numberArray))
// console.log(getFirstArrayElement(floatNumber))
// console.log(getFirstArrayElement(stringNUmber))

function reverseArrayWithGeneric<T>(arrayValue: T[]): T[] | undefined{
    let newArray : T[] = []
    for(let i=arrayValue.length-1; i>=0; i--){
        newArray.push(arrayValue[i])
    }
    return newArray
}

// console.log(reverseArrayWithGeneric(numberArray))
// console.log(reverseArrayWithGeneric(floatNumber))
// console.log(reverseArrayWithGeneric(stringNUmber))




function pick<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

//console.log(pick(user, 'email'))

let letterArray = ['a', 'b', 'c', 'd']

function getLastIndexOfArray<T>(aray:T[]): T | undefined{
    let newAr = aray.reverse()
    return newAr[0]
}

// console.log(getLastIndexOfArray(numberArray))
// console.log(getLastIndexOfArray(floatNumber))
// console.log(getLastIndexOfArray(stringNUmber))
// console.log(getLastIndexOfArray(letterArray))

function changeElementsViaIndex<T>(arrayL: T[], i:number, j: number): T[]|undefined{
    let newAr: T[] = [...arrayL]
    newAr[i] = arrayL[j]
    newAr[j] = arrayL[i]
    ///[newAr[i], newAr[j]] = [arrayL[j], arrayL[i]]
    return newAr
}
//console.log(changeElementsViaIndex(numberArray, 2,3))

function getUserValueViaKey<T, K extends keyof T>(obj:T, key:K){
    return obj[key]
}

//console.log(getUserValueViaKey(user, 'age'))

interface GeneralApi<T> {
    data: T,
    id: number,
    success: boolean
}

let apiResponse: GeneralApi<{token: string}> = {
    data: {token:'dataType'},
    id: 12,
    success: true
}
let apiResponse2: GeneralApi<{token: number}> = {
    data: {token:11},
    id: 12,
    success: true
}

// console.log(apiResponse.data)
// console.log(apiResponse2.data)

// function omitFunction<T, K extends keyof T>(obj:T, key:K): Omit<T, K>{
//     return obj[key]
// }

let numberArray = [1,2,3,4,5,6,6,6]
let floatNumber = [1.2,2.3,4,5,5.5]
let stringNUmber = ['1','2','3','4','5']

function uniqueValue<T>(arr: T[]):T[]{
    let newSet = new Set()
    for(let i of arr){
        if(!newSet.has(i))
            {newSet.add(i)}
    }
    console.log(newSet)
}
//uniqueValue(stringNUmber)



let user = {
  'name': 'Alex',
  'age': 30,
  'isLoggedIn': true,
  'email': 'alex@example.com'
}

