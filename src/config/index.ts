import { cleanEnv, str } from "envalid";

const envVars = cleanEnv(import.meta.env, {
  VITE_NODE_ENV: str(),
  VITE_API_BASE_URL: str(),
  VITE_API_IMAGE_BASE_URL: str(),
  VITE_API_ACCESS_TOKEN: str(),
  VITE_API_KEY: str(),
});

export const {
  VITE_NODE_ENV,
  VITE_API_BASE_URL,
  VITE_API_IMAGE_BASE_URL,
  VITE_API_ACCESS_TOKEN,
  VITE_API_KEY,
} = envVars;
