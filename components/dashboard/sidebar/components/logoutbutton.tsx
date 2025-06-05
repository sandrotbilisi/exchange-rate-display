"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <button
      className="flex items-center gap-2"
      onClick={() => {
        console.log("Logging out...");
        fetch("/api/logout")
          .then(() => {
            router.push("/login");
            toast.success("Logged out!");
          })
          .catch((error) => {
            console.error("Error logging out:", error);
            toast.error("Error logging out!");
          });
      }}
    >
      <LogOut />
      Logout
    </button>
  );
};

export default LogoutButton;
