import RecipeSearch from "./components/RecipeSearch";

export default function Home() {
  return (
    <main className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="text-center">
        <p className="font-[family-name:var(--font-display)] text-xs italic tracking-[0.3em] text-[#7A8B69]">
          Nº 01 — EDIÇÃO DE RECEITAS DO MUNDO
        </p>

        <div className="mx-auto mt-5 h-px w-24 bg-[#2B2420]/20" />

        <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl font-bold tracking-tight md:text-8xl">
          Sabor
        </h1>

        <div className="mx-auto mt-6 h-px w-24 bg-[#2B2420]/20" />

        <p className="mx-auto mt-6 max-w-md font-[family-name:var(--font-display)] text-lg italic text-[#2B2420]/70">
          Ingredientes, técnica e modo de preparo — de qualquer cozinha do
          mundo, em segundos.
        </p>
      </div>

      <div className="mt-16">
        <RecipeSearch />
      </div>
    </main>
  );
}
