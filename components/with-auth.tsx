"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function WithAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token != "a") {
      console.log("No token found, redirecting to login");
      router.replace("/login");
    }
  }, []);

  return <>{children}</>;
}
