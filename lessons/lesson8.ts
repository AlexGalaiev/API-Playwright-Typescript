
// interface User {
//     id: number,
//     name: string,
//     email: string
// }

// let user: User = {
//     id: 12,
//     name: 'Alex',
//     email: 'testEmail@i.ua'
// }

// for( let i in user){
//     console.log(i)
// }

// let cars = ['Mers_1', 'Volvo_2', 'Toyota_3', 'Audi_4']

// cars.forEach((car, index) => {
//     if(index%2 !== 0){
//         console.log(car)
//     }
// })

let array1: number[] = [1,2,3,45,7,4,4,4]
let array2: [number, number] = [1,2]



let result = (...number: number[])=>{
    let data = number.reduce((totalnumber, number)=>{
        return totalnumber+number
    },0)
    return data
    }

    console.log(result(...array1))