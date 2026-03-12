"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

function ProtectedRoutes({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return null;

  return <>{children}</>;
}

export default ProtectedRoutes;
