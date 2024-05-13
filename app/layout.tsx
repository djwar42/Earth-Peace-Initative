// app/layout.tsx
import { Caudex } from 'next/font/google'
import { Poppins } from 'next/font/google'
import './globals.css'

const caudex = Caudex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caudex',
  weight: '400'
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: '400'
})

export const metadata = {
  title: 'Earth Peace Initiative',
  description: 'Bringing Peacefulness to the World'
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${caudex.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
