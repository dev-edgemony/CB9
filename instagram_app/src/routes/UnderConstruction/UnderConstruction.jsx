import styles from "./UnderConstruction.module.scss";

const UnderConstruction = () => {
  return (
    <>
      <div className={styles.underconstruction}>
        <h1>Coming Soon</h1>
        <h3>You will be able to add more videos and photo...</h3>
        <img
          src="../../src/assets/undraw_under_construction_-46-pa.svg"
          alt="under construction"
        />
      </div>
    </>
  );
};

export default UnderConstruction;
