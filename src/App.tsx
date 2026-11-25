
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Home from "./pages/Home";

function Placeholder({ title }: { title: string }) {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <p className="text-gray-500">
        Esta funcionalidade será implementada nas próximas etapas.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Placeholder title="Catálogo de produtos" />} />
          <Route path="/login" element={<Placeholder title="Entrar na conta" />} />
          <Route path="/cadastro" element={<Placeholder title="Criar conta" />} />
          <Route path="/carrinho" element={<Placeholder title="Meu carrinho" />} />
          <Route path="/carrinhos-salvos" element={<Placeholder title="Carrinhos salvos" />} />
          <Route path="/mercados" element={<Placeholder title="Meus mercados" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
