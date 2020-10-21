import { Sequelize } from 'sequelize/types';
import { initModels as initWordpressModels } from './models/init-models';

export default function setupRelations(sequelize: Sequelize) {
  const wordpressModels = initWordpressModels(sequelize);

  wordpressModels.wp_posts.hasMany(wordpressModels.wp_postmeta, {
    sourceKey: 'ID',
    foreignKey: 'post_id',
  });

  wordpressModels.wp_terms.hasOne(wordpressModels.wp_term_taxonomy, {
    foreignKey: 'term_id',
  });

  return wordpressModels;
}
