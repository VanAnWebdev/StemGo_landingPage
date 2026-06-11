/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  webpack: (config) => {
    // Allow webpack to resolve ESM-only packages that use "exports" field
    config.resolve = {
      ...config.resolve,
      conditionNames: ["import", "require", "default"],
    };
    return config;
  },
};

export default nextConfig;
