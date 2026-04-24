const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-2xl font-black uppercase tracking-tighter text-white">
            Vantage Cine
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
            Precision Post-Production Equipment
          </p>
        </div>

        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
          {["Licensing", "Privacy", "Technical Support"].map((link) => (
            <span
              key={link}
              className="hover:text-white cursor-pointer transition-colors"
            >
              {link}
            </span>
          ))}
        </div>

        <div className="text-right">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">
            © 2026 LABS DIVISION
          </p>
          <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-zinc-800">
            Lead Developer: Miggy Consul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
