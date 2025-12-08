import { RandomData } from "./randomData"


interface UserObject {
    name: string,
    secondName: string,
    age: string|number,
    hobbies: Array<string>,
    position: string,
    sayHello():void,
    getUniqueId():void,
    showInfo(): void,
    updatePosition(newPosition:string):void
    showHobbies():void
    setupTimeout():void
    printAge(): void
    getAnonymId(): AnonimusObject
    getAgeInYears(): number
}

interface AnonimusObject {
    dataCreated(): string
    getAnonymusId(): number
}


let User: UserObject = {
    'name':'Alex',
    'secondName':'Galaiev',
    'age':35,
    'hobbies': ['Cookeing', 'Swiming', 'Smoking'],
    'position': 'AQA',
    sayHello(){
        console.log(`Hello my dear friend ${this.name} ${this.secondName}`)
    },
    getUniqueId() {
        console.log(new RandomData().getUnigueId())
    },
    showInfo(){
        console.log(`${this.name} ${this.secondName} ${this.age} years old. Works like ${this.position}`)
    },
    updatePosition(newPosition: string){
        this.position = newPosition
        console.log(`${this.name} ${this.secondName} now works like ${this.position}`)
    },
    showHobbies(){
        this.hobbies.forEach(hobby => console.log(`${this.name} likes ${hobby}`))
    },
    setupTimeout(){
        setTimeout(()=>{this.sayHello()}, 2000)
        //setTimeout(this.sayHello, 3000) incorrect
    },
    printAge(){
        console.log(`${this.name}'s age is ${this.age}`)
    },
    getAnonymId():AnonimusObject {
        let data: AnonimusObject = {
            dataCreated(){
                return Date.UTC(1990, 9, 23).toLocaleString()
            },
            getAnonymusId(){
                return new RandomData().getUnigueId()
            }
        }
        return data
    },
    getAgeInYears() {
        let age = this.age
        if(typeof age === 'string'){
            age = Number(age)
        }
        return age
    },
}


// User.sayHello()
// User.getUniqueId()
// User.updatePosition('MobileQA')
// User.showInfo()
// User.showHobbies()
// User.setupTimeout()
// User.printAge()
// console.log(User.getAnonymId().dataCreated())
// console.log(User.getAnonymId().getAnonymusId())


                    //adding object to array
// let data = []
// data.push(User)
// console.log(data)

                    // Change object properties
// User.age = 36
// User.name = "Max"
// User.hobbies[0] = 'Cars'
// console.log(User)
                    //for loop
// for(let key in User){
//     console.log(key)
// }





/////////////////////Object to class

export class UserImplementation{
    name: string;
    secondName: string;
    age: string|number;
    hoobies: Array<string>
    position: string;
    anonymusId: string|number

    constructor(){
        this.name = 'Alex'
        this.secondName = 'Galaiev'
        this.age = 35
        this.hoobies = ['Cooking', 'smoking', 'whores']
        this.position = 'QA'
        this.anonymusId = this.getAnonymusId()
    }

    changePosition(newPosition: string){
        this.position = newPosition
        return this
    }

    getHoobies(){
        return this.hoobies
    }
    private getAnonymusId(){
        return new RandomData().getUnigueId()
    }

}

let newUser = new UserImplementation()
// console.log(newUser.age)
// console.log(newUser.name)
// newUser.changePosition('mobile QA')
// console.log(newUser.position)
// console.log(newUser.anonymusId)

////////////// Class implementation


let newObject = {
    name: 'Alex',
    age: 35
}

// for(let [keys, values] of Object.entries(newObject)){
//     console.log('keys=', keys, 'values=', values )
// }

let dataArray = [
    {name: 'Alex', age: 35}, {name: 'Max', age: 14}
]

// for(let i of dataArray){
//     console.log(Object.values(i))
// }
let result = dataArray.forEach(user =>{
    console.log(Object.values(user))
})
//console.log(result)