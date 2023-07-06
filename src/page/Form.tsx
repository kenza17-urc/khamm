import React from "react";
import { useRecette } from "../lib/contexts/recetteContext";
import FormRecette from "../component/Recette/FormRecette";

interface Ingredients {
  nom: string;
  quantite: number;
  unite: string;
}

interface Recipe {
  titre: string;
  image: string;
  duree: number;
  description: string;
  tags: string[];
  ingredients: Ingredients[];
}

interface FormInputs {
  titre: string;
  image: string;
  duree: number;
  description: string;
  tags: string[]
}

const Form = () => {
  const { recettes, addRecette } = useRecette();

  const addRecipe = (data: FormInputs) => {
    addRecette({
      titre: data.titre,
      image: data.image,
      duree: data.duree,
      description: "",
      tags: [],
      ingredients: [],
    });
    console.log(recettes)
  };

  return (
    <div>
      <FormRecette onSubmit={addRecipe} />
    </div>
  );
};

export default Form;
