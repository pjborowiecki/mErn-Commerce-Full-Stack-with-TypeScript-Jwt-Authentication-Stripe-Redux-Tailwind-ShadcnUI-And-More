import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function unslugify(str: string) {
  return str.replace(/-/g, " ")
}

export function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
  )
}

export function toSentenceCase(str: string) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export function formatPrice(
  price: number | string,
  options: Intl.NumberFormatOptions = {}
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: options.currency ?? "USD",
    notation: options.notation ?? "compact",
    ...options,
  }).format(Number(price))
}

export function formatNumber(
  number: number | string,
  options: Intl.NumberFormatOptions = {}
) {
  return new Intl.NumberFormat("en-US", {
    style: options.style ?? "decimal",
    notation: options.notation ?? "standard",
    minimumFractionDigits: options.minimumFractionDigits ?? 0,
    maximumFractionDigits: options.maximumFractionDigits ?? 2,
    ...options,
  }).format(Number(number))
}
