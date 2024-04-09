import { cleanEnv, str } from "envalid";

export function ValidateEnv(): void {
  cleanEnv(import.meta.env, {
    VITE_NODE_ENV: str(),
    VITE_API_BASE_URL: str(),
    VITE_API_IMAGE_BASE_URL: str(),
    VITE_API_ACCESS_TOKEN: str(),
    VITE_API_KEY: str(),
  });
}
