import Button from "../../components/Button";
import heroImage from "../../assets/img/timeline.jpg";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col bg-zinc-950">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center border-b-2 border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Cinematography"
            className="h-full w-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.5em] text-zinc-500">
            Premium Post-Production Assets
          </p>
          <h1 className="text-6xl font-black leading-[0.9] text-white sm:text-8xl uppercase tracking-tighter">
            Vantage <br /> Cine Labs
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            Precision-engineered LUTs, foley bundles, and hardware for creators
            who refuse to compromise on visual storytelling.
          </p>
          <div className="mt-10 flex gap-4">
            <Button
              to="/products"
              variant="primary"
              className="px-8 py-4 text-xs"
            >
              Explore Catalog
            </Button>
            <Button to="/about" className="px-8 py-4 text-xs">
              Our Workflow
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="h-1 w-12 bg-white" />
            <h3 className="text-xl font-bold uppercase tracking-tighter">
              Color Science
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Mathematically accurate transforms for RAW workflows and high-end
              delivery.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-1 w-12 bg-zinc-800" />
            <h3 className="text-xl font-bold uppercase tracking-tighter">
              Sonic Depth
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Immersive foley and atmospheric textures recorded at 96kHz for
              pure clarity.
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-1 w-12 bg-zinc-800" />
            <h3 className="text-xl font-bold uppercase tracking-tighter">
              Edit Hardware
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Professional monitoring solutions and peripheral gear for 4K
              rendering.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
