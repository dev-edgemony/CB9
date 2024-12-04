"use client";
import styles from "./page.module.css";
import CardFormContainer from "./components/cardFormContainer/CardFormContainer";
import CardContainer from "./components/cardContainer/CardContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <CardContainer />
      <CardFormContainer />
    </main>
  );
}
