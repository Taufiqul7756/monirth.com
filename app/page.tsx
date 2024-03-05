import HeroPage from "./pages/HeroSection/page";
import ProductsPage from "./pages/Products/Products";

export default function Home() {
  return (
    <main>
      <>
        <HeroPage />
        <div className="p-10 bg-slate-500">
          <ProductsPage />
        </div>
      </>
    </main>
  );
}
