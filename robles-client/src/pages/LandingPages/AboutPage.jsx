import Button from "../../components/Button";

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6 bg-zinc-950 pt-20">
      <section className="border-b-2 border-zinc-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] border-2 border-zinc-900 bg-zinc-900/30 p-8">
            <div className="flex min-h-80 items-center justify-center rounded-[2rem] bg-zinc-900 overflow-hidden border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800"
                alt="Lab Equipment"
                className="h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.5em] text-zinc-500">
              The Workflow
            </p>
            <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl uppercase tracking-tighter">
              Engineered for the Edit Suite.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
              Vantage Cine Labs provides the technical foundation for modern
              visual storytelling. Our assets are mathematically calibrated to
              ensure consistent results across diverse production environments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/products" variant="primary" className="px-8 py-4">
                View Inventory
              </Button>
              <Button to="/" className="px-8 py-4">
                Back Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-zinc-500">
            Lab Statistics
          </p>
          <h2 className="mt-2 text-3xl font-black text-white uppercase tracking-tighter">
            Inventory Breakdown
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Digital Assets", val: "120+" },
            { label: "Hardware Units", val: "14" },
            { label: "Color Profiles", val: "32" },
            { label: "Global Users", val: "2.4k" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-3xl border-2 border-zinc-900 bg-zinc-900/20 p-8 hover:border-zinc-700 transition-colors"
            >
              <p className="text-4xl font-black text-white tracking-tighter">
                {stat.val}
              </p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-zinc-900 px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-zinc-500">
              Technical Standards
            </p>
            <h2 className="mt-2 text-3xl font-black text-white uppercase tracking-tighter">
              The Production Stack
            </h2>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Precision Optics",
                  desc: "Hardware calibrated for 100% Rec.709 and DCI-P3 accuracy.",
                },
                {
                  title: "Non-Destructive",
                  desc: "All digital assets maintain maximum dynamic range.",
                },
                {
                  title: "Studio Grade",
                  desc: "Audio recorded at 96kHz for professional sound stages.",
                },
              ].map((item, i) => (
                <article
                  key={i}
                  className="rounded-2xl border-2 border-zinc-900 bg-zinc-900/40 p-6"
                >
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border-2 border-zinc-900 bg-zinc-900/30 p-8 flex flex-col justify-center text-center">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">
              Quality Controlled
            </h3>
            <p className="text-sm text-zinc-500 max-w-xs mx-auto">
              Every asset in our catalog undergoes rigorous stress testing in
              high-pressure edit environments.
            </p>
            <div className="mt-8 h-1 w-24 bg-white mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
