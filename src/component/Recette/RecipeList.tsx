import { Link } from "react-router-dom";
import { useRecette } from "../../lib/contexts/recetteContext";
import { Recette } from "../../lib/models/recette";
import { useState } from "react";
import './RecipeList.css'
import SearchBar from "../SearchFilter/SearchBar";


const RecipeList = () => {
  const [termSearch, setTermSearch] = useState<string>("");

  const handleSearch = (searchTerm: string) => {
    console.log(`Searching for ${searchTerm}`);
    setTermSearch(searchTerm)
  }

  const { recettes } = useRecette();

  return (
    <div className="recipe-list-container">
      <h2 className="recipe-list-heading">Liste des recettes</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="recipe-list">
        {
          recettes.filter((recette: Recette) => {
            return recette.titre.toLowerCase().includes(termSearch.toLowerCase());
          }).map((recette: Recette) => {
            return (
              <Link to={"recette/" + recette.id} key={recette.id} className="recipe-card">
                <img className="recipe-image" src={recette.image} alt={recette.titre} />
                <h3 className="recipe-title">{recette.titre}</h3>
                <p className="recipe-description">{recette.description}</p>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

export default RecipeList;

