"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";

function Page() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  const [status, setStatus] = useState("Verifying...");
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setToken(params.get("token"));
  }, []);

  if (error) {
    <div className="w-full h-screen flex gap-2 justify-center items-center">
      <p className="text-red-500">{error}</p>
      <Link href="/login" className="border-b">
        Try Again
      </Link>
    </div>;
  }

  useEffect(() => {
    async function verifyEmail() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify-email?token=${token}`,
        );

        const data = await res.json();

        if (!res.ok) {
          setError(data.message);
        }

        setStatus("Email verified successfully 🎉. Please try logging in now");

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } catch {
        setStatus("Invalid or expired verification link");
      }
    }

    if (token) verifyEmail();
  }, [token, router]);

  return (
    <div
      className={`flex items-center justify-center h-screen text-xl ${status === "Verifying..." && "animate-pulse"}`}
    >
      {status}
    </div>
  );
}

export default Page;
