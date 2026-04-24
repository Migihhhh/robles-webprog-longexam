import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border-2 border-zinc-900 bg-zinc-900/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white focus:bg-zinc-900";

const actionButtonClassName =
  "w-full rounded-xl py-4 text-[10px] font-black tracking-[0.3em] uppercase";

const SignInPage = () => {
  return (
    <>
      {/* Back Navigation */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-white"
        >
          ← Return to Base
        </Link>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl">
          Log In
        </h1>
        <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-500">
          Access your professional workstation to manage asset licenses and
          hardware orders.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="signin-email"
            className="text-[10px] font-black uppercase tracking-widest text-zinc-400"
          >
            Professional Email
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="editor@vantagecine.com"
            className={inputClasses}
          />
        </div>

        <div>
          <div className="flex justify-between">
            <label
              htmlFor="signin-password"
              className="text-[10px] font-black uppercase tracking-widest text-zinc-400"
            >
              Security Key
            </label>
            <button
              type="button"
              className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-white transition"
            >
              Forgot?
            </button>
          </div>
          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-zinc-800 bg-zinc-900 accent-white"
          />
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
            Keep Session Active
          </span>
        </div>

        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Authorize Access
        </Button>
      </form>

      <div className="mt-10 border-t border-zinc-900 pt-8 text-center text-xs font-bold uppercase tracking-widest text-zinc-600">
        New Operator?{" "}
        <Link to="/auth/signup" className="text-white hover:underline">
          Create Account
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
