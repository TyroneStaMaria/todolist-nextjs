import { notion } from "../../api/notion";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const response = await notion.pages.update({
      page_id: req.body.id,
      archived: true,
    });
    console.log(response);
    res.status(200).json({ response });
  }
}
