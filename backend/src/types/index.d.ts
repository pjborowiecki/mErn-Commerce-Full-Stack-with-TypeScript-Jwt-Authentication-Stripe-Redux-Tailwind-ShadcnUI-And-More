import type { DeepPartial } from "utility-types"

interface UserPayload {
  id: object
  name: string
  email: string
  isAdmin: boolean
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload | null
    }
  }
}

export type TypedRequest<
  ReqBody = Record<string, unknown>,
  QueryString = Record<string, unknown>,
> = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  DeepPartial<ReqBody>,
  DeepPartial<QueryString>
>

export interface SignInRequestBody {
  email: string
  password: string
}

export interface SignUpRequestBody {
  name: string
  email: string
  password: string
}

export interface UpdateCurrentUserRequestBody {
  name?: string
  email?: string
  password?: string
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
