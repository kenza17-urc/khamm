export interface Recette {
  id: string;
  titre: string;
  description: string;
  image: string;
  duree: string;
  tags: string[];
  ingredients: Ingredient[];
}

export interface Ingredient {
  nom: string;
  quantite: number;
  unite: string;
}
