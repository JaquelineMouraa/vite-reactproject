import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>side bar</aside>
        <main>Post</main>
      </div>
    </>
  );
}