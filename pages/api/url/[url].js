// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const getMetaData = require("./getMetaData")
const getMetaData = import("../../../utils/getMetaData")
 
export default function handler(req, res) {

    const { url, name } = req.query;
    // getMetaData("https://github.com/puru-khedre/link-preview-maker").then(data => console.log(data));

    res.status(200).json({ name: 'John Doe and' })
}

