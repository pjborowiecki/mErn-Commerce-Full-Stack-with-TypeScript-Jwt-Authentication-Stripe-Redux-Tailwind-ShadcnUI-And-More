import { CorsOptions } from "cors"
import { config } from "./index"

export const corsOptions: CorsOptions = {
  origin: `${config.client.protocol}://${config.client.hostname}:${config.client.port}`,
  credentials: true,
  methods: ["PUT", "POST", "PATCH", "DELETE", "GET"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
}
