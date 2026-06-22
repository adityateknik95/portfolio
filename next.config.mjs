import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Pin the tracing root to this project so an unrelated lockfile elsewhere
  // on the machine can't be inferred as the workspace root (affects Vercel
  // file tracing / bundle output).
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
