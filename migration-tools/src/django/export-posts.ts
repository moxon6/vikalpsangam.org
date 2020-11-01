import { Sequelize } from 'sequelize';
import setupModels from './setup-models';
import { saveJSON } from './utils';
import formatPost from './format-post';

async function main() {
  const sequelize = new Sequelize('postgres://postgres:postgres@postgres:5432/main'); // Example for postgres

  const djangoModels = setupModels(sequelize);

  try {
    await sequelize.authenticate();

    const django_posts = await djangoModels.blog_blogpost.findAll({
      include: [{
        model: djangoModels.vikalp_article,
      }, {
        as: 'categories',
        model: djangoModels.blog_blogcategory,
      }, {
        as: 'tags',
        model: djangoModels.generic_keyword,
      }, {
        model: djangoModels.django_comments,
        as: 'comments',
        on: Sequelize.where(
          Sequelize.cast(Sequelize.col('comments.object_pk'), 'integer'),
          Sequelize.col('blog_blogpost.id'),
        ),
        include: {
          model: djangoModels.generic_threadedcomment
        }
      }],
    });

    const formatted = django_posts.map((p: any) => p.toJSON()).map(formatPost);
    saveJSON('posts.json', formatted);

    await sequelize.close();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

main();
