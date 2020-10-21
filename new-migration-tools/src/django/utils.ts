import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as R from 'ramda';

const sortKeys = R.pipe(
  R.toPairs,
  R.sortBy(R.prop(0 as any)) as any,
  R.fromPairs
);

export const saveJSON = (path: string, obj: object[]) => {
  fs.writeFileSync(path, JSON.stringify(obj.map(sortKeys), null, 2));
};

const extractLinks = ($: cheerio.Root) => $('a')
  .get()
  .map((x) => $(x).attr('href'))
  .filter((x) => !!x)
  .filter((x) => x.startsWith('/static/media/uploads/'));

const extractImages = ($: cheerio.Root) => $('img')
  .get()
  .map((x) => $(x).attr('src'))
  .filter((x) => !!x)
  .filter((x) => x.startsWith('/static/media/uploads/'));

export const extractMedia = (content: string) => {
  const $ = cheerio.load(content);
  return [
    ...extractImages($),
    ...extractLinks($),
  ].filter((x) => x);
};
