import setupModels from './setup-models';
import { Sequelize, Op } from 'sequelize'

const sequelize = new Sequelize('mysql://wordpress:wordpress@db:3306/wordpress'); // Example for postgres
const wordpressModels = setupModels(sequelize);

async function destroyEditLocks() {
  await wordpressModels.wp_postmeta.destroy({
    where: {
      meta_key: '_edit_lock',
    },
  });
}

async function getPostIds() {
  const posts = await wordpressModels.wp_posts.findAll({
    attributes: ['id'],
    where: {
      post_type: 'post',
    },
  });

  return posts.map((p) => (p.toJSON() as any).id as number);
}

async function destroyPostMeta(postIds: number[]) {
  await wordpressModels.wp_postmeta.destroy({
    where: {
      post_id: postIds,
    },
  });
}

async function destroyPosts(postIds: number[]) {
  await wordpressModels.wp_posts.destroy({
    where: {
      ID: postIds,
    },
  });
}

async function destroyTags(tagIds: number[]) {
  await wordpressModels.wp_terms.destroy({
    where: {
      term_id: tagIds,
    },
  });

  await wordpressModels.wp_term_taxonomy.destroy({
    where: {
      taxonomy: 'post_tag',
    },
  });
}

async function destroyRedundantTermRelationships() {
  const termTaxonomyResponse = await wordpressModels.wp_term_taxonomy.findAll();
  const termTaxonomyIds = termTaxonomyResponse.map((x) => (x.toJSON() as any).term_taxonomy_id as number);
  const allPostIds = (await wordpressModels.wp_posts.findAll()).map((x) => (x.toJSON() as any).ID as number);

  await wordpressModels.wp_term_relationships.destroy({
    where: {
      term_taxonomy_id: {
        [Op.not]: termTaxonomyIds,
      },
    },
  });

  await wordpressModels.wp_term_relationships.destroy({
    where: {
      object_id: {
        [Op.not]: allPostIds,
      },
    },
  });
}

async function getTagIds() {
  const tagsResponse = await wordpressModels.wp_terms.findAll({
    include: [{
      model: wordpressModels.wp_term_taxonomy as any,
      where: {
        taxonomy: 'post_tag',
      },
    }],
  });
  return tagsResponse.map((r) => (r.toJSON() as any).term_id as number);
}

async function main() {
  try {
    await sequelize.authenticate();

    const postIds = await getPostIds();
    const tagIds = await getTagIds();

    await destroyEditLocks();
    await destroyPostMeta(postIds);
    await destroyPosts(postIds);
    await destroyTags(tagIds);
    await destroyRedundantTermRelationships();

    await sequelize.close();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

main();
