/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Tu configuración original
  },
  images: {
    unoptimized: true, // Tu configuración original
    remotePatterns: [  // El permiso para los avatares
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig