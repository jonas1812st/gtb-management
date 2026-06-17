export async function headers() {
  return [
    {
      key: "Access-Control-Allow-Origin",
      value: process.env.NEXT_PUBLIC_APP_URL,
    },
  ];
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
};

export default nextConfig;
