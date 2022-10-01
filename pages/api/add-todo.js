import { notion } from "../../api/notion";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const response = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: process.env.NOTION_TEST_DB,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: req.body.name,
              },
            },
          ],
        },
      },
    });
    console.log(response);
    res.status(200).json({ response });
  }
}
