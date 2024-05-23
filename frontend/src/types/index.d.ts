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

export interface DummyProduct {
  id: string
  name: string
  description: string
  image: string
  brand: string
  category: string
  price: number
  countInStock: number
  rating: number
  numReviews: number
}

export interface DummyCategory {
  id: string
  name: string
}
