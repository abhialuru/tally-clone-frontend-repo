"use client";
import Image from "next/image";
import { useState } from "react";
import { signUpUser } from "../api/signup";
import Link from "next/link";
import { Loader } from "lucide-react";

function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const data = await signUpUser(email, password);

      setMessage(
        "✅ Verification email sent. Please check your inbox and verify your email.",
      );

      setEmail("");
      setPassword("");
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="w-full h-full">
      <div className="w-80 mx-auto my-24">
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-2xl font-semibold text-black">
            Create your Tally acount
          </h1>
          <p className="font-semibold text-[#BBBABB] ">
            Get started with the simplest way to create forms
          </p>
        </div>
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
        <form onSubmit={handleSignUp} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-black">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 py-2 focus:outline-none pl-2"
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
            className="w-full rounded-lg bg-black py-2 text-white font-semibold cursor-pointer flex justify-center items-center"
          >
            {loading ? <Loader className="size-6 animate-spin" /> : "Continue"}
          </button>
          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="text-sm text-gray-500 flex gap-1">
            Already have an account?
            <Link href="/login" className="border-b">
              Log In
            </Link>
          </div>
        </form>
        {message && (
          <p className="mt-6 text-center text-green-600 font-medium">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default page;
