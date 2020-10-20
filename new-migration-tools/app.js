const { Sequelize } = require('sequelize');

import { initModels as initDjangoModels } from './models/django/init-models';
import * as R from 'ramda'

const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/main') // Example for postgres

const djangoModels = initDjangoModels(sequelize);       

djangoModels.blog_blogpost.hasOne(djangoModels.vikalp_article, {
    foreignKey: 'blogpost_ptr_id'
})

async function main() {
    try {
        await sequelize.authenticate();
        
        const post = await djangoModels.blog_blogpost.findOne({
            include: [{
                model: djangoModels.vikalp_article,
            }]
        });

        const cleanedPost = cleanPost(post);
        console.log(cleanedPost)

        await sequelize.close()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const getDataValues = post => R.omit(["content"], post.dataValues)

const flattenPost = post => R.merge(
    R.path(["vikalp_article" , "dataValues"], post),
    R.omit(["vikalp_article"], post)
)

const encode_urls = post => post

const cleanPost = R.pipe(
    getDataValues,
    encode_urls,
    flattenPost
)



main()
