import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import cdLogoHorizontal from '/public/cdLogoHorizontal.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Citydoor',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        
        <header>
          <Image
            className="mx-auto"
            height={64}
            src={cdLogoHorizontal}
            alt="CityDoor logo, an abstract line drawing of a cityscape with several buildings and the words City Door & Hardware below it."
          />
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}
