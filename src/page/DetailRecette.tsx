import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecette } from "../lib/contexts/recetteContext";
import { Recette } from "../lib/models/recette";

function minuteFormat(minutes: number) {
  const hours = Math.floor(minutes / 60); // Get the whole number of hours
  const remainingMinutes = minutes % 60; // Get the remaining minutes

  let result = "";
  if (hours > 0) {
    result += hours + " heure" + (hours > 1 ? "s" : ""); // Include hours in the string
  }
  if (remainingMinutes > 0) {
    result +=
      " " + remainingMinutes + " minute" + (remainingMinutes > 1 ? "s" : ""); // Include remaining minutes in the string
  }

  return result.trim(); // Trim any leading/trailing whitespace
}
function DetailRecette() {
  const { id } = useParams();
  const { getRecette } = useRecette();
  const [recette, setRecette] = useState<Recette>();
  useEffect(() => {
    setRecette(getRecette(id || ""));
  }, []);
  if (!recette) {
    return null;
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <img
        src={recette.image}
        alt={recette.titre}
        style={{ width: "100%", objectFit: "cover", height: "400px" }}
      />
      <h2>{recette.titre}</h2>
      <p>{recette.description}</p>
      <b>{minuteFormat(recette.duree)}</b>
      <p>
        <b>Categories :</b> {recette.tags.join(", ")}
      </p>
      <p>
        <b>Ingredients :</b>{" "}
        {recette.ingredients
          .map((ing) => `${ing.nom} ${ing.quantite} ${ing.unite}`)
          .join(", ")}
      </p>
    </div>
  );
}

export default DetailRecette;
