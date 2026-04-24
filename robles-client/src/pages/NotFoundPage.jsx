import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-zinc-950 pt-20">
      <section className="border-b-2 border-zinc-900 px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.5em] text-zinc-500">
            System Error
          </p>
          <h1 className="text-7xl font-black leading-tight text-white sm:text-9xl uppercase tracking-tighter">
            404
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-zinc-400 max-w-xl mx-auto">
            The resource you are attempting to locate is missing or has been
            re-indexed.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button to="/" variant="primary" className="px-8 py-4">
              Back Home
            </Button>
            <Button to="/products" className="px-8 py-4">
              View Catalog
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-900/20 p-8">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">
              Return Home
            </h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Return to the dashboard to find your previous session.
            </p>
            <Button to="/" variant="secondary" className="mt-6">
              Go Home
            </Button>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-900/20 p-8">
            <h3 className="text-sm font-black text-white uppercase tracking-widest">
              Inventory
            </h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              Browse all available digital assets and hardware gear.
            </p>
            <Button to="/products" variant="secondary" className="mt-6">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
