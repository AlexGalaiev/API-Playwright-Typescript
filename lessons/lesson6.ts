// type Product = {
//   name: string;
//   price: number;
//   rating: number;
// };

// let products: Product[] = [
//   { name: 'Laptop', price: 1200, rating: 4.5 },
//   { name: 'Mouse', price: 25, rating: 4.8 },
//   { name: 'Keyboard', price: 75, rating: 4.2 },
//   { name: 'Monitor', price: 300, rating: 4.6 },
// ];

// function processProducts(products:any[]){
//     let filtered = [...products].filter(rating => rating.rating >= 4.5)
//     let sorted = filtered.sort((a, b)=>(b.price - a.price))
//     let totalNumber = sorted.reduce((ac, rate)=>(ac+rate.price), 0)
//     console.log('filtered', filtered, 'sorted', sorted, 'totalNumber', totalNumber)
// }

// processProducts(products)


// interface Products {
//     name: string, 
//     price: number,
//     rating: number
// }

// let products: Products[] = [
//   { name: 'Laptop', price: 1200, rating: 4.5 },
//   { name: 'Mouse', price: 25, rating: 4.8 },
//   { name: 'Keyboard', price: 75, rating: 4.2 },
//   { name: 'Monitor', price: 300, rating: 4.6 },
//   { name: 'Webcam', price: 50, rating: 3.9 },
// ];

// type PriceFilters = 'price-asc'| 'price-desc' | 'rating-desc'
 
// function filterArray(products: Products[], sortBy: PriceFilters, minRating?:number){
//     let newArray = [...products]
    
//     if(minRating !== undefined){
//         let minRate= products.filter(num => num.rating <= minRating)
//         console.log('products has minimum rate', minRate)
//     }
//     switch (sortBy){
//         case 'price-asc':
//             return newArray.sort((priceA, priceB)=>(priceA.price - priceB.price));
//         case 'price-desc':
//             return newArray.sort((priceA, priceB)=>(priceB.price - priceA.price));
//         case 'rating-desc':
//             return newArray.sort((rateA, rateB)=>(rateB.rating - rateA.rating));
//     }
// }

// let data = filterArray(products, 'price-asc', 4.0)
// console.log(data)
// // console.log('Down', filterArray(products, 'price-desc'))
// // console.log(filterArray(products, 'rating-desc'))


// let users = [
//   { id: 1, name: 'Alice', age: 30 },
//   { id: 2, name: 'Bob', age: 25 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];

// let responses = [
//     { statusCode: 200, data: { id: 'abc' } },
//     { statusCode: 404, data: null },
//     { statusCode: 201, data: { id: 'xyz' } },
// ]

// function pluck<T,K extends keyof T>(object:T[], key:K ){
//     let newArray = object.map(keyValue => keyValue[key])
//     return newArray
// }

// console.log(pluck(users, 'name'))

// const baseConfig = {
//   browser: 'chromium',
//   headless: true,
//   timeout: 30000,
// };

// const stagingConfig = {
//   headless: false,
//   baseURL: 'https://staging.example.com',
// };

// const localConfig = {
//     timeout: 5000,
//     browser: 'firefox',
// };

// function mergeConfigs(baseConfig:object, stagingConfig:object, localConfig:object){
//     let newArray ={...baseConfig, ...stagingConfig, ...localConfig}
//     console.log(newArray)
// }

// mergeConfigs(baseConfig, stagingConfig, localConfig)

