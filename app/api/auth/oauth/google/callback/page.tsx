"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GoogleCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("token");

    if (token) {
      document.cookie = `token=${token}; path=/; max-age=${7 * 24 * 60 * 60}`;
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <p className="w-full h-screen flex justify-center items-center text-xl animate-pulse">
      Logging in...
    </p>
  );
}
