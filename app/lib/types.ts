export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
} & Record<string, string | undefined>;

export type MealSummary = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
};
