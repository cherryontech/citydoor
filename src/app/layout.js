import './globals.css'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import cdLogoHorizontal from '/public/cdLogoHorizontal.png'
import cdLogoSquare from '/public/cdLogoSquare.png'
import IconPhone from './components/icon-phone'
import IconEnvelope from './components/icon-envelope'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
  subsets: ['latin']
})

export const metadata = {
  title: 'Citydoor',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${roboto.variable}`}>
      <body className='flex flex-col items-stretch h-screen p-4 cd-desktop:p-0'>
        <header>
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

        <main className='grow cd-desktop:px-20'>{children}</main>

        <footer className='px-3 pt-5 cd-desktop:pt-6 cd-desktop:px-0 bg-cd-accent'>
          <div className='flex flex-col justify-start gap-5 mb-6 cd-desktop:px-20 cd-desktop:mb-11 cd-desktop:gap-20 cd-desktop:flex-row'>
            <Image
              className='h-12 cd-desktop:h-[88px] cd-desktop:w-[88px] mx-auto cd-desktop:mx-0 object-contain'
              src={cdLogoSquare}
              alt='CityDoor logo, the words City Door & Hardware partially surrounded by a thin red square border.'
            />
            <address className='flex flex-col gap-3 not-italic text-center cd-desktop:text-left cd-desktop:gap-20 cd-desktop:flex-row'>
              <p className='flex flex-col'>
                <span className='font-semibold'>Street Address</span>
                <span>165 13th St.</span>
                <span>San Francisco, CA 94103</span>
                <span>United States</span>
              </p>

              <p className='flex flex-col'>
                <span className='font-semibold'>Phone</span>
                <span>(+1) 415-431-0400</span>
              </p>

              <p className='flex flex-col'>
                <span className='font-semibold'>Email</span>
                <a href='mailto:sales@citydoor.com'>sales@citydoor.com</a>
              </p>
            </address>
          </div>

          <div className='px-3 pb-6 text-center border-t cd-desktop:pl-20 cd-desktop:text-left border-cd-black pt-9 cd-desktop:py-3'>
            <p className='text-sm'>© 2024 City Door. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
