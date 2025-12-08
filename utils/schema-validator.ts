import fs from 'fs/promises'
import path from 'path'
import Ajv from 'ajv'
import draft04 from 'ajv-draft-04'

const BASE_SCHEMA = 'response-schema'
const ajv = new Ajv({allErrors:true})
//ajv.addMetaSchema(draft04)


async function readSchema(schemaPass: string){
    try{
        let schemaData = await fs.readFile(schemaPass, 'utf-8')
        return JSON.parse(schemaData)
    } catch(error){
        throw new Error(`Failed to read data from file: ${error.message}}`)
    }
}
export async function schemaValidation(fileDir: string, filenName: string, responseBody: object){
    let schemaPath = path.join(`${BASE_SCHEMA}/${fileDir}/${filenName}_schema.json`)
    let data = await readSchema(schemaPath)
    let validate = ajv.compile(data)
    let valid = validate(responseBody)
    if(!valid){ 
        console.log(validate.errors)
    }
}

    

