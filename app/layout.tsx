import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'VigIA — Monitoreo Ganadero Inteligente',
  description:
    'VigIA es el sistema de monitoreo ganadero con IA que protege tu rodeo 24/7: alertas de abigeato, detección de celo y salud, y cumplimiento automático del SENASA. Lo que no se VigIA, se pierde.',
  icons: {
    icon: '/vigia-logo.png',
    apple: '/vigia-logo.png', 
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e9ecf3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
