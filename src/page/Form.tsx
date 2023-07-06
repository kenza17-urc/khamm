
import { useState } from "react";
import FormRecette from "../component/Recette/FormRecette";

interface Recipe {
  name: string;
  photo: string;
  time: number;
}

const Form = () => {
  const [recettes, setRecettes] = useState<Recipe[]>([]);

  const deleteRecipe = (index: number) => {
    const newRecettes = [...recettes];
    newRecettes.splice(index, 1);
    setRecettes(newRecettes);
  };

  const addRecipe = (recipe: Recipe) => {
    const newRecettes = [...recettes, recipe];
    setRecettes(newRecettes);
  };

  return (
    <div>
      <FormRecette onSubmit={addRecipe} />
    </div>
  );
};

export default Form;
