"use client";

import type { Meal } from "../lib/types";

export default function RecipeModal({
  meal,
  onClose,
}: {
  meal: Meal;
  onClose: () => void;
}) {
  const ingredients = Array.from({ length: 20 }, (_, i) => {
    const ingredient = meal[`strIngredient${i + 1}`];
    const measure = meal[`strMeasure${i + 1}`];
    return ingredient?.trim() ? { ingredient, measure } : null;
  }).filter(Boolean);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2420]/50 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] w-full max-w-2xl overflow-y-auto border-2 border-[#2B2420]/15 bg-[#FDFBF6]"
      >
        <div className="relative">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="h-64 w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 border-2 border-[#FDFBF6] bg-[#2B2420]/70 px-4 py-1.5 font-[family-name:var(--font-display)] text-xs uppercase tracking-wider text-[#FDFBF6] backdrop-blur-sm"
          >
            Fechar
          </button>
        </div>

        <div className="p-8 md:p-10">
          <p className="font-[family-name:var(--font-display)] text-xs italic tracking-[0.2em] text-[#7A8B69]">
            {meal.strCategory.toUpperCase()} · {meal.strArea.toUpperCase()}
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight">
            {meal.strMeal}
          </h2>

          <div className="mt-6 h-px w-16 bg-[#2B2420]/20" />

          <h3 className="mt-8 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-[#2B2420]/60">
            Ingredientes
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {ingredients.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-[#2B2420]/85"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#C1502E]" />
                <span>
                  <strong className="font-semibold">{item!.measure}</strong>{" "}
                  {item!.ingredient}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.15em] text-[#2B2420]/60">
            Modo de preparo
          </h3>
          <p className="mt-4 whitespace-pre-line font-[family-name:var(--font-body)] text-[15px] leading-relaxed text-[#2B2420]/85">
            {meal.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
}
