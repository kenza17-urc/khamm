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
  const [recettes, setRecettes] = useState<Recette[]>([
    {
      id: "3",
      titre: "Pizza margherita classique",
      description: "Une pizza Margherita traditionnelle garnie de tomates fraîches, de mozzarella et de feuilles de basilic. Simple mais délicieuse !",
      image: "https://i.pinimg.com/originals/e7/98/69/e7986916f76d38a1ef179ea24ba28797.jpg",
      duree: 10,
      tags: ["pizza", "traditionnelle"],
      ingredients: [
      
      ],
    },
    {
      id: "4",
      titre: "Fajitas au bœuf grésillant",
      description: "Savourez des fajitas au bœuf chaud grésillant avec des poivrons et des oignons colorés. Servez avec des tortillas chaudes et vos garnitures préférées.",
      image:
        "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/08/487737-1-eng-GB_apple-crisps-768x902.jpg",
      duree: 10,
      tags: ["boeuf", "fajitas"],
      ingredients: [
       
      ],
    },
    {
      id: "5",
      titre: "Barres de gâteau au fromage au citron et aux bleuets",
      description: "Des barres de gâteau au fromage acidulées au citron garnies d'une généreuse quantité de myrtilles juteuses. La gâterie parfaite pour l'été !",
      image:
        "https://i.pinimg.com/736x/88/72/eb/8872ebe6074bb3c8a4105034d0bd9b64.jpg",
      duree: 10,
      tags: ["gateau", "citron"],
      ingredients: [
       
      ],
    },
    {
      id: "6",
      titre: "Salade grecque fraîche et piquante",
      description: "Une salade grecque rafraîchissante regorgeant de saveurs de légumes croquants, de fromage feta acidulé et d'une vinaigrette maison piquante",
      image:
        "https://i.pinimg.com/originals/1f/d1/47/1fd14704514fbce51a0dc8e074e70ac9.jpg",
      duree: 10,
      tags: ["salade", "piquante"],
      ingredients: [
        
      ],
    },
    {
      id: "7",
      titre: "Curry rouge thaï épicé",
      description: "Un curry rouge thaï savoureux et aromatique avec un coup de piquant. Parfait pour les amateurs d'épices !",
      image:
        "https://i.pinimg.com/736x/cf/37/a1/cf37a164700ddac6f84c545bacc2f121.jpg",
      duree: 10,
      tags: ["CURRY", "thai"],
      ingredients: [


      ],
    },
  ]);

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
