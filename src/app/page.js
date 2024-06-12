import Heading from './components/heading'
import cdBannerMain from '/public/cdBannerMain.png'
import cdBannerMainDesktop from '/public/cdBannerMain-desktop.png'
import cdFormImageOne from '/public/cdFormImageOne.jpeg'
import cdFormImageTwo from '/public/cdFormImageTwo.jpeg'
import Form from './components/form'
import KeyBrands from './components/key-brands'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <article className='my-[90px] cd-desktop:flex gap-44 justify-between items-center'>
        <Image
          className='mx-auto mb-6 cd-desktop:hidden'
          width={320}
          src={cdBannerMain}
          alt='Partial view of double glass doors and a tall window. The doors and window are each framed in white wood with cascading ivy. A small decorative plaque hanging from the door reads Home.'
        />
        <div className='max-w-[320px] cd-desktop:max-w-[613px] mx-auto cd-desktop:mx-0'>
          <Heading
            level={1}
            className={
              'text-cd-brand cd-desktop:text-6xl text-4xl mb-6 cd-desktop:mb-4'
            }
          >
            Leading Door and Door Hardware Experts
          </Heading>
          <p className='text-xl cd-desktop:text-2xl mb-6'>
            CityDoor & Hardware has been the authority on commercial and
            residential doors, ADA door operators, and door hardware in the Bay
            Area since 1992. We distribute high-quality products worldwide.
          </p>
          <a href="tel:+14154310400" className="bg-cd-primary block text-center rounded-lg drop-shadow-lg p-4 font-bold w-56 cd-desktop:w-72 self-center cd-desktop:self-auto text-cd-white">Call Us</a>
        </div>
        <Image
          className='hidden cd-desktop:block'
          height={536}
          src={cdBannerMainDesktop}
          alt='Partial view of double glass doors and a tall window. The doors and window are each framed in white wood with cascading ivy. A small decorative plaque hanging from the door reads Home.'
        />
      </article>
      <KeyBrands/>
      <article className='cd-desktop:my-[90px] flex flex-col cd-desktop:basis-1/2 gap-y-6 cd-desktop:gap-y-0'>
        <Image src={cdFormImageTwo} width={320} alt='' className='mx-auto mb-6 cd-desktop:hidden' />
        <div className='flex flex-col gap-x-20 items-center mx-auto cd-desktop:mx-0 max-w-[320px] cd-desktop:max-w-none mb-6 cd-desktop:mb-0 cd-desktop:px-20 cd-desktop:py-6'>
          <Heading level={1} className={"cd-desktop:text-6xl text-4xl cd-desktop:py-6 font-bold mb-6 cd-desktop:mb-0 self-start"}>
            Contact Us
          </Heading>
          <div className='flex flex-col cd-desktop:flex-row cd-desktop:justify-between gap-y-6 w-full'>
            <div className="flex flex-col justify-center gap-y-6">
              <div className='flex flex-col cd-desktop:py-3.5'>
                <p className='text-xl cd-desktop:text-2xl'>Let’s talk about quotes, consultations, deliveries, feedback,</p>
                <p className='text-xl cd-desktop:text-2xl mb-4'>and all things doors and doors hardware.</p>
                <p className='text-xl cd-desktop:text-2xl mb-4'>Need additional language assistance? Let us know!</p>
                <p className='text-xl cd-desktop:text-2xl'>Our experts are here to help you!</p>
              </div>
              <div className='cd-desktop:hidden'>
                <p className='font-bold	text-sm	leading-6 mb-6'>Our Location</p>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1EJ-TgGjtE1Mv1Rw5d45muPyj-5-tRZU&ehbc=2E312F"
                  width="640"
                  height="480"
                  className='w-[288px] h-[396px] cd-desktop:w-[613px] cd-desktop:h-[694px]'>
                </iframe>
              </div>
              <div>
                <p className='font-bold	text-sm	leading-6	'>Our Address</p>
                <p className='font-normal	text-sm leading-6'>165 13th St., San Francisco, CA 94103</p>
                <p className='font-normal	text-sm leading-6'>United States</p>
              </div>
              <div>
                <p className='font-bold	text-sm	leading-6	'>Areas We Serve</p>
                <p className='font-normal	text-sm leading-6'>Bodega Bay, Gilroy, Sacramento, Santa Cruz,  Santa Rosa and Stockton, California.</p>
                <p className='font-normal	text-sm leading-6'>We ship globally!</p>
              </div>
              <div>
                <p className='font-bold	text-sm	leading-6	'>Business Hours</p>
                <p className='font-normal	text-sm leading-6'>Monday to Friday: 8 a.m. to 5 p.m. PT</p>
                <p className='font-normal	text-sm leading-6'>Saturday / Sunday: Closed</p>
              </div>
            </div>
            <div className='hidden cd-desktop:block'>
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1EJ-TgGjtE1Mv1Rw5d45muPyj-5-tRZU&ehbc=2E312F" 
                width="640" 
                height="480"
                className='w-[288px] h-[396px] cd-desktop:w-[613px] cd-desktop:h-[694px]'>
              </iframe>
            </div>
          </div>
        </div>
        <div className='cd-desktop:flex gap-x-20 items-center cd-desktop:px-20 cd-desktop:py-6 mx-auto cd-desktop:mx-0 max-w-[320px] cd-desktop:max-w-none'>
          <div className='flex flex-col gap-y-6 cd-desktop:basis-1/2'>
            <Image src={cdFormImageOne} width={475} alt='' className='hidden cd-desktop:block'/>
            <Image src={cdFormImageTwo} width={475} alt='' className='hidden cd-desktop:block'/>
          </div>
          <div className='grow max-w-xl	cd-desktop:basis-1/2'>
            <Form />
          </div>
        </div>
        <Image src={cdFormImageOne} width={320} alt='' className='mx-auto mb-6 cd-desktop:hidden' />
      </article>
    </>
  )
}
