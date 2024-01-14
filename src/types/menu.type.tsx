interface IDetails {
  Cuisine: string;
  "Recipe Type": string;
  Difficulty: string;
  "Preparation Time": string;
  "Cooking Time": string;
  Serves: string;
}

export type IMenu = {
  details: IDetails[];
  discount: number;
  id: string;
  ingredients: [];
  introduction: string;
  name: string;
  price: number;
  recipe: [];
};
