import { useParams } from "react-router-dom";
import Button from "../../components/Button.jsx";
import products from "../../assets/product-content.js";

function ProductPage() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);

  const handleAddToBag = () => {
    alert(`${product.title} has been added to your Production Bag.`);
  };

  if (!product) {
    return (
      <div className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-zinc-950 px-6 text-center">
        <h1 className="text-6xl font-black tracking-tighter text-zinc-800 uppercase">
          Missing Asset
        </h1>
        <p className="mt-4 text-zinc-500 max-w-xs font-medium">
          The hardware or digital asset you are looking for is not in our
          current inventory.
        </p>
        <Button to="/products" variant="primary" className="mt-8">
          Return to Catalog
        </Button>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col bg-zinc-950 pb-20 pt-20">
      {/* Product Hero Section */}
      <section className="border-b-2 border-zinc-900 bg-zinc-900/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <Button to="/products" variant="secondary">
              ← Back to Catalog
            </Button>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-500">
                {product.category}
              </p>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl uppercase tracking-tighter">
                {product.title}
              </h1>
            </div>
            <div className="md:text-right">
              <p className="text-4xl font-black text-white">{product.price}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                {product.stock}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-12">
              <div className="overflow-hidden rounded-[2.5rem] border-2 border-zinc-900 bg-zinc-900 aspect-video shadow-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 border-b border-zinc-900 pb-2">
                  Technical Specifications
                </h2>
                <div className="space-y-6">
                  {product.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg leading-relaxed text-zinc-400 font-medium"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Actions */}
            <div className="space-y-6">
              <div className="rounded-[2rem] border-2 border-zinc-900 bg-zinc-900/30 p-8 sticky top-32">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8">
                  Acquire Asset
                </h3>

                <div className="space-y-5 border-y border-zinc-900 py-6">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-600">
                    <span>License</span>
                    <span className="text-zinc-300">Commercial</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-600">
                    <span>Delivery</span>
                    <span className="text-zinc-300">Instant / Secure</span>
                  </div>
                </div>

                <div className="mt-10 space-y-3">
                  <button
                    onClick={handleAddToBag}
                    className="w-full rounded-full bg-white py-4 text-xs font-black uppercase tracking-widest text-zinc-950 transition hover:bg-zinc-200"
                  >
                    Add to Production Bag
                  </button>
                  <Button to="/products" className="w-full py-4 text-xs">
                    Continue Browsing
                  </Button>
                </div>

                <p className="mt-8 text-[9px] text-center font-bold uppercase tracking-[0.3em] text-zinc-700">
                  Secure Checkout • 256-bit Encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
