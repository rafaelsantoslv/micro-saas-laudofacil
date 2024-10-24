import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Laudo Fácil',
    template: '%s | Laudo Fácil',
  },
  description: 'Sistema de laudos rápidos e eficientes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Toaster richColors closeButton />
      </body>
    </html>
  )
}
