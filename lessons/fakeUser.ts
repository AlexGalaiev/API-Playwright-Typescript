import { fa, fakerEN } from '@faker-js/faker'


interface User{
    fullName: string
    address: string
    email: string
    phoneNumber: string
    bio: string
}

export class FakeUser implements User{
    fullName: string;
    address: string;
    email: string;
    phoneNumber: string;
    bio: string

    
    constructor(){
        this.fullName = fakerEN.person.fullName()
        this.address = fakerEN.location.streetAddress()
        this.email = fakerEN.internet.email()
        this.phoneNumber = fakerEN.phone.number({style:'national'})
        this.bio = fakerEN.person.bio()
    }


}