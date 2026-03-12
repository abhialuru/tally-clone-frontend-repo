"use client";
import Image from "next/image";
import { useState } from "react";
import { loginUser } from "../api/login";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader } from "lucide-react";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const data = await loginUser(email, password);

      console.log(data);

      document.cookie = `token=${data.token}; path=/`;

      setEmail("");
      setPassword("");

      router.push("/dashboard");
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full h-full">
      <div className="w-95 mx-auto my-24">
        <h1 className="text-2xl mb-8 font-semibold text-black">Welcome back</h1>
        <button
          onClick={() =>
            (window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`)
          }
          className="font-semibold shrink-0 w-80 text-[#777672] py-2 hover:bg-gray-100 transition-all duration-150 ease-in flex gap-4 justify-center items-center border border-gray-300 rounded-lg"
        >
          <span className="size-5">
            <Image
              src="/google-svg.png"
              className="w-full h-full object-contain"
              alt="google-icon"
              width={24}
              height={24}
            />
          </span>
          Continue with Google
        </button>
        <div className="h-px bg-gray-200 w-80 my-10" />
        <form onSubmit={handleLogin} className="w-80 flex flex-col gap-5">
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-black">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 focus:outline-none pl-2"
              required
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-black">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-2 focus:outline-none pl-2"
              required
              minLength={4}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-black py-2 text-white font-semibold cursor-pointer flex justify-center items-center"
          >
            {loading ? <Loader className="size-6 animate-spin" /> : "Continue"}
          </button>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex flex-col gap-2">
            <div className="text-xs text-gray-500 flex gap-1">
              Don't have an account yet?
              <Link href="/signup" className="border-b">
                Sign Up
              </Link>
            </div>
            <div className="text-xs text-gray-500 flex gap-1">
              Forgot Password?
              <Link href="/forgot-password" className="border-b">
                Reset
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default page;
