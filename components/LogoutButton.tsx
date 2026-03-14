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
      // Remove the token cookie
      document.cookie = `token=; path=/; max-age=0`;

      // Redirect to login
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
