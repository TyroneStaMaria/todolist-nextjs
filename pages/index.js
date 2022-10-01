import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TodoList from "../components/TodoList/TodoList";
import { notion } from "../api/notion";

export default function Home({ todoItems }) {
  return <TodoList todoItems={todoItems} />;
}

export async function getServerSideProps(context) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_TEST_DB,
  });

  const todoItems = response.results.map(({ properties, id: pageId }) => {
    const { Id, Name } = properties;
    return {
      id: pageId,
      name: Name.title[0].plain_text,
    };
  });
  return {
    props: {
      todoItems,
    },
  };
}
