<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';
import FormRecette from '../component/Recette/FormRecette';

interface Recipe {
    name: string;
    photo: string;
    time: number;
}

const Home = () => {

    const [recettes, setRecettes] = useState<Recipe[]>([])

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

export default Home;
=======

import RecipeList from "../component/Recette/RecipeList";

const Home = () => {
  return (
    <div>
      <h1>Recette</h1>
      <RecipeList />
    </div>
  );
};

export default Home;


>>>>>>> 4ad48de19979f1d0cc3c91ff481e21da0c73bc77
