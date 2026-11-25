
import {
  ShoppingBasket,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { appConfig } from "../config/app.config";
import { Container } from "../components/common/Container";

const categories = [
  { name: "Mercearia", icon: "🛒" },
  { name: "Hortifruti", icon: "🥬" },
  { name: "Carnes", icon: "🥩" },
  { name: "Laticínios", icon: "🥛" },
  { name: "Bebidas", icon: "🥤" },
  { name: "Limpeza", icon: "🧹" },
  { name: "Padaria", icon: "🍞" },
  { name: "Higiene", icon: "🧴" },
];

const products = [
  {
    id: 1,
    name: "Arroz branco 5kg",
    category: "Mercearia",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    price: 25.90,
  },
  {
    id: 2,
    name: "Leite integral 1L",
    category: "Laticínios",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500",
    price: 5.49,
  },
  {
    id: 3,
    name: "Maçãs frescas",
    category: "Hortifruti",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500",
    price: 8.99,
  },
  {
    id: 4,
    name: "Pão artesanal",
    category: "Padaria",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500",
    price: 12.90,
  },
];

export default function Home() {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat(appConfig.site.locale, {
      style: "currency",
      currency: appConfig.site.currency,
    }).format(price);

  return (
    <>
      {/* Banner principal */}
      <section className="bg-[var(--color-primary)] text-white overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 items-center gap-8 py-14 md:py-20">

            <div>
              <span className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-sm mb-6">
                <Sparkles size={16} />
                Suas compras mais simples
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Monte sua lista.
                <br />
                Escolha seu mercado.
              </h1>

              <p className="text-white/80 text-lg mb-8 max-w-lg">
                Organize seus produtos, salve suas compras
                favoritas e envie sua lista diretamente
                pelo WhatsApp do seu mercado.
              </p>

              <Link
                to="/catalogo"
                className="inline-flex items-center gap-3 bg-white text-[var(--color-primary)] px-7 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                Começar minhas compras
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="bg-white/10 rounded-3xl p-10">
                <ShoppingBasket size={190} strokeWidth={1.2} />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Pesquisa */}
      <Container>
        <div className="relative -mt-7 z-10 max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-3 flex items-center gap-3 border">
            <Search className="text-gray-400 ml-2" size={24} />

            <input
              type="search"
              placeholder="Encontre arroz, leite, frutas..."
              className="flex-1 min-w-0 py-3 outline-none text-sm md:text-base"
            />

            <Link
              to="/catalogo"
              className="bg-[var(--color-primary)] text-white px-5 py-3 rounded-xl font-semibold text-sm"
            >
              Buscar
            </Link>
          </div>
        </div>
      </Container>

      {/* Categorias */}
      <Container>
        <section className="py-14">
          <div className="flex items-center justify-between mb-7">
            <div>
              <h2 className="text-2xl font-bold">
                Explore as categorias
              </h2>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                Encontre facilmente o que precisa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/catalogo"
                className="bg-white border rounded-2xl p-4 text-center hover:border-[var(--color-secondary)] hover:shadow-md transition"
              >
                <span className="text-3xl block mb-3">
                  {category.icon}
                </span>

                <span className="text-sm font-semibold">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Publicidade */}
        {appConfig.advertising.enabled &&
          appConfig.advertising.placements.homeBanner && (
            <div className="mb-14 bg-gray-100 border border-dashed border-gray-300 rounded-xl min-h-28 flex flex-col items-center justify-center text-gray-400">
              <span className="text-xs uppercase tracking-widest">
                Publicidade
              </span>
              <span className="text-sm">
                Espaço reservado para anúncios
              </span>
            </div>
          )}

        {/* Produtos em destaque */}
        <section className="pb-12">
          <div className="flex items-center justify-between mb-7">
            <div>
              <h2 className="text-2xl font-bold">
                Produtos em destaque
              </h2>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                Alguns produtos para começar sua lista.
              </p>
            </div>

            <Link
              to="/catalogo"
              className="text-sm font-semibold text-[var(--color-primary)] flex items-center gap-2"
            >
              Ver todos <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition"
              >
                <div className="aspect-square bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-3 md:p-4">
                  <span className="text-xs text-[var(--color-muted)]">
                    {product.category}
                  </span>

                  <h3 className="font-semibold mt-1 mb-3 text-sm md:text-base">
                    {product.name}
                  </h3>

                  {appConfig.catalog.showPrices && (
                    <strong className="text-[var(--color-primary)] text-lg">
                      {formatPrice(product.price)}
                    </strong>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
