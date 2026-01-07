import { profile } from "console"
import { FakeUser } from "./CreateNewFakeUser"
// task 1
interface User {
    readonly id: number,
    username: string,
    email: string,
    age?: number
}

function getUserInfo(user: User){
    if(user.age === undefined){
        console.log('age is not installed')
    } else {
        let returnData = `User ${user.username} is ${user.age} years old`
        return returnData
    }
}

let newUser: User = {
    'username': 'mrAlex',
    'email':'AlexEmail@i.com',
    'id':1488,
    'age':25
}
//console.log(getUserInfo(newUser))

//task 2 

let data1 = [1,2,3,4,5,6]
let data2 = ['a','b','c']

function lastItem<T>(arg:T[]): T|null{
    let lastItem = arg[arg.length - 1]
    return lastItem
}

//console.log(lastItem(data2))

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    isInStock: boolean;
}

type ProductPreview = Pick<Product, 'id'|'name'|'price'>
type CreateProductDto = Omit<Product, 'id'>

const orders = [
  { id: 1, amount: 100, currency: 'USD' },
  { id: 2, amount: 200, currency: 'USD' },
  { id: 3, amount: 50, currency: 'EUR' }
];

let totalPriceWithUSDCurrency = orders.reduce((acc, price)=>{
    if(price.currency == 'USD'){
        return acc+price.amount
    }
    return acc
}, 0)

//console.log(totalPriceWithUSDCurrency)

async function fetchUserData(userId: number) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(userId>0){
                resolve('User Found')
            } else {
                reject('Invalid ID')
            }
        },1000)
    })
}

//fetchUserData(-11000)

//fetchUserData(1000).then((result)=>{console.log(result)}).catch((msg)=>{console.log(msg)})

//console.log(await fetchUserData(100))


const getString = () => Promise.resolve("Hello");
const getNumber = () => Promise.resolve(42);
const getBoolean = () => Promise.resolve(true);

function getAllData():Promise<[string, number, boolean]>{
    return Promise.all([getString(), getNumber(), getBoolean()])
}

async function runAlltests(){
    let [str, num, bool] = await getAllData()
    return [str, num, bool]
}

interface Circle { kind: 'circle'; radius: number; }
interface Square { kind: 'square'; side: number; }

type Shape = Circle | Square

function calculateArea(shape: Shape): number {
    if(shape.kind == 'circle'){
        let value = Math.PI * shape.radius * shape.radius
        return value
    } else {
        let value = shape.side *shape.side
        return value
    }
}

let sircleData: Circle = {'kind': 'circle', 'radius':10}

//console.log(calculateArea(sircleData))

type UserRole = 'admin' | 'editor' | 'viewer'
let userRoles: UserRole

type permissions = Record<UserRole, string[]>
let userPermissions: permissions = {
    'admin': ['deleate', 'create', 'edit'],
    'editor': ['create', 'edit'],
    'viewer': ['view']
}

//console.log(userPermissions.admin)

// let x: any = 10;
// x.foobar()

// let y: unknown = 10
// console.log(y.foobar())

interface NewUser {
    id: number,
    email: string, 
    isActive: boolean
}

function getActiveEmails(users: NewUser[]): string[]{
    let emailData: string[] = []
    let userdata = users.filter(user => user.isActive).map(user => emailData.push(user.email))
    return userdata
}

let testUsers: NewUser[] = [
    {id:1, email:'testEmail@i.com',isActive:true},
    {id:2, email:'testEmail2@i.com',isActive:true},
    {id:3, email:'testEmail3@i.com',isActive:false},
]
//console.log(getActiveEmails(testUsers))



function login(username:string):Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`username is ${username}`)
            let uniqueUsername = `test_${username}`
            resolve(uniqueUsername)
        },3000)
    })
}

function getProfile(token: string): Promise<object>{
    return new Promise((resolve)=>{
        console.log(`token is ${token}`)
        setTimeout(()=>{
            let profile = {
                id:10,
                name:'Alex',
                position: 'QA'
            }
            resolve(profile)
        }, 1000)
    })
}

let uniqueData = new FakeUser().username

async function getUserData(username: string){
    let token = await login(username)
    let profile = await getProfile(token)
    return profile
}


//login('manaManaNA').then((token)=>{getProfile(token)})
//console.log(await getUserData(uniqueData))

interface ApiResponse<T> {
    status: 'success'|'error',
    code: number,
    data: T
}

let newUsers: ApiResponse<NewUser[]> = {
    'code':12,
    'status':'success',
    'data':[
        {'id':1,'email':'testEmail@i.com', 'isActive':true},
        {'id':2,'email':'testEmail2@i.com', 'isActive':false},
        {'id':3,'email':'testEmail3@i.com', 'isActive':false},
    ]
}

let statuses = ['passed', 'failed', 'passed', 'skipped', 'failed']

type statusCount = Record<string, number>

let statistic = statuses.reduce((acc, status)=>{
    if(acc[status]){
        acc[status] += 1
    }else{
        acc[status] = 1
    }
    return acc
},{} as statusCount)

//console.log(statistic)

interface Page {
    url: string,
    open(): void,
    search?(query: string): void
}

function testPage(page: Page){
    page.open()
    if(page.search){
        page.search('QA')
    } else {
        console.log('search is not here')
    }
}

let loginPage: Page = {
    'url':'google.com',
    'open': () => console.log('this is login page open function'),
    'search': () => console.log(' this is derch field')
}

testPage(loginPage)



