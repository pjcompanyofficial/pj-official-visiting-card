import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPolishRate(inch: number | string): number {
  const length = parseFloat(String(inch)) || 0;
  if (length <= 0) return 0;
  if (length < 10) return 15;
  if (length <= 15.5) return 20;
  if (length <= 20) return 40;
  if (length <= 26) return 45;
  if (length <= 30) return 50;
  if (length > 30) return 60;
  return 0;
}
