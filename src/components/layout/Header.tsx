
import { useState } from "react";
import {
  ShoppingBasket,
  ShoppingCart,
  Search,
  Menu,
  X,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { appConfig } from "../../config/app.config";
import { Container } from "../common/Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50">
      <Container>
        <div className="h-20 flex items-center justify-between gap-4">

          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-[var(--color-primary)] text-white p-2 rounded-xl">
              <ShoppingBasket size={28} />
            </div>

            <div>
              <strong className="block text-lg leading-tight">
                {appConfig.site.shortName}
              </strong>
              <span className="text-xs text-gray-500">
                {appConfig.site.slogan}
              </span>
            </div>
          </Link>

          <div className="hidden md:flex flex-1 max-w-xl relative">
            <input
              type="search"
              placeholder="O que você está procurando?"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-12 outline-none focus:border-[var(--color-primary)]"
            />
            <Search
              className="absolute right-4 top-3.5 text-gray-400"
              size={21}
            />
          </div>

          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/login"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <UserRound size={20} />
              Minha conta
            </Link>

            <Link
              to="/carrinho"
              className="relative flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
            >
              <ShoppingCart size={24} />
              Carrinho
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Pesquisar produtos..."
                className="w-full rounded-xl border px-4 py-3 pr-10"
              />
              <Search className="absolute right-3 top-3.5 text-gray-400" />
            </div>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-2"
            >
              <UserRound size={20} />
              Minha conta
            </Link>

            <Link
              to="/carrinho"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-2"
            >
              <ShoppingCart size={20} />
              Meu carrinho
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}
