import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import { API_KEY } from "../constants";
import Carousel from "./components/Carousel/Carousel";
import Hero from "./components/Hero/Hero";

function App() {
  const [onTheAir, setOnTheAir] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/on_the_air", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOnTheAir(data.results.filter((_, index) => index < 7));
      });
    console.log(onTheAir);

    fetch("https://api.themoviedb.org/3/tv/popular", {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.results.filter((_, index) => index < 7));
      });
    console.log(popular);
  }, []);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Hero
          imageUrl={popular[0]?.backdrop_path}
          title={popular[0]?.original_name}
        />
      </div>
      <div>
        <h2 className={styles.TitleOne}>On The Air</h2>
        <Carousel list={onTheAir} />
      </div>
      <div>
        <h2 className={styles.TitleTwo}>Popular</h2>
        <Carousel list={popular} />
      </div>
    </>
  );
}

export default App;
