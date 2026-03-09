// Utility for combining Tailwind class names in a safe, readable way
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Merge conditional class names and let Tailwind-merge resolve conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}