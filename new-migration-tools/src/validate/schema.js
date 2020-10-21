import Joi from 'joi';

Joi.object().keys({
  _meta_title: Joi.binary(),
  allow_comments: Joi.boolean(),
  categories: Joi.array().items(Joi.object().keys({ id: Joi.number().integer(), slug: Joi.string(), title: Joi.string() }), Joi.object().keys({ id: Joi.number().integer(), slug: Joi.string(), title: Joi.string() })),
  comments: Joi.array(),
  comments_count: Joi.number().integer(),
  content: Joi.string(),
  created: Joi.string(),
  description: Joi.string(),
  expiry_date: Joi.any(),
  featured_image: Joi.string(),
  gen_description: Joi.boolean(),
  id: Joi.number().integer(),
  in_sitemap: Joi.boolean(),
  keywords_string: Joi.string(),
  media: Joi.array().items(Joi.string()),
  publish_date: Joi.string(),
  rating_average: Joi.number().integer(),
  rating_count: Joi.number().integer(),
  rating_sum: Joi.number().integer(),
  short_url: Joi.any(),
  site_id: Joi.number().integer(),
  slug: Joi.string(),
  status: Joi.number().integer(),
  tags: Joi.array().items(Joi.object().keys({ id: Joi.number().integer(), slug: Joi.string(), title: Joi.string() }), Joi.object().keys({ id: Joi.number().integer(), slug: Joi.string(), title: Joi.string() }), Joi.object().keys({ id: Joi.number().integer(), slug: Joi.string(), title: Joi.string() }), Joi.object().keys({ id: Joi.number().integer(), slug: Joi.string(), title: Joi.string() }), Joi.object().keys({ id: Joi.number().integer(), slug: Joi.string(), title: Joi.string() })),
  title: Joi.string(),
  updated: Joi.string(),
  user_id: Joi.number().integer(),
  vikalp_article: Joi.object().keys({
    blogpost_ptr_id: Joi.number().integer(), promoted: Joi.boolean(), article_author: Joi.string(), add_to_carousel: Joi.boolean(), longitude: Joi.string(), latitude: Joi.string(),
  }),
});
