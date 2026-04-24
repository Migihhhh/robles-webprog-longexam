import Button from "./Button";

const ProductCard = ({ product, index }) => {
  return (
    <article className="group rounded-3xl border-2 border-zinc-900 bg-zinc-900/20 p-5 transition-all hover:border-zinc-700">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-900">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover opacity-80 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>

      <div className="mt-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
          {product.category} — {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 text-xl font-black uppercase tracking-tighter text-white">
          {product.title}
        </h3>
        <p className="mt-1 text-lg font-bold text-zinc-400">{product.price}</p>

        <p className="mt-4 text-xs leading-relaxed text-zinc-500 line-clamp-2">
          {product.content[0]}
        </p>

        <Button
          to={`/products/${product.name}`}
          variant="secondary"
          className="mt-6 w-full py-3"
        >
          Inspect Asset
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
