import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useRecette } from "../lib/contexts/recetteContext";
import { Recette } from "../lib/models/recette";
import '../component/Recette/DetailRecette.css'
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInputs {
  persons: number;
}

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
  const { id } = useParams<{ id: string }>();
  const { getRecette } = useRecette();
  const [recette, setRecette] = useState<Recette | undefined>();
  const [counter, setCounter] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const counterRef = useRef<number>(0);
  const [persons, setPersons] = useState(1)

  useEffect(() => {
    setRecette(getRecette(id || ""));
  }, [id, getRecette]);

  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  if (!recette) return null;

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setPersons(data.persons);
  };

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
              {ing.quantite * persons}
            </span>
            <span className="detail-recette-ingredient-unit">{parseInt(ing.unite,10) * persons}g</span>
          </span>
        ))}
      </p>
      <form style={{display: "flex", flexDirection: "row"}} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input style={{width: "20px", marginRight: "10px"}} {...register('persons', { required: true })} />
          {errors.persons && <span>Ce champ est requis</span>}
        </div>
        <button type="submit">Nombre de personnes</button>
      </form>
    </div>
  );
}

export default DetailRecette;
