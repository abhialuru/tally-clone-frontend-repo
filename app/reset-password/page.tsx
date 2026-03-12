"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { resetPassword } from "../api/resetPassword";
import Link from "next/link";
import { Loader, MoveLeft } from "lucide-react";

function page() {
  const params = useSearchParams();

  const token = params.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleResetPassword(e: React.FormEvent) {
    e.preventDefault();

    if (!token) {
      setError("Invalid token");
      return;
    }

    setLoading(true);

    try {
      if (newPassword !== confirmPassword) {
        setError("Passwords doesn't match");
        return;
      }

      await resetPassword(confirmPassword, token);

      setSuccess(true);

      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-8 font-semibold text-black">
            Password reset successfull 🎉
          </h1>
          <Link href="/login" className="border-b cursor-pointer">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <Link href="/" className="fixed inset-10 flex gap-2 w-fit h-fit">
        <MoveLeft className="size-6 stroke-[1.5]" /> Go back
      </Link>
      <div className="w-[90%] md:w-80 mx-auto">
        <div>
          <h1 className="text-2xl mb-8 font-semibold text-black">
            Create your new password
          </h1>
          <form onSubmit={handleResetPassword} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 ">
              <p className="font-semibold text-black">New Password</p>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-1 focus:outline-none pl-2"
                required
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="font-semibold text-black">Confirm Password</p>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-1 focus:outline-none pl-2"
                required
                minLength={4}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-black py-2 text-white font-semibold cursor-pointer flex justify-center items-center"
            >
              {loading ? (
                <Loader className="size-6 animate-spin" />
              ) : (
                "Continue"
              )}
            </button>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
