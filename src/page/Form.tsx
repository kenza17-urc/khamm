import React from "react";
import { useRecette } from "../lib/contexts/recetteContext";
import FormRecette from "../component/Recette/FormRecette";

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
      description: data.description,
      tags: data.tags,
      ingredients: [],
    });
    console.log(recettes)
  };

  return (
    <div>
      <FormRecette  />
    </div>
  );
};

export default Form;
