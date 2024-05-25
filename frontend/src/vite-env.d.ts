/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV: string
  readonly VITE_BASE_URL: string
  readonly VITE_BASE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
