import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";

function Card({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.ingredients}</p>
      <p>{data.steps}</p>
      {/* <DeleteButton id={data._id} /> */}
    </div>
  );
}

export default Card;
