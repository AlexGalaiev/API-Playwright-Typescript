import {test as setup} from "@playwright/test"
import user from "../.auth/user.json" assert {type:'json'}
import fs from 'fs'
import { config } from "../api-test.config"


const authFileAPI = '.auth/user.json'

setup('Authentification', async({request})=>{
    let tokenResponse = await request.post(
        `${config.baseUrl}/users/login`,
    {
        data: { user: { email: config.baseEmail, password: config.basePassword} },
    }
    )
    let responseJSON = await tokenResponse.json();
    let token = "Token " + responseJSON.user.token;
    
    user.origins[0].localStorage[0].value = token
    fs.writeFileSync(authFileAPI, JSON.stringify(user))
    process.env['ACCESS_TOKEN'] = token
})
