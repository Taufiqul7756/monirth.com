import About from "./components/About";
import HeroPage from "./pages/HeroSection/page";
import ProductsPage from "./pages/Products/Products";

export default function Home() {
  return (
    <main>
      <>
        <HeroPage />
        <div className="p-10 bg-slate-300">
          <ProductsPage />
        </div>
        <About />
      </>
    </main>
  );
}
