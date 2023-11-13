import type { Metadata } from 'next'
import { Inter , DM_Serif_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dmSerif = DM_Serif_Display({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-dm'
});

export const metadata: Metadata = {
  title: 'Anton Krylov',
  description: 'Backend Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSerif.variable}`}>{children}</body>
    </html>
  )
}
