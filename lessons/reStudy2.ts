import { string } from "zod"

class LoginPage{
    private baseUrl: string
    path: string

    constructor(){
        this.baseUrl = 'https://example.com'
        this.path = '/login'
    }

    getUrl(){
        return `${this.baseUrl}${this.path}`
    }
}

let page = new LoginPage().getUrl()
//console.log(page)
let wrongPage = new LoginPage()
//console.log(wrongPage.baseUrl)

interface User {
    id: number, 
    email: string,
    phoneNumber?: string,
    avatarUrl?: string
}

function getUserInfo(user: User){
    if(user.phoneNumber){
        return `User with ${user.id} and email ${user.email} has phone number ${user.phoneNumber}`
    }else{
        return `User with ${user.id} and email ${user.email} doesn't have number`
    }
}

let user:User = {
    id: 1488,
    email: 'slavaSlave@i.ua',
}

let user2:User = {
    id: 23,
    email: 'slavaUkr@i.ua',
    phoneNumber:'+380976776677'
}

//console.log(getUserInfo(user2))

type Selector = string | {timeout: number; css: string}
function clickElement(selector: Selector){
    if(typeof selector === 'string'){
        return `Click on ${selector}`
    }else{
        return `Clicking on ${selector.css} with timeout ${selector.timeout}`
    }
}

let data1: Selector = 'allo'
//console.log(clickElement(data1))
let data2:Selector = {
    timeout:2000,
    'css':'appolo'
}
//console.log(clickElement(data2))

interface ApiResponse<T> {
    'status':'success'|'error',
    'data':T
}

let data3: ApiResponse<Array<string>> = {
    status:'success',
    data: ['Alex', 'Max', 'Sveta']
}

//console.log(data3.data)

let data4: ApiResponse<number> = {
    'status':'error',
    'data':12
}
//console.log(data4.data)

interface Car {
    id: number;
    model: string;
    brand: string;
    year: number;
    createdAt: string;
}

type newCar = Pick<Car, 'id'|'createdAt'>
type newCar2 = Omit<Car, 'model'|'year'>

let car1: Car = {
    'id':1488,
    'brand':'Tesla',
    'model':'Y',
    'year':2025,
    'createdAt':'23.09.1990'
}
let car2: newCar2 = {
    'id':10,
    'brand':'Tesla',
    'createdAt':'23.09.1990'
}
let car3: newCar = {
    'id':11,
    'createdAt':'23.10.1998'
}

const getString = () => Promise.resolve("Hello");
const getNumber = () => Promise.resolve(42);
const getBoolean = () => Promise.resolve(true);

async function getAllData() {
    let result = await Promise.allSettled([getString(), getNumber(), getBoolean()])
    let resultData = {stringValue: result[0], numberData: result[1], booleanData: result[2]}
    return resultData
}

console.log(await getAllData())