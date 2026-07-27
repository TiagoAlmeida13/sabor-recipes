<div align="center">

# Sabor

### Buscador de receitas construído com Next.js, TypeScript e Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[**🔗 Ver deploy ao vivo**](https://sabor-recipes-sable.vercel.app) · [Reportar bug](https://github.com/TiagoAlmeida13/sabor-recipes/issues)

</div>

---

## Sobre o projeto

**Sabor** é um buscador de receitas com estética editorial, inspirado em revistas de culinária — cartões de resultado com "canto dobrado", fitas de categoria coloridas e um cartão de busca em estilo selo. O projeto consome a [TheMealDB](https://www.themealdb.com), uma API pública de receitas, e foi construído como peça de portfólio para demonstrar consumo de API externa, tratamento de estados assíncronos e composição de componentes em React.

O foco não foi só estilizar uma busca, mas reproduzir o fluxo real de uma aplicação de dados: requisição, carregamento, ausência de resultados, erro de rede e detalhe sob demanda — tudo com feedback visual claro para quem usa.

## Preview

![Preview do buscador de receitas Sabor](https://api.microlink.io/?url=https://sabor-recipes-sable.vercel.app&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800)

## Funcionalidades

- **Busca por nome** de receita, consumindo a API pública TheMealDB
- **Estados assíncronos completos**: carregando, sucesso, nenhum resultado, erro de rede
- **Cards de resultado** com fita de categoria colorida por tipo de prato
- **Modal de detalhe** sob demanda, com:
  - Lista de ingredientes e medidas, extraída dinamicamente da resposta da API
  - Modo de preparo completo
  - Fechamento por clique fora do modal ou botão dedicado
- **Totalmente responsivo**, com grid adaptável de 1 a 3 colunas

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [Next.js](https://nextjs.org) | Framework React, App Router |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática dos dados da API |
| [Tailwind CSS](https://tailwindcss.com) | Estilização utilitária |
| [TheMealDB](https://www.themealdb.com/api.php) | API pública de receitas (busca e detalhe) |
| [Vercel](https://vercel.com) | Deploy e hospedagem |

## Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/TiagoAlmeida13/sabor-recipes.git

# Entre na pasta do projeto
cd sabor-recipes

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado. A API responde melhor a termos de busca em inglês (ex: `chicken`, `pasta`, `soup`).

## Estrutura do projeto

```
sabor-recipes/
├── app/
│   ├── components/
│   │   ├── RecipeSearch.tsx    # Busca, estados assíncronos e grid de resultados
│   │   └── RecipeModal.tsx     # Modal de detalhe da receita
│   ├── lib/
│   │   └── types.ts            # Tipagem dos dados retornados pela API
│   ├── layout.tsx               # Fontes e metadata globais
│   ├── page.tsx                  # Composição da página
│   └── globals.css
└── package.json
```

## Autor

**Tiago Machado**
Desenvolvedor Front-end

[Portfólio](https://whoami-tiago.vercel.app) · [GitHub](https://github.com/TiagoAlmeida13) · [tyygo@live.com](mailto:tyygo@live.com)

---

<div align="center">
<sub>Projeto desenvolvido para fins de portfólio.</sub>
</div>
