"use client";
export const dynamic = "force-dynamic";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GoogleSuccess() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [params, router]);

  return (
    <p className="text-xl font-semibold text-gray-500 animate-pulse w-full h-screen flex justify-center items-center">
      Signing you in...
    </p>
  );
}
