import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TodoList from "../components/TodoList/TodoList";

export default function Home() {
  return <TodoList />;
}
