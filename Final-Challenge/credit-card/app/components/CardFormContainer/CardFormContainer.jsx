"use client";
import styles from "./CardFormContainer.module.scss";
import { useState, useContext } from "react";
import { cardContext } from "@/app/(context)/CardContext";

const CardFormContainer = () => {
  const {
    cardOwner,
    setCardOwner,
    cardNumber,
    setCardNumber,
    monthNumber,
    setMonthNumber,
    yearNumber,
    setYearNumber,
    cvcNumber,
    setCvcNumber,
  } = useContext(cardContext);

  const [isCardCompleted, setIsCardCompleted] = useState(false);

  const handleOwnerChange = (e) => {
    const { value } = e.target;
    setCardOwner(value);
  };

  const handleCardChange = (e) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(formattedValue);
  };

  const handleMonthChange = (e) => {
    const { value } = e.target;
    if (value >= 1 && value <= 12) {
      setMonthNumber(value);
    }
  };

  const handleYearChange = (e) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setYearNumber(formattedValue);
  };

  const handleCVCChange = (e) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCvcNumber(formattedValue);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" ||
      e.key === "Tab" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      return;
    }

    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleButton = (e) => {
    e.preventDefault();
    if (cardOwner && cardNumber && monthNumber && yearNumber && cvcNumber) {
      setIsCardCompleted(true);
    } else {
      setIsCardCompleted(false);
      alert("Please fill all fields");
    }
  };

  return (
    <div className={styles.mainDiv}>
      <form className={styles.form}>
        <div className={styles.labelDiv}>
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            placeholder="Jigen Daisuke"
            value={cardOwner}
            onChange={handleOwnerChange}
          />
        </div>
        <div className={styles.labelDiv}>
          <label>CARD NUMBER</label>
          <input
            type="text"
            maxLength="19"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChange={handleCardChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className={styles.labelDivDate}>
          <div className={styles.labelDivDates}>
            <label>EXP. DATE</label>
            <div className={styles.inputDate}>
              <input
                type="text"
                maxLength="2"
                placeholder="MM"
                value={monthNumber}
                onChange={handleMonthChange}
                onKeyDown={handleKeyDown}
              />
              <input
                type="text"
                maxLength="2"
                placeholder="YY"
                value={yearNumber}
                onChange={handleYearChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <div className={styles.labelDiv}>
            <label>CVC</label>
            <input
              type="text"
              maxLength="3"
              placeholder="000"
              value={cvcNumber}
              onChange={handleCVCChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <button className={styles.button} onClick={handleButton}>
          CONFIRM
        </button>
      </form>
      {isCardCompleted && <p className={styles.alert}>Operation completed!</p>}
    </div>
  );
};

export default CardFormContainer;
