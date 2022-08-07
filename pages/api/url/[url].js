const linkPreviewGenerator = require("")

// const url = "https://github.com/sindresorhus/got";

export default function handler(req, res) {
    // const { url } = req.query;
    const previewData = await linkPreviewGenerator("https://github.com/sindresorhus/got");
    console.log(previewData);

    res.status(200).json({ name: 'John Doe and' })
}

