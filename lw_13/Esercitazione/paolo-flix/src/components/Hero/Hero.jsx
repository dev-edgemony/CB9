import styles from "./Hero.module.scss";

const Hero = ({ imgUrl, title = "placeholder" }) => {
  return (
    <div className={styles.Hero}>
      <h2>{title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt="hero-img" />
      <button className={styles.heroBtn}>More info</button>
    </div>
  );
};

export default Hero;
