// Client-side provider setup so Convex can be used in React hooks
"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";

// Create a single Convex client instance using the public URL from env
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Wrap the app with Convex so child components can call the backend
export function Providers({ children }: { children: React.ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
