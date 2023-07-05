import { createContext, useState, useContext } from "react";
import { Recette } from "../models/recette";

const RecetteContext = createContext<{
  addRecette: (recette: Omit<Recette, "id">) => void;
  removeRecette: (id: string) => void;
  getRecette: (id: string) => Recette | undefined;
}>({
  addRecette: () => {
    return;
  },
  removeRecette: () => {
    return;
  },
  getRecette: () => undefined,
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
  const [recettes, setRecettes] = useState<Recette[]>([]);

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
      }}
    >
      {children}
    </RecetteContext.Provider>
  );
};

export const useRecette = () => {
  return useContext(RecetteContext);
};
