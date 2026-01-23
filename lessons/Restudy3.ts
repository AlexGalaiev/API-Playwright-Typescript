interface TestConfig {
    browser: 'chrome'|'firefox'|'webkit',
    env: Record<string, string>,
    reports: ('html'|'json'|'list')[],
    headless?: boolean,
    maxRetries?: number,
}

let data: TestConfig = {
    browser:'chrome',
    env:{'data1': 'nodata'},
    reports:['html'],
    maxRetries:10
}

function addMissedFields(userObject: TestConfig){
    let baseObject: TestConfig = {
        'browser':'chrome',
        'env':{'qa':'www.qa.com'},
        reports:['html'],
        headless: true, 
        maxRetries:1
    }

    let returnData = {...baseObject, ...userObject}
    return returnData
}

//console.log(addMissedFields(data))

interface TestResult {
    id: number;
    title: string;
    status: 'passed' | 'failed' | 'skipped';
    duration: number; // в миллисекундах
}

interface testReport {
    totalDuration: number;
    passedCount: number;
    failedCount: number;
    averageDuration: number;
}

function getTestDataReport(tests: TestResult[]){
    
    let testsCounts: testReport = {
        'passedCount':0,
        'failedCount':0,
        'averageDuration':0,
        'totalDuration':0
    }

    let results = tests.reduce((acc, tests)=>{
        acc. += tests.duration
        if(tests.status == 'passed'){
            acc.passedCount +=1
        }
    },testsCounts)
}