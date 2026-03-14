"use client";

import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      router.push("/login");
      router.refresh();
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-black text-white rounded-lg absolute top-5 right-5 cursor-pointer"
    >
      {loading ? <Loader className="size-6 animate-spin" /> : "Logout"}
    </button>
  );
}
