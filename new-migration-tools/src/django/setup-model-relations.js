export default function setupModelRelations(djangoModels) {
  djangoModels.blog_blogpost.hasOne(djangoModels.vikalp_article, {
    foreignKey: 'blogpost_ptr_id',
  });

  djangoModels.blog_blogpost.belongsToMany(djangoModels.blog_blogcategory, {
    as: 'categories',
    through: djangoModels.vikalp_article_article_categories,
    foreignKey: 'article_id',
    otherKey: 'articlecategory_id',
  });

  djangoModels.blog_blogcategory.belongsToMany(djangoModels.blog_blogpost, {
    as: 'articles',
    through: djangoModels.vikalp_article_article_categories,
    foreignKey: 'articlecategory_id',
    otherKey: 'article_id',
  });

  djangoModels.blog_blogpost.belongsToMany(djangoModels.generic_keyword, {
    as: 'tags',
    through: djangoModels.generic_assignedkeyword,
    foreignKey: 'object_pk',
    otherKey: 'keyword_id',
  });

  djangoModels.generic_keyword.belongsToMany(djangoModels.blog_blogpost, {
    as: 'articles',
    through: djangoModels.generic_assignedkeyword,
    foreignKey: 'keyword_id',
    otherKey: 'object_pk',
  });

  djangoModels.blog_blogpost.hasMany(djangoModels.django_comments, {
    as: 'comments',
    sourceKey: 'id',
    foreignKey: 'object_pk',
  });
}
