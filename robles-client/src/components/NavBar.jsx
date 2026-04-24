import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
    isActive
      ? "border-white bg-white text-zinc-950"
      : "border-transparent text-zinc-500 hover:border-zinc-800 hover:text-white",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-zinc-900 font-black text-white text-xs">
            V
          </div>
          <p className="text-xl font-black uppercase tracking-tighter text-white">
            Vantage Cine
          </p>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
          {/* Added this link so you can actually get to the Sign In page */}
          <NavLink to="/auth/signin" className={navLinkClassName}>
            Sign In
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
