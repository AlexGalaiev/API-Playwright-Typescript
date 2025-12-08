import { error } from "console"
import { en, Faker, faker } from '@faker-js/faker'
import { FakeUser } from "./fakeUser"

function mockLogin(username: string, password: string): Promise<string>{
    return new Promise((resolve, reject)=>{
        let token: string
        setTimeout(()=>{
            if((username === 'qa') && (password === 'test')){
                token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
                return resolve(token)
            } else {
                reject(console.log('Invalid credentials'))
            }}, 1000)
        })
    }

// let result = mockLogin('qa','test')
// .then((resolvedToken) =>{console.log('token is', resolvedToken)})
// .catch((errorMsg)=>{})
// let result2 = mockLogin('qa','test2')
// .then((resolvedToken) =>{console.log('token is', resolvedToken)})
// .catch((errorMsg)=>{})

function runTest(testName: string, shouldFail: boolean): Promise<string>{
    let duration = Math.random() * 1000
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(shouldFail == true){
                resolve(testName)
            } else {
                reject(`${testName} id failed`)
            }
        }, duration)
    })
} 

async function executeParallelTests(){
    let test1 = runTest('short rregistration test', true)
    let test2 = runTest('full registration test', false)
    let test3 = runTest('trading test', true)

    let result = await Promise.allSettled([test1, test2, test3])
    
    let successTests = result.filter(test => test.status === 'fulfilled')
    let failedTests = result.filter(test => test.status === 'rejected')
    let successNumber = successTests.length
    let failedNumber = failedTests.length

    console.log(`Statistcs \n Number of success tests - ${successNumber} \n Number of failed tests - ${failedNumber}`)
}

//executeParallelTests()

// Вспомогательная функция для задержки
const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

// Шаг 1: Логин
async function loginUser(): Promise<number> {
    await wait(1000); // Имитация задержки
    console.log("➡️ Шаг 1: Пользователь авторизован.");
    return 420; // userId
}

// Шаг 2: Создание сессии (требует userId)
async function createSession(userId: number): Promise<string> {
    await wait(500);
    if (!userId) throw new Error("ID пользователя не передан.");
    console.log(`➡️ Шаг 2: Сессия создана для ID: ${userId}.`);
    return `sess_${userId}_xyz`; // sessionId
}

// Шаг 3: Отправка заказа (требует sessionId)
async function submitOrder(sessionId: string): Promise<number> {
    await wait(1500);
    const shouldFail = sessionId.length % 2 === 0; // Имитируем ошибку (четная длина строки)
    
    if (shouldFail) {
        throw new Error("Ошибка API: Невозможно отправить заказ в данный момент.");
    }
    console.log(`➡️ Шаг 3: Заказ успешно отправлен.`);
    return Math.floor(Math.random() * 1000); // orderId
}

// Твоя задача — дописать эту функцию
async function executeOrderFlow() {
    console.log("--- Запуск Потока Заказа ---");
    // TODO: 1. Вызови функции последовательно.
    // TODO: 2. Используй try...catch для обработки ошибки в submitOrder.
    let  userId = await loginUser()
    let sessionId = await createSession(userId)
    try { await submitOrder(sessionId) }
    catch(error) {console.log(`New error was detected - ${error}`)}
}

//executeOrderFlow();

function getInitialValue(): Promise<number> {
    return new Promise((resolve, reject)=>{
        let numb: number
        setTimeout(()=>{
            resolve(numb = 5)
        },1500)
    })
}

// getInitialValue().then((firstResult)=>{
//     let res = firstResult *2
//     console.log(`first then = ${res}`)
//     return res
// }).then((secondRes)=>{
//     let res = secondRes +10
//     console.log(`second then = ${res}`)
//     return res
// }).then((finalThen)=>{
//     let res = finalThen.toString()
//     console.log(`Final result is ${res}`)
// })


