
import { useRecette } from "../../lib/contexts/recetteContext"; 
import { Recette } from "../../lib/models/recette";

const RecipeList = () => {
  const { recettes } = useRecette();

  return (
    <div>
      <h2>Liste recette</h2>
      {recettes.map((recette: Recette) => (
        <div key={recette.id}>
          <img src={recette.image} alt={recette.titre} />
          <h3>{recette.titre}</h3>
          <p>{recette.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
