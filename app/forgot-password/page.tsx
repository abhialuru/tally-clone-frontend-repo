"use client";
import { useState } from "react";
import { forgotPassword } from "../api/forgotPassword";
import { Loader, MoveLeft } from "lucide-react";
import Link from "next/link";

function Page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await forgotPassword(email);
      setMessage("If email exists, reset link sent.");

      setEmail("");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link href="/" className="fixed inset-10 flex gap-2 w-fit h-fit">
        <MoveLeft className="size-6 stroke-[1.5]" /> Go back
      </Link>
      <div className="w-[90%] md:w-80 h-fit mx-auto">
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-2xl font-semibold text-black">
            We'll send a reset link to your email
          </h1>
        </div>
        <form onSubmit={handleForgotPassword} className="flex flex-col gap-5">
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
          <button
            type="submit"
            className="w-full rounded-xl bg-black py-2 text-white font-semibold cursor-pointer flex justify-center items-center"
          >
            {loading ? <Loader className="size-6 animate-spin" /> : "Send"}
          </button>
          {message && <p className="text-sm text-green-500">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Page;
