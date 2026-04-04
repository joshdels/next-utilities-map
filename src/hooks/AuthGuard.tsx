"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/lib/auth";

interface AuthGuardProps {
  children: ReactNode;
}

/**
 * Client-side auth guard for protected routes.
 *
 * - Redirects unauthenticated users to `/login`
 * - Prevents rendering protected content until auth check completes
 */
export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const token = getAccessToken();

  if (!token) {
    router.replace("/login");
  } else {
    setLoading(false);
  }

  if (loading)
    return (
      <p className="flex h-screen items-center justify-center text-center">
        Loading....
      </p>
    );

  return <> {children}</>;
}
