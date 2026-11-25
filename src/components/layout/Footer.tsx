
import { Phone, ShoppingBasket } from "lucide-react";
import { appConfig } from "../../config/app.config";
import { Container } from "../common/Container";

export function Footer() {
  const phone = appConfig.site.contactPhone;

  return (
    <footer className="bg-[var(--color-primary)] text-white mt-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBasket size={28} />
              <strong className="text-xl">
                {appConfig.site.name}
              </strong>
            </div>

            <p className="text-sm text-white/80">
              {appConfig.site.slogan}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <a href="/">Início</a>
              <a href="/catalogo">Produtos</a>
              <a href="/login">Minha conta</a>
              <a href="/politica-de-privacidade">
                Privacidade
              </a>
            </div>
          </div>

          {appConfig.footer.showContact && (
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <Phone size={18} />
                {appConfig.site.contactDisplay}
              </a>
            </div>
          )}
        </div>

        {appConfig.footer.showCopyright && (
          <div className="border-t border-white/20 py-5 text-center text-xs text-white/70">
            © {new Date().getFullYear()} {appConfig.site.name}.
            {" "}{appConfig.footer.copyrightText}
          </div>
        )}
      </Container>
    </footer>
  );
}
