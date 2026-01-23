
interface User {
    id: string|number|undefined,
    email: string|undefined
    role: 'admin'|'user'
}

interface User {
    car: string,
    custom: Customer
}

let user: User = {
    'car': 'Tesla',
    'email':'testEmail@i.uq',
    'id':122,
    'role':'user',
    'custom':'three'
}

console.log(user.role)
type Customer = 'one'|'two'|'three'