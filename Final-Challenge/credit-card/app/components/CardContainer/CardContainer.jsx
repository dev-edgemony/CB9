import styles from "./CardContainer.module.scss";
import { useContext } from "react";
import { cardContext } from "@/app/(context)/CardContext";

const CardContainer = () => {
  const { cardOwner, cardNumber, monthNumber, yearNumber, cvcNumber } =
    useContext(cardContext);
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardFront}>
        <img className={styles.cardLogo} src="/logo.svg" alt="logo" />
        <div className={styles.cardInfo}>
          <p className={styles.infoNumber}>{cardNumber}</p>
          <div className={styles.infonameDate}>
            <p className={styles.info}>{cardOwner}</p>
            <p className={styles.info}>
              {monthNumber}/{yearNumber}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.cardBack}>
        <div className={styles.blackBanner}></div>
        <img className={styles.cardLogoBack} src="/logo.svg" alt="logo" />
        <p className={styles.cvc}>{cvcNumber}</p>
      </div>
    </div>
  );
};

export default CardContainer;
