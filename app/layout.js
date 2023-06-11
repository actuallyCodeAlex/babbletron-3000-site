import './globals.css'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] })

export const metadata = {
  title: 'babbletron-3000',
  description: '1 tool for creating and managing the babble of work.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={caveat.className}>{children}</body>
    </html>
  )
}
