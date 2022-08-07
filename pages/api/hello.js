// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
const got = require("got");
const { JSDOM } = require("jsdom");


export default function handler(req, res) {

  res.status(200).json({ name: 'John Doe' })
}
