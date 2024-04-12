import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import cdLogoHorizontal from '/public/cdLogoHorizontal.png'
import IconPhone from './components/icon-phone'
import IconEnvelope from './components/icon-envelope'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Citydoor',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} p-4 cd-desktop:p-0 flex flex-col items-stretch h-screen`}>
        <header className='mb-10 cd-desktop:mb-8'>
          <div className='flex flex-col items-center gap-2 px-4 py-4 mb-10 cd-desktop:gap-6 cd-desktop:px-20 cd-desktop:flex-row bg-cd-tertiary cd-desktop:py-5 cd-desktop:mb-6'>
            <div className='flex items-center gap-1'>
              <IconPhone className='text-cd-black' /> <p>(+1) 415-431-0400</p>
            </div>
            <div className='flex items-center gap-1'>
              <IconEnvelope className='text-cd-black' />
              <a className='underline' href='mailto:sales@citydoor.com'>
                sales@citydoor.com
              </a>
            </div>
          </div>
          <Image
            className='mx-auto'
            height={64}
            src={cdLogoHorizontal}
            alt='CityDoor logo, an abstract line drawing of a cityscape with several buildings and the words City Door & Hardware below it.'
          />
        </header>

        <main className="grow">{children}</main>

        <footer>FPO future footer</footer>
      </body>
    </html>
  )
}
