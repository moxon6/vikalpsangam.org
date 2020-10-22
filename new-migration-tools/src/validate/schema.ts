import * as s from 'superstruct';
import { refinement } from 'superstruct'

import * as path from 'path';
import supportedExtensions from './supported-extensions';

const supportedExtensionsSet = new Set(supportedExtensions);

const category = s.object({
  id: s.number(),
  slug: s.string(),
  title: s.string(),
});

const tag = s.object({
  id: s.number(),
  slug: s.string(),
  title: s.string(),
});

const media = refinement(
  s.string(), 
  "media", 
  (value) => supportedExtensionsSet.has(path.extname(value))
);

const comment = s.object({
  id: s.number(),
  content_type_id: s.number(),
  object_pk: s.string(),
  site_id: s.number(),
  user_id: s.nullable(s.number()),
  user_name: s.string(),
  user_email: s.string(),
  user_url: s.string(),
  comment: s.string(),
  submit_date: s.string(),
  ip_address: s.string(),
  is_public: s.boolean(),
  is_removed: s.boolean(),
  generic_threadedcomment: s.object({
      by_author: s.boolean(),
      comment_ptr_id: s.number(),
      replied_to_id: s.nullable( s.number() ),
      rating_count: s.number(),
      rating_average: s.number(),
      rating_sum: s.number()
  })
})

const optionalString = s.nullable(s.string())

export default s.object({
  _meta_title: s.string(),
  allow_comments: s.boolean(),
  categories: s.array(category),
  comments: s.array(comment),
  comments_count: s.number(),
  content: s.string(),
  created: s.string(),
  description: s.string(),
  expiry_date: s.any(),
  featured_image: s.string(),
  gen_description: s.boolean(),
  id: s.number(),
  in_sitemap: s.boolean(),
  keywords_string: s.string(),
  media: s.array(media),
  publish_date: s.string(),
  rating_average: s.number(),
  rating_count: s.number(),
  rating_sum: s.number(),
  short_url: s.any(),
  site_id: s.number(),
  slug: s.string(),
  status: s.number(),
  tags: s.array(tag),
  title: s.string(),
  updated: s.string(),
  user_id: s.number(),
  vikalp_article: s.object({
    blogpost_ptr_id: s.number(),
    promoted: s.boolean(),
    article_author: s.string(),
    add_to_carousel: s.boolean(),
    longitude: optionalString,
    latitude: optionalString,
  }),
});
