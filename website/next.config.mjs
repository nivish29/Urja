/** @type {import('next').NextConfig} */

import "dotenv/config"

const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

export default nextConfig

