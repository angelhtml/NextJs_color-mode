/** @type {import('next').NextConfig} */
const nextConfig = {
    //only static build, post method not working in static mode
    output: 'export', 
};

export default nextConfig;
