
interface Users {
    id: number,
    name: string,
    department: string,
    salary: number,
    isActive: boolean
}

const employees: Users[]= [
  { id: 1, name: 'Alice', department: 'QA', salary: 2000, isActive: true },
  { id: 2, name: 'Bob', department: 'Dev', salary: 3500, isActive: false },
  { id: 3, name: 'Charlie', department: 'QA', salary: 4000, isActive: true },
  { id: 4, name: 'Dave', department: 'HR', salary: 1500, isActive: true }
]

let getOnlyActiveUsers = employees
.filter(user => user.isActive === true)
.map(user => user.name)
//console.log(getOnlyActiveUsers)

//находит всех активных юзеров и считает общую зарпоату
let totalSalaryOfActiveEmployes = employees
.filter(user => user.isActive === true)
.reduce((ac, currentValue) => {
    let result= ac + currentValue.salary
    return result
}, 0)
//console.log(totalSalaryOfActiveEmployes)

// попытка найти обьект с несуществующим значением
let findBobSalery = employees.find(user => user.name === 'Terminator')
//console.log(findBobSalery?.salary)

// создает копию массива массива
let employesCopy = [...employees]
//console.log(employees === employesCopy)

// сортирует по ЗП
employesCopy.sort((a, b)=>{
    return a.salary - b.salary
})
//console.log(employesCopy)

// фильтрует по зарплате, сортирует и потом выводит в виде обьекта
let resultData = employesCopy
.filter(user => user.salary >= 1800)
.sort((a, b)=>{
    return a.salary - b.salary
})
.map(user => ({
    [user.name]: user.salary
}))
//console.log(resultData)

////////////////////////////////////////////////
interface Candidate {
  name: string;
  techStack: string;
  score: number;       // Баллы за тех. собес (0-100)
  expectedSalary: number;
  isHired: boolean;
}

const candidates: Candidate[] = [
  { name: 'Alex', techStack: 'JS', score: 85, expectedSalary: 2000, isHired: false },
  { name: 'Boris', techStack: 'Java', score: 60, expectedSalary: 3500, isHired: false },
  { name: 'Clara', techStack: 'JS', score: 95, expectedSalary: 2500, isHired: true },
  { name: 'Diana', techStack: 'Python', score: 70, expectedSalary: 1500, isHired: false },
  { name: 'Evan', techStack: 'JS', score: 90, expectedSalary: 3000, isHired: false },
];

//filter via stack = js and create array with names
let onlyJsCandidates = candidates
.filter(user => user.techStack === 'JS')
.map(user => user.name)

//create copy of array  and sort users via score. From max to min
let sortedCandidates = [...candidates]
let sortViaScorePoints = sortedCandidates
.sort((a, b)=>{return b.score - a.score})

//count of all salary for customers
let totalSalary = employees.reduce((acc, userSalary) => {return acc + userSalary.salary}, 0)

//find user with name = Boris and create a string
let notExistUser = employees.find((user) => {return user.name === 'Boris'})
//let result = notExistUser?.salary ? console.log(`Boris wants salary = 3500`) : console.log('possibly user is not defined')
//console.log(result)


const prices = ["100", 200, "500", null, "error", 300, undefined]
let copyPrices = [...prices]
// first option ( the easiest way)
let newArray = []

for(let i of copyPrices){
    if((i !== 'error')&&(i !== null)&&(i !== undefined)){
        newArray.push(Number(i))
    }
}

//console.log(newArray)

let newData = copyPrices
.map(data => Number(data)) //change all data to Number
.filter(number => (!Number.isNaN(number) && number !== 0)) // filter only valid data
.filter(number => number >= 250) //filter values more then 250
.reduce((acc, value)=>{return acc+value}) // count total value

//console.log(newData)

const response = {
  "user_1": { status: "active", role: "admin" },
  "user_2": { status: "banned", role: "user" },
  "user_3": { status: "active", role: "user" }
};

interface MyResponse<T> {
    success: boolean,
    payload: T,
    error?: string
}
