import bcrypt from "bcryptjs"

import type { IUser } from "../models/v1/user.model"

export const dummyUsers: Omit<IUser, "matchPasswords">[] = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("abc123", 10),
    isAdmin: true,
  },
  {
    name: "John Smith",
    email: "john@example.com",
    password: bcrypt.hashSync("abc123", 10),
    isAdmin: false,
  },
  {
    name: "Annie",
    email: "annie@example.com",
    password: bcrypt.hashSync("abc123", 10),
    isAdmin: false,
  },
]
