import { Sequelize } from 'sequelize'
import * as fs from 'fs';

export default () => {
    
    const credentials = JSON.parse(
        fs.readFileSync("../credentials.json", "utf-8")
    )  
    const credentialsKey = process.argv[2]

    const connectionString = credentials[credentialsKey]
    return new Sequelize(connectionString, {
        logging: false
    })
}