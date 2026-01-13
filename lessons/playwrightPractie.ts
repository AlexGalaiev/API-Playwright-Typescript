import { Page } from "playwright";


class BasePage{
    page: string

    constructor(){
        this.page = 'Ti sho dumal, sho ya shutki shuchu - zasranec'
    }

    async navigateTo(url: string){
        console.log('Navigate to', url)
    }

}

class LoginPage extends BasePage{
    url: string

    constructor(){
        super()
        this.url = 'alloo motherfucker'
    }

    async login(user: string){
        console.log(`login by ${user}`, this.page)
    }
}

let userLogin = new LoginPage()
await userLogin.login('Onotole')
await userLogin.navigateTo(userLogin.url)