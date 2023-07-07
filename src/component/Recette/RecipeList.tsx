import { Link } from "react-router-dom";
import { useRecette } from "../../lib/contexts/recetteContext";
import { Recette } from "../../lib/models/recette";

import "./RecipeList.css";


interface RecipeListProps {
  filterTags: string[];
  filterDuration: number | null;
  termSearch:string
}

const RecipeList: React.FC<RecipeListProps> = ({
  filterTags,
  filterDuration,
  termSearch
}) => {


  const { recettes } = useRecette();

  const filteredRecipes = recettes.filter((recette: Recette) => {


    const isIncludedByTitle = recette.titre
      .toLowerCase()
      .includes(termSearch.toLowerCase());

    const isIncludedByTags =
      filterTags.length === 0 || filterTags.some((tag) => recette.tags.includes(tag));

    const isMatchingDuration =
      filterDuration === null || recette.duree <= filterDuration;

    return isIncludedByTitle && isIncludedByTags && isMatchingDuration;
  });


  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-heading">Liste des recettes</h2>
      
      <div className="recipe-list">
      {
          filteredRecipes.map((recette: Recette) => {
            return (
              <Link to={"recette/" + recette.id} key={recette.id} className="recipe-card">
                <img className="recipe-image" src={recette.image} alt={recette.titre} />
                <h3 className="recipe-title">{recette.titre}</h3>
                <p className="recipe-duree">{recette.duree} min</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

export default RecipeList;
