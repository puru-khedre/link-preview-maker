// const getMetaData = require("./getMetaData")
const getMetaData=import("./getMetaData")
// import getMetaData from './getMetaData'
getMetaData("https://github.com/puru-khedre/link-preview-maker").then(data=>console.log(data));