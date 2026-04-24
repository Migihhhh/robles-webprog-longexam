import { Link } from "react-router-dom";

const variantClasses = {
  primary: "bg-white text-zinc-950 hover:bg-zinc-200 border-white",
  secondary:
    "bg-transparent text-white hover:bg-white hover:text-zinc-950 border-zinc-800 hover:border-white",
};

const Button = ({
  children,
  to,
  type = "button",
  variant = "secondary",
  className = "",
}) => {
  const classes = [
    "inline-flex items-center justify-center rounded-full border-2 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300",
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(" ")
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
