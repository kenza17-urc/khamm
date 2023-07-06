import { useRecette } from "../../lib/contexts/recetteContext";
import { Recette } from "../../lib/models/recette";
import './RecipeList.css'

const RecipeList = () => {
  const { recettes } = useRecette();

  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-heading">Liste des recettes</h2>
      <div className="recipe-list">
        {recettes.map((recette: Recette) => (
          <div key={recette.id} className="recipe-card">
            <img className="recipe-image" src={recette.image} alt={recette.titre} />
            <h3 className="recipe-title">{recette.titre}</h3>
            <p className="recipe-description">{recette.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;

