import { initModels as initWordpressModels } from './models/wordpress/init-models';
import setupRelations from './setup-wordpress-relations';
import * as R from 'ramda';
import wp_term_taxonomy from './models/wordpress/wp_term_taxonomy';

const { Sequelize, Op } = require('sequelize');

const sequelize = new Sequelize('mysql://wordpress:wordpress@db:3306/wordpress') // Example for postgres

const wordpressModels = initWordpressModels(sequelize);
setupRelations(wordpressModels)


async function destroyEditLocks() {
    await wordpressModels.wp_postmeta.destroy({
        where: {
            meta_key: "_edit_lock" 
        }
    })
}

async function getPostIds() {
    const posts = await wordpressModels.wp_posts.findAll({
        attributes: ["id"],
        where: {
            post_type: "post"
        }
    })

    return posts.map(p => p.toJSON().id)
}

async function destroyPostMeta(postIds) {
    await wordpressModels.wp_postmeta.destroy({ 
        where: {
            post_id: postIds
        }
    })
}

async function destroyPosts(postIds) {
    await wordpressModels.wp_posts.destroy({ 
        where: {
            ID: postIds
        }
    })
}

async function destroyTags(tagIds) {
    await wordpressModels.wp_terms.destroy({ 
        where: {
            term_id: tagIds
        }
    })

    await wordpressModels.wp_term_taxonomy.destroy({ 
        where: {
            taxonomy: "post_tag"
        }
    })
}

async function destroyRedundantTermRelationships() {
    const termTaxonomyIds = (await wordpressModels.wp_term_taxonomy.findAll()).map(x => x.toJSON().term_taxonomy_id)
    const allPostIds = (await wordpressModels.wp_posts.findAll()).map(x => x.toJSON().ID)

    await wordpressModels.wp_term_relationships.destroy({ 
        where: {
            term_taxonomy_id: {
                [Op.not] : termTaxonomyIds
            }
        }
    })

    await wordpressModels.wp_term_relationships.destroy({ 
        where: {
            object_id: {
                [Op.not] : allPostIds
            }
        }
    })
}

async function getTagIds() {
    const tagsResponse = await wordpressModels.wp_terms.findAll({
        include: [{
            model: wordpressModels.wp_term_taxonomy,
            where: {
                "taxonomy": "post_tag"
            }
        }]
    })
    return tagsResponse.map( r => r.toJSON().term_id )
}

async function main() {
    try {
        await sequelize.authenticate();
        
        const postIds = await getPostIds()
        const tagIds = await getTagIds()
        
        await destroyEditLocks()
        await destroyPostMeta(postIds)
        await destroyPosts(postIds)
        await destroyTags(tagIds)
        await destroyRedundantTermRelationships()

        await sequelize.close()
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()
