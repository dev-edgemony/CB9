import styles from "./Hero.module.scss";

const Hero = ({ imageUrl, title = "placeholder" }) => {
  return (
    <div className={styles.heroMain}>
      <h2 className={styles.heroTitle}>{title}</h2>
      <img
        className={styles.heroImg}
        src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
        alt="hero-img"
      />
      <button className={styles.heroButton}>Discover More</button>
    </div>
  );
};

export default Hero;
