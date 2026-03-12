"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <button
      onClick={logout}
      className="px-4 py-2 bg-black text-white rounded-lg absolute top-5 right-5 cursor-pointer"
    >
      Logout
    </button>
  );
}
