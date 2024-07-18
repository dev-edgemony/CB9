import React from "react";
import { useState } from "react";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const recipeData = {
      title: title,
      ingredients: ingredients,
      steps: steps,
    };

    try {
      const response = await fetch("/api/salty", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });
      if (!response.ok) {
        throw new Error("No Post was performed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={ingredients}
          type="text"
          placeholder="ingredients"
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          value={steps}
          type="text"
          placeholder="steps"
          onChange={(e) => setSteps(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddRecipe;
