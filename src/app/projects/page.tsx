"use client";

import MapNavbar from "@/features/dashboard/navbar/MapNavbar";
import Projects from "@/features/projects/Project";
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
