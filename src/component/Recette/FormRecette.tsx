import { useState } from "react";
import { useForm } from "react-hook-form";
import { randomId, useRecette } from "../../lib/contexts/recetteContext";
import { Recette, Ingredient } from "../../lib/models/recette";

type RecetteForm = Omit<Omit<Recette, "id">, "ingredients"> & {
  tags: string;
};
const FormRecette = () => {
  const { register, handleSubmit, reset } = useForm<RecetteForm>();
  const { addRecette } = useRecette();
  const [ingredients, setIngredients] = useState<Partial<Ingredient>[]>([]);

  const submitForm = (data: RecetteForm) => {
    const tags = (data.tags ?? "")
      .replace(/( )*,( )*/g, ",")
      .split(",")
      .map((tag) => tag.trim());
    const newData: Omit<Recette, "id"> = {
      ...data,
      tags,
      ingredients: ingredients as Ingredient[],
    };

    addRecette({
      ...newData,
    });

    reset();

    setIngredients([]);
  };

  const addIngredient = () => {
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: randomId() },
    ]);
  };

  const updateIngredient = (updatedIngredient: Ingredient) => {
    setIngredients((prevIngredients) =>
      prevIngredients.map((ingredient) =>
        ingredient.id === updatedIngredient.id ? updatedIngredient : ingredient
      )
    );
  };

  const deleteIngredient = (ingredientId: string) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          style={{ marginRight: "10px" }}
          type="text"
          {...register("titre", { required: true })}
          placeholder="titre"
        />
        <input
          style={{ marginRight: "10px" }}
          type="text"
          {...register("description", { required: true })}
          placeholder="description"
        />
        <input
          style={{ marginRight: "10px" }}
          type="text"
          {...register("image", { required: true })}
          placeholder="image"
        />
        <input
          style={{ marginRight: "10px" }}
          type="number"
          {...register("duree", { required: true })}
          placeholder="durée"
        />
        <input
          style={{ marginRight: "10px" }}
          type="text"
          {...register("tags", { required: true })}
          placeholder="tags"
        />
        <button type="button" onClick={addIngredient}>
          +
        </button>
        <button>Ajouter</button>
      </form>
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          ingredient={ingredient as Ingredient}
          onUpdate={updateIngredient}
          onDelete={deleteIngredient}
        />
      ))}
    </>
  );
};

interface IngredientProps {
  ingredient: Ingredient;
  onUpdate: (updatedIngredient: Ingredient) => void;
  onDelete: (ingredientId: string) => void;
}

const Ingredient = ({ ingredient, onUpdate, onDelete }: IngredientProps) => {
  const { register, handleSubmit } = useForm<Ingredient>();
  const [finished, setFinished] = useState(false);

  const submitIngredient = (data: Ingredient) => {
    onUpdate({ ...data, id: ingredient.id });
    setFinished(true);
  };

  return (
    <form
      onSubmit={handleSubmit(submitIngredient)}
      style={{
        margin: "25px",
      }}
    >
      <input
        style={{ marginRight: "10px" }}
        type="text"
        {...register("nom", { required: true })}
        placeholder="nom"
        readOnly={finished}
      />
      <input
        style={{ marginRight: "10px" }}
        type="number"
        {...register("quantite", { required: true })}
        placeholder="quantité"
        readOnly={finished}
      />
      <input
        style={{ marginRight: "10px" }}
        type="text"
        {...register("unite", { required: true })}
        placeholder="unite"
        readOnly={finished}
      />
      {!finished && <button type="submit">Ajouter</button>}
      <button
        onClick={() => {
          onDelete(ingredient.id);
        }}
      >
        Supprimer
      </button>
    </form>
  );
};

export default FormRecette;
