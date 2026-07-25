export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  [key: `strIngredient${number}`]: string | undefined;
  [key: `strMeasure${number}`]: string | undefined;
};

export type MealSummary = Pick
  Meal,
  "idMeal" | "strMeal" | "strCategory" | "strMealThumb"
>;