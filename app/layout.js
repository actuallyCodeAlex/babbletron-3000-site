import './globals.css'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] })

export const metadata = {
  title: 'babbletron-3000',
  description: 'The website for babbeltron-3000 (www.babbeltron-3000.com)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={caveat.className}>{children}</body>
    </html>
  )
}
