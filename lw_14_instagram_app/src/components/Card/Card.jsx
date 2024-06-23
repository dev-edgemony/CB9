import styles from "./Card.module.scss";

const Card = ({ data, index }) => {
  const { urls, alt_description, id } = data;

  return (
    <>
      <div className={styles.cardDiv} id={id}>
        <img
          className={styles.card}
          id={id}
          src={urls.regular}
          alt={alt_description}
        />
      </div>
    </>
  );
};

export default Card;
