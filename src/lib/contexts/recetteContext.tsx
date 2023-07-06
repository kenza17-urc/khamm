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
      id: "1",
      titre: "Pâtes crémeuses à l'ail et au parmesan",
      description: "Savourez ce plat de pâtes crémeux et riche dans une sauce au parmesan infusée à l'ail. Un plat réconfortant préféré !",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      duree: 10,
      tags: ["pates", "ail"],
      ingredients: [
        {
          nom: "nom",
          quantite: 10,
          unite: "unite",
        },
      ],
    },
    {
      id: "3",
      titre: "Pizza margherita classique",
      description: "Une pizza Margherita traditionnelle garnie de tomates fraîches, de mozzarella et de feuilles de basilic. Simple mais délicieuse !",
      image:
        "https://i.pinimg.com/originals/e7/98/69/e7986916f76d38a1ef179ea24ba28797.jpg",
      duree: 10,
      tags: ["pizza", "traditionnelle"],
      ingredients: [
        {
          nom: "nom",
          quantite: 10,
          unite: "unite",
        },
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
        {
          nom: "nom",
          quantite: 10,
          unite: "unite",
        },
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
        {
          nom: "nom",
          quantite: 10,
          unite: "unite",
        },
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
        {
          nom: "nom",
          quantite: 10,
          unite: "unite",
        },
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
