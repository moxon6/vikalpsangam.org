const { Sequelize, DataTypes  } = require('sequelize');
const cheerio = require('cheerio');

import { initModels as initDjangoModels } from './models/django/init-models';
import * as R from 'ramda'
import setupRelations from './setup-relations';
import extensions from './extensions';

import fs from 'fs';

const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/main') // Example for postgres

const djangoModels = initDjangoModels(sequelize);       

setupRelations(djangoModels)

async function main() {
    try {
        await sequelize.authenticate();       
        
        const posts = await djangoModels.blog_blogpost.findAll({
            include: [{
                model: djangoModels.vikalp_article,
            }, {
                as: "categories",
                model: djangoModels.blog_blogcategory
            }, {
                as: "tags",
                model: djangoModels.generic_keyword
            }, {
                model: djangoModels.django_comments,
                as: "comments",
                on: sequelize.where(
                    sequelize.cast( sequelize.col('comments.object_pk'), "integer"),
                    sequelize.col('blog_blogpost.id')
                )
            }]
        });


        const formatted = posts.map(p => p.toJSON()).map(formatPost)

        fs.writeFileSync('posts.json', JSON.stringify(formatted.map(sortKeys), null, 2));

        await sequelize.close()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const articleKey = "vikalp_article"

const sortKeys = R.pipe(
    R.toPairs(),
    R.sortBy(R.prop(0)),
    R.fromPairs()
)

const extractMedia = $ => [
    ...extractImages($),
    ...extractLinks($)
]

const extractLinks = $ => $('a')
    .get()
    .map(x => $(x).attr("href"))
    .filter(x => !!x)
    .filter(x => x.startsWith("/static/media/uploads/"))
    .map(x => {
        if ( !extensions.some(ext => x.endsWith(ext)) ) {
            console.warn(x)
        }
        return x;
    })

const extractImages = $ => $('img')
    .get()
    .map(x => $(x).attr("src"));

const formatPost = R.pipe(
    post => R.mergeRight(post, post[articleKey]),
    R.omit([articleKey]),
    post => ({
        ...post,
        categories: post.categories.map(R.pick([
            "id",
            "slug",
            "title"    
        ]))
    }),
    post => ({
        ...post,
        media: extractMedia(
            cheerio.load(post.content)
        )
    }),
    post => ({
        ...post,
        tags: post.tags.map(R.pick([
            "id",
            "slug",
            "title"
        ]))
    })
)

main()
