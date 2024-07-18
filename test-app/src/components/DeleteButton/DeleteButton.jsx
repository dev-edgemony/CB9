import React from "react";

const DeleteButton = ({ id }) => {
  const deleteRecipe = async () => {
    try {
      const response = await fetch(`/api/salty/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Cannot delete!");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={deleteRecipe}>X</button>
    </div>
  );
};

export default DeleteButton;
