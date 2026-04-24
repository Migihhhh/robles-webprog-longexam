import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <div className="grid min-h-screen w-full lg:grid-cols-[1.1fr_0.9fr]">
        {/* Visual Brand Side */}
        <div className="relative hidden items-center justify-center border-r-2 border-zinc-900 bg-zinc-900/20 lg:flex overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600"
            alt="Cine Background"
            className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale"
          />
          <div className="relative z-10 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white bg-zinc-950 text-2xl font-black">
              V
            </div>
            <h2 className="text-2xl font-black uppercase tracking-[0.3em]">
              Vantage Cine
            </h2>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">
              Authorized Personnel Only
            </p>
          </div>
        </div>

        {/* Form Side */}
        <main className="flex items-center px-6 py-12 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