async function checkCache(key: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(key === "cache-hit"){
                return Promise.resolve()
            } 
            new Promise((reject) => {
                    setTimeout(()=>{
                        console.log('Loaded from network')
                },1000)
            })

        }, 1000)
    })
}

async function runCacheTest() {
    // Кейс 1: Кэш-хит
    const hitResult = await checkCache("cache-hit");
    console.log(`\nКейс 1: ${hitResult}`);

    // Кейс 2: Кэш-промах
    const missResult = await checkCache("database-query");
    console.log(`Кейс 2: ${missResult}`);
}

//runCacheTest()

function runErrorPropogant(){
        console.log('process is running')
        return Promise.resolve('Data from 0 step')
}
function testFunn(){
    runErrorPropogant()
    .then((step) => {
        let msg = 'first step message'
        console.log(msg)
        return step
    })
    .then((step2)=>{
        console.log(step2)
        throw new Error('error on second step')})
    .then((step3)=>{
        let msg = '3rd step'
        console.log(msg)
        return msg
    })
    .catch((error) => {console.log(`${error} message is displayed`)})
}


//testFunn()

function validateInput(data: any){
    if(data === null){return new Error('Synchro chek: data === null')}
    //let result = (data === null) ? new Error('Synchro chek: data === null') : console.log('data is not null')
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(data === 'fail-async') {
                return Promise.reject('Asyncro function fucntion check')
            } else{
                resolve('All data is ok')
            }
        }, 500)
    })
}

// validateInput('null').then(result => console.log(`${result} null case is ok`))
// .catch(error => new Error(`${error} message is displyed`))


// function delay(timeout: number): Promise<void>{
//     return new Promise((resolve, reject) =>{
//         let numb: number = 0;
//         setTimeout(()=>{
//             numb = Math.random()*1000
//             return resolve(numb)
//         }, timeout),
//     })
// }

// delay(1000).then((data)=>{console.log(data)})

// function step1(data: number): Promise<number> {
//     // Имитация асинхронной работы
//     return new Promise((resolve) => {
//         resolve(data * 2); 
//     });
// }

step1(10).then((result1: number) =>{
    let newValue = result1 * 2
    return newValue.toString()
}).then((result2:string)=>{
    let newObject = {'finalValue':result2}
    return newObject
})

function fetchData(): Promise<{ id: number, name: string }> {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; // 50% шанс ошибки
        if (success) {
            resolve({ id: 101, name: "Data Package" });
        } else {
            reject(new Error("Failed to fetch data due to network error"));
        }
    });
}

async function saveFetch(){
    try{
        let data = await fetchData()
        return data
    } catch(error){
        return null
    }
}

// // 1. Возвращает объект пользователя
// function getUser(id: number): Promise<{ userId: number, username: string }> { /* ... */ }

// // 2. Возвращает объект продукта
// function getProduct(id: number): Promise<{ productId: number, name: string, price: number }> { /* ... */ }


// function allData(userId: number, productId: number) {
//     let data = await Promise.all([getUser(userId), getProduct(productId)])
//     return data
// }

// function processData(): Promise<number> {
//     const initialPromise: Promise<number> = Promise.resolve(42);

//     return initialPromise.then((value) => {
//         console.log(`Получено значение: ${value}`); 
//         return value
//     }).then((oldValue) =>{console.log(`old value = ${oldValue}`)})
// }


// function fetchUser(): Promise<{ id: number }> { /* ... */ }
// function fetchOrder(userId: number): Promise<{ orderId: string }> { /* ... */ }
// function fetchProduct(orderId: string): Promise<string[]> { /* ... */ }

// async function getCompleteData():Array<any>{
//     let userid = await fetchUser()
//     let orderId = await fetchOrder(userid)
//     let product = await fetchProduct(orderId)
//     return [userid, orderId, product]
// }

let newCustomer = new FakeUser()
console.log(newCustomer.fullName)