
export class User{
    constructor(public name: string){
        this.name = name
    }
    
    prinName(){
        console.log(this.name)
    }
}

//let customer = new User('Alex').prinName()

type uniouType = {
    name: string,
    age: string | number
}
let user: uniouType = {
    name:'Alex',
    age:12
}

console.log(user.age)