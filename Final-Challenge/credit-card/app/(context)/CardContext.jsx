"use client";
import { createContext, useState } from "react";

const cardContext = createContext();

const CardProvider = ({ children }) => {
  const [cardOwner, setCardOwner] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [monthNumber, setMonthNumber] = useState("");
  const [yearNumber, setYearNumber] = useState("");
  const [cvcNumber, setCvcNumber] = useState("");

  return (
    <cardContext.Provider
      value={{
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
      }}
    >
      {children}
    </cardContext.Provider>
  );
};

export { cardContext, CardProvider };
