import Button from "../../components/Button.jsx";
import ProductList from "../../components/ProductList.jsx";
import products from "../../assets/product-content.js";

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col bg-zinc-950">
      <header className="border-b-2 border-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-500">
            Asset Inventory 2026
          </p>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-white sm:text-7xl">
            The Lab Store
          </h1>
          <p className="mt-6 max-w-lg text-lg text-zinc-400">
            A curated selection of digital assets and hardware designed for
            high-end post-production workflows.
          </p>
        </div>
      </header>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between border-b border-zinc-900 pb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Showing {products.length} Professional Assets
            </p>
          </div>
          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
};

export default ProductListPage;
