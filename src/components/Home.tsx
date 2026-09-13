import type { ReactNode } from "react";

export function Home({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="page">
      {children}
    </div>
  );
}
