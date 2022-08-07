import got from 'got'
import { JSDOM } from 'jsdom';

export default async function getMetaData(url) {
  const { body } = await got(url);
  const doc = new JSDOM(body).window.document;
  let title = await getTitle(doc);
  let description = await getDescription(doc);
  let img = await getImg(doc);
  return { title, description, img, url };
}

function getTitle(doc) {
  let title = doc.querySelector("meta[property='og:title']");
  if (title != null && title.content.length > 0) return title.content;
  title = doc.querySelector("meta[property='twitter:title']").text();
  if (title != null && title.content.length > 0) return title.content;
  title = doc.title;
  if (title != null && title.content.length > 0) return title;
  title = doc.querySelector("h1")?.innerText;
  if (title != null && title.content.length > 0) return title;
  return null;
}
function getDescription(doc) {
  let description = doc.querySelector("meta[property='og:description']");
  if (description != null && description.content.length > 0) return description.content;
  description = doc.querySelector("meta[property='twitter:description']").text();
  if (description != null && description.content.length > 0) return description.content;
  description = doc.querySelector("meta[name='decription']");
  if (description != null && description.content.length > 0) return description.content;
  return null;
}

function getImg(doc) {
  let imgSrc = doc.querySelector("meta[property='og:image']");
  if (imgSrc !== null && imgSrc.content.length > 0) return imgSrc.content;
  imgSrc = doc.querySelector("meta[property='twitter:image']");
  if (imgSrc !== null && imgSrc.content.length > 0) return imgSrc.content;
  return null;
}
