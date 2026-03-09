// Reusable button component with variants (size, style) powered by class-variance-authority
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

// Define the different styling options our button can have
const buttonVariants = cva(
  "btn inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium outline-none transition-all duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "btn-primary",
        destructive:
          "btn-error",
        outline:
          "btn-outline",
        secondary:
          "btn-secondary",
        ghost:
          "btn-ghost",
        link: "btn-link",
      },
      size: {
        default: "btn-md",
        xs: "btn-xs",
        sm: "btn-sm",
        lg: "btn-lg",
        icon: "btn-square btn-md",
        "icon-xs": "btn-square btn-xs",
        "icon-sm": "btn-square btn-sm",
        "icon-lg": "btn-square btn-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Button component that can render as a normal button or wrap another element (asChild)
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }