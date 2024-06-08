/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias["@"] = path.resolve(__dirname);
        return config;
    },
    output: 'export',
    images: { unoptimized: true },
};

export default nextConfig;
