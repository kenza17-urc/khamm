import { createContext, useState, useContext } from "react";
import { Recette } from "../models/recette";

const RecetteContext = createContext<{
  addRecette: (recette: Omit<Recette, "id">) => void;
  removeRecette: (id: string) => void;
  getRecette: (id: string) => Recette | undefined;
  recettes: Recette[];
}>({
  addRecette: () => {
    return;
  },
  removeRecette: () => {
    return;
  },
  getRecette: () => undefined,
  recettes: [],
});

const randomId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const RecetteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [recettes, setRecettes] = useState<Recette[]>([
    {
      id: "10000",
      titre: "titre",
      description: "description",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      duree: 10,
      tags: ["tag", "tag"],
      ingredients: [
        {
          nom: "nom",
          quantite: 10,
          unite: "unite",
        },
      ],
    },
  ]);

  const addRecette = (recette: Omit<Recette, "id">) => {
    setRecettes([
      ...recettes,
      {
        ...recette,
        id: randomId(),
      },
    ]);
  };

  const removeRecette = (id: string) => {
    setRecettes(recettes.filter((recette) => recette.id !== id));
  };

  const getRecette = (id: string) => {
    return recettes.find((recette) => recette.id === id);
  };
  return (
    <RecetteContext.Provider
      value={{
        addRecette,
        removeRecette,
        getRecette,
        recettes,
      }}
    >
      {children}
    </RecetteContext.Provider>
  );
};

export const useRecette = () => {
  return useContext(RecetteContext);
};
