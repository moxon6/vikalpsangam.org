const { Sequelize } = require('sequelize');

import { initModels } from './models/django/init-models';

const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/main') // Example for postgres

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        const djangoModels = initModels(sequelize);       

        const post = await djangoModels.blog_blogpost.findOne();

        console.log(post)

        await sequelize.close()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()
