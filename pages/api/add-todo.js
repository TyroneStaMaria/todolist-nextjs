import { notion } from "../../api/notion";

/**
 * Here, we make use of next.js's serverless functions. These routes can be accessed using /api/<filename> in our frontend codebase.
 * Note: These API routes can't be accessed in getStaticProps or getServerSideProps.
 * Learn more about serverless functions here: https://nextjs.org/docs/api-routes/introduction
 */
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
