import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border-2 border-zinc-900 bg-zinc-900/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-white focus:bg-zinc-900";

const actionButtonClassName =
  "w-full rounded-xl py-4 text-[10px] font-black tracking-[0.3em] uppercase";

const SignUpPage = () => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl">
          Register
        </h1>
        <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-500">
          Create a lab account for secure delivery of RAW assets and 4K hardware
          monitoring.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              First Name
            </label>
            <input type="text" placeholder="John" className={inputClasses} />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Last Name
            </label>
            <input type="text" placeholder="Doe" className={inputClasses} />
          </div>
        </div>

        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
            Email Address
          </label>
          <input
            type="email"
            placeholder="editor@vantagecine.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
            New Password
          </label>
          <input
            type="password"
            placeholder="Create Secure Key"
            className={inputClasses}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Initialize Account
        </Button>
      </form>

      <div className="mt-10 border-t border-zinc-900 pt-8 text-center text-xs font-bold uppercase tracking-widest text-zinc-600">
        Already a Member?{" "}
        <Link to="/auth/signin" className="text-white hover:underline">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
