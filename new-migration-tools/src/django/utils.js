import cheerio from 'cheerio';
import fs from 'fs';
import * as R from 'ramda';

const sortKeys = R.pipe(
  R.toPairs(),
  R.sortBy(R.prop(0)),
  R.fromPairs(),
);

export const saveJSON = (path, obj) => {
  fs.writeFileSync(path, JSON.stringify(obj.map(sortKeys), null, 2));
};

const extractLinks = ($) => $('a')
  .get()
  .map((x) => $(x).attr('href'))
  .filter((x) => !!x && x.startsWith('/static/media/uploads/'));

const extractImages = ($) => $('img')
  .get()
  .map((x) => $(x).attr('src'));

export const extractMedia = (content) => {
  const $ = cheerio.load(content);
  return [
    ...extractImages($),
    ...extractLinks($),
  ].filter((x) => x);
};
