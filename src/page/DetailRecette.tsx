import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecette } from "../lib/contexts/recetteContext";
import { Recette } from "../lib/models/recette";
import '../component/Recette/DetailRecette.css'

function minuteFormat(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60; 

  let result = "";
  if (hours > 0) {
    result += hours + " heure" + (hours > 1 ? "s" : ""); 
  }
  if (remainingMinutes > 0) {
    result +=
      " " + remainingMinutes + " minute" + (remainingMinutes > 1 ? "s" : ""); 
  }

  return result.trim(); 
}
function DetailRecette() {
  const { id } = useParams();
  const { getRecette } = useRecette();
  const [recette, setRecette] = useState<Recette>();
  useEffect(() => {
    setRecette(getRecette(id || ""));
  }, []);
  if (!recette) return null;
  return (
    <div className="detail-recette-container">
      <img
        className="detail-recette-image"
        src={recette.image}
        alt={recette.titre}
      />
      <h2 className="detail-recette-title">{recette.titre}</h2>
      <p className="detail-recette-description">{recette.description}</p>
      <b className="detail-recette-duration">{minuteFormat(recette.duree)}</b>
      <p className="detail-recette-categories">
        <b>Categories:</b> {recette.tags.join(", ")}
      </p>
      <p className="detail-recette-ingredients">
        <b>Ingredients:</b>{" "}
        {recette.ingredients.map((ing, i) => (
          <span key={i} className="detail-recette-ingredient-item">
            <span className="detail-recette-ingredient-name">{ing.nom}</span>
            <span className="detail-recette-ingredient-quantity">
              {ing.quantite}
            </span>
            <span className="detail-recette-ingredient-unit">{ing.unite}</span>
          </span>
        ))}
      </p>
    </div>
  );
  
}

export default DetailRecette;
