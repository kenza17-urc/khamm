import { createContext, useState, useContext, useEffect } from "react";
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

export const randomId = () => {
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
  const [recettes, setRecettes] = useState<Recette[]>([]);

  const addRecette = (recette: Omit<Recette, "id">) => {
    const newRecettes = [...recettes, { ...recette, id: randomId() }];
    setRecettes(newRecettes);
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
