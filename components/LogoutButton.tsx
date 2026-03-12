"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("token");
    router.replace("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-black text-white rounded-lg absolute top-5 right-5 cursor-pointer"
    >
      Logout
    </button>
  );
}
