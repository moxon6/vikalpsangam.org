const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/main') // Example for postgres

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        const result = await sequelize
            .query('select table_schema, table_name from information_schema.tables', {
                type: sequelize.QueryTypes.SELECT
            })
        console.log(result)

        await sequelize.close()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()
