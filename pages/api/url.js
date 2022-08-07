import getMetaData from "../../utils/getMetaData";
import newrelic from "newrelic"
export default async function handler(req, res) {
    const { url } = req.query;
    try {
        const metaData = await getMetaData(url);
        res.status(200).json(metaData)

    } catch (error) {
        res.json({error: error.message})
    }
}
