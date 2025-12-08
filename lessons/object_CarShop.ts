
interface CarShop {
    shopName: string
    shopAdress: string
    managers: Array<string>
    cars: Record<string, number>
    getShopInfo():string
    getCarQuantity(carModel:string):string
    getTotalCarCount(): void
    addManager(newManager: string): void
    getMostStockedCar(): string 
}

let myCarShop: CarShop = {
    'shopName': 'AutoDream',
    'shopAdress': 'Central str., 1',
    'managers': ['Ivan', "Mary"],
    'cars': {'Tesla':2, 'BMW':3, 'Audi':4},
    getShopInfo(){
        return `Shop name - ${this.shopName}, adress - ${this.shopAdress}`
    },
    getCarQuantity(model){
        let cars = this.cars[model] ? this.cars[model] : 0
        return `Total number of ${model} is ${cars}`
    },
    getTotalCarCount(){
        let allCars = []
        for(let car in this.cars){
            allCars.push(this.cars[car])
        }
        let total = allCars.reduce((all, car)=>{return all+car}, 0)
        return total
    },
    addManager(newManagerName){
        if(!this.managers.includes(newManagerName)){
            this.managers.push(newManagerName)
        }else{ throw new Error('This manager is exist in the list')}
        return this.managers
    },
    getMostStockedCar(){
        let maxNumber = 0
        let maxModel=''
        for(let [car, numbers] of Object.entries(this.cars)){
            if(numbers>maxNumber){
                maxNumber = numbers
                maxModel = car
            }
        }
        return maxModel
    }

}

//let shop = myCarShop
// console.log(shop.getShopInfo())
// console.log(shop.getCarQuantity('BMW'))
//console.log(shop.getTotalCarCount())
//console.log(shop.addManager('Ivan'))
//console.log(shop.getMostStockedCar())

export class CarShopClass implements CarShop {
    shopName: string
    shopAdress: string
    managers: Array<string>
    cars: Record<string, number>

    constructor(shopName: string, adress: string, ){
        this.shopName = shopName
        this.shopAdress = adress
        this.managers = []
        this.cars = {}
    }

    getShopInfo(){
        return `Shop name - ${this.shopName}, adress - ${this.shopAdress}`
    }

    getCarQuantity(model:string){
        let cars = this.cars[model] ? this.cars[model] : 0
        return `Total number of ${model} is ${cars}`
    }

    getTotalCarCount(){
        let allCars = []
        for(let car in this.cars){
            allCars.push(this.cars[car])
        }
        let total = allCars.reduce((all, car)=>{return all+car}, 0)
        return total
    } 
    addManager(newManagerName: string){
        if(!this.managers.includes(newManagerName)){
            this.managers.push(newManagerName)
        }else{ throw new Error('This manager is exist in the list')}
        return this.managers
    }

    getMostStockedCar(){
        let maxNumber = 0
        let maxModel=''
        for(let [car, numbers] of Object.entries(this.cars)){
            if(numbers>maxNumber){
                maxNumber = numbers
                maxModel = car
            }
        }
        return maxModel
    }
    addCar(carModel: string, carNumbers: number){
        if( this.cars[carModel]){
            this.cars[carModel] += carNumbers
        } else {
            this.cars[carModel] = carNumbers
        }
        return this.cars
    }
    sellCar(carModel: string, carNumbers: number){
        if(this.cars[carModel] && this.cars[carModel] >= carNumbers){
            this.cars[carModel] -= carNumbers
            return this.cars
        } else {
            throw new Error('Not enough cars')
        }
    }
    showAllCars(){
        return this.cars
    }

    getShopSummary(){
        //let managers: Array<string> = []
        this.addManager('Ivan')
        this.addManager('LzheIvan')
        return `Welcome to our ${this.shopName}. These are our managers ${this.managers}`
    }
}



// let salon = new CarShopClass('Atlant', 'Kyiv')
// console.log(salon.addCar('Toyota', 5))
// console.log(salon.addCar('Toyota', 5))
// console.log(salon.sellCar('Toyota', 1))
// console.log(salon.showAllCars())
// console.log(salon.getShopSummary())

let simpleShop = {
    shopName:'simpleShop',
    shopAdress:'New street',
    managers: ['Ivan', "Mary"],
    cars: {'Gaz':2, 'Myas':3, 'Kvas':4},
}

console.log(myCarShop.getShopInfo.call(simpleShop))
console.log(myCarShop.getCarQuantity.call(simpleShop, 'Gaz'))
