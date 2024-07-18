import React from "react";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import Modify from "../Modify/Modify";

function CardWrapper() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/salty")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <div>
      {data.map((data, index) => (
        <li key={index}>
          <Card data={data} key={index} />
          <DeleteButton id={data._id} />
          <Modify />
        </li>
      ))}
    </div>
  );
}

export default CardWrapper;
