export const cookieSessionOptions = {
  signed: false,
  secure: process.env.NODE_ENV !== "test",
}
