export interface NavLink {
  label: string
  href: string
  external?: boolean
  disabled?: boolean
  subLinks?: NavLink[]
}

export interface User {
  name: string
  email: string
  image: string | null
}
