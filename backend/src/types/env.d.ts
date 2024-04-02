declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: "production" | "development" | "test"
    readonly SERVER_PROTOCOL: string
    readonly SERVER_HOSTNAME: string
    readonly SERVER_PORT: number
    readonly CLIENT_PROTOCOL: string
    readonly CLIENT_HOSTNAME: string
    readonly CLIENT_PORT: number
    readonly DATABASE_URL: string
    readonly JWT_SIGNING_KEY: string
    readonly JWT_EXPIRATION_TIME: string
    readonly JWT_EXPIRATION_TIME_IN_MS: number
  }
}
