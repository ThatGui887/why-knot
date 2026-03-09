// Reusable card building blocks used to structure sections of the UI
import * as React from "react"

import { cn } from "@/lib/utils"
// Outer card container with border, background, and padding
function Card({ className, ...props }: React.ComponentProps<"div">) {
    return (
      <div
        data-slot="card"
        className={cn(
          "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
          className
        )}
        {...props}
      />
    )
  }
