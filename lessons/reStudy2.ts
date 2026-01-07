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

