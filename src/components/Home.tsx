"use client";

import { useState, type ReactNode } from "react";
import { ProfileGate } from "./ProfileGate";

export function Home({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<string | null>(null);

  if (!profile) {
    return <ProfileGate onSelect={setProfile} />;
  }

  return (
    <div id="top" className="page">
      {children}
    </div>
  );
}
