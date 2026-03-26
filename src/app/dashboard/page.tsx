"use client";

import MapNavbar from "@/features/map/navbar/MapNavbar";
import Projects from "@/features/dashboard/Project";
import AuthGuard from "@/hooks/AuthGuard";

export default function Login() {
  return (
    <AuthGuard>
      <div>
        <MapNavbar />
        <Projects />
      </div>
    </AuthGuard>
  );
}
