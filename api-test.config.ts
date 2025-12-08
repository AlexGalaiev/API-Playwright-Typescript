const processEnv = process.env.TEST_ENV
const env = processEnv || 'my'


const config = {
    baseUrl: 'https://conduit-api.bondaracademy.com/api',
    baseEmail: 'testTrading@i.ua',
    basePassword: 'Test123!',
    petShopUrl: 'https://petstore.swagger.io/v2',
    nagaAPIURL: 'https://api-v2.naga.com'
}

if(env === 'bondar'){
    config.baseUrl = 'https://conduit-api.bondaracademy.com/api';
    config.baseEmail = 'testAPI@i.ua';
    config.basePassword = 'Test123!'
}
if(env === 'my'){
    config.baseUrl = 'https://conduit-api.bondaracademy.com/api';
    config.baseEmail = 'testTrading@i.ua';
    config.basePassword = 'Test123!'
}
if(env === 'petshop'){
    config.baseUrl = 'https://petstore.swagger.io/v2';
}

export {config}