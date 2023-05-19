import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJanJuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJanJuree = BaiJanJuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baiJanJuree',
})

export const metadata = {
  title: 'NLW spacetime',
  description: 'Uma cápsula de tempo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJanJuree.variable} bg-gray-900 font-primary text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
