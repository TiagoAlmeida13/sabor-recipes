"use client";

import { useState } from "react";
import type { Meal, MealSummary } from "../lib/types";
import RecipeModal from "./RecipeModal";

type Status = "idle" | "loading" | "success" | "empty" | "error";

const CATEGORY_COLORS: Record<string, string> = {
  default: "#C1502E",
  Seafood: "#3D6B8C",
  Vegetarian: "#7A8B69",
  Dessert: "#B0578D",
  Chicken: "#C1502E",
  Beef: "#8C3D3D",
  Pasta: "#C89B3C",
};

function categoryColor(category: string) {
  return CATEGORY_COLORS[category] ?? CATEGORY_COLORS.default;
}

export default function RecipeSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<MealSummary[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<Meal | null>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`,
      );
      const data = await res.json();

      if (!data.meals) {
        setResults([]);
        setStatus("empty");
        return;
      }

      setResults(data.meals);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  async function openRecipe(id: string) {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      const data = await res.json();
      setSelected(data.meals[0]);
    } catch {
      // silenciosamente ignora
    }
  }

  return (
    <div>
      {/* Cartão de busca estilo selo */}
      <div className="relative mx-auto max-w-2xl border-2 border-[#2B2420]/15 bg-[#FDFBF6] p-8">
        <span className="absolute -top-3 left-6 bg-[#F5EFE3] px-3 font-[family-name:var(--font-display)] text-[11px] uppercase tracking-[0.15em] text-[#2B2420]/50">
          Buscar receita
        </span>

        <form
          onSubmit={handleSearch}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="chicken, pasta, cake..."
            className="flex-1 border-b-2 border-[#2B2420]/20 bg-transparent px-2 py-3 font-[family-name:var(--font-display)] text-lg text-[#2B2420] outline-none transition placeholder:text-[#2B2420]/30 focus:border-[#C1502E]"
          />
          <button
            type="submit"
            className="border-2 border-[#2B2420] bg-[#2B2420] px-8 py-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-wider text-[#FDFBF6] transition hover:bg-[#C1502E] hover:border-[#C1502E]"
          >
            Buscar
          </button>
        </form>

        <p className="mt-4 text-center text-xs italic text-[#2B2420]/40">
          A API é em inglês — tenta &quot;beef&quot;, &quot;salmon&quot;,
          &quot;soup&quot;
        </p>
      </div>

      <div className="mt-16">
        {status === "loading" && (
          <p className="text-center font-[family-name:var(--font-display)] italic text-[#2B2420]/60">
            Buscando receitas...
          </p>
        )}

        {status === "empty" && (
          <p className="text-center font-[family-name:var(--font-display)] italic text-[#2B2420]/60">
            Nenhuma receita encontrada para &quot;{query}&quot;.
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-[#C1502E]">
            Algo deu errado. Tenta de novo em instantes.
          </p>
        )}

        {status === "success" && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((meal, i) => (
              <button
                key={meal.idMeal}
                onClick={() => openRecipe(meal.idMeal)}
                style={{
                  transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})`,
                }}
                className="group text-left transition hover:-translate-y-1.5"
              >
                <div
                  className="relative overflow-hidden border border-[#2B2420]/10 bg-[#FDFBF6] shadow-[0_4px_14px_rgba(43,36,32,0.08)] transition group-hover:shadow-[0_10px_24px_rgba(43,36,32,0.15)]"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)",
                  }}
                >
                  <div
                    className="absolute right-0 top-0 h-0 w-0"
                    style={{
                      borderTop: "22px solid #F5EFE3",
                      borderLeft: "22px solid transparent",
                    }}
                  />
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <span
                      className="inline-block px-2.5 py-1 font-[family-name:var(--font-display)] text-[10px] uppercase tracking-wider text-white"
                      style={{
                        backgroundColor: categoryColor(meal.strCategory),
                      }}
                    >
                      {meal.strCategory}
                    </span>
                    <p className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug">
                      {meal.strMeal}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <RecipeModal meal={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
