import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import { PASS_KEY } from "../constants.js";
import Carosello from "./components/Carosello/Carosello.jsx";

function App() {
  const [upcomingList, setUpcomingList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${PASS_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUpcomingList(data.results.filter((_, index) => index < 10));
      });

    fetch("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${PASS_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPopularList(data.results.filter((_, index) => index < 10));
      });

    fetch("https://api.themoviedb.org/3/movie/top_rated", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${PASS_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTopRatedList(data.results.filter((_, index) => index < 10));
      });
  }, []);

  return (
    <main className={styles.mainBox}>
      <NavBar />
      <Hero
        imgUrl={upcomingList[0]?.backdrop_path}
        title={upcomingList[0]?.original_title}
      />
      <section className={styles.caroselloSection}>
        <Carosello list={upcomingList} />
      </section>
      <section className={styles.caroselloSection}>
        <Carosello list={popularList} />
      </section>
      <section className={styles.caroselloSection}>
        <Carosello list={topRatedList} />
      </section>
    </main>
  );
}

export default App;
