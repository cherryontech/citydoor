import Heading from './components/heading'
import cdBannerMain from '/public/cdBannerMain.png'
import cdBannerMainDesktop from '/public/cdBannerMain-desktop.png'
import cdFormImageOne from '/public/cdFormImageOne.jpeg'
import cdFormImageTwo from '/public/cdFormImageTwo.jpeg'
import Form from './components/form'
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
          <p className='text-xl cd-desktop:text-2xl'>
            CityDoor & Hardware has been the authority on commercial and
            residential doors, ADA door operators, and door hardware in the Bay
            Area since 1992. We distribute high-quality products worldwide.
          </p>
        </div>
        <Image
          className='hidden cd-desktop:block'
          height={536}
          src={cdBannerMainDesktop}
          alt='Partial view of double glass doors and a tall window. The doors and window are each framed in white wood with cascading ivy. A small decorative plaque hanging from the door reads Home.'
        />
      </article>
      <article className='my-[90px] flex flex-col cd-desktop:basis-1/2'>
        <div className='cd-desktop:flex gap-x-20 items-center px-20'>
          <Heading level={1} className={"cd-desktop:text-6xl text-4xl cd-desktop:py-6 font-bold"}>
            Contact Us
          </Heading>
          <div className='flex flex-col cd-desktop:py-3.5'>
            <p>Let’s talk about quotes, consultations, deliveries, feedback,</p>
            <p>and all things doors and doors hardware.</p>
            <p>Need additional language assistance? Let us know!</p>
            <p>Our experts are here to help you!</p>
          </div>
        </div>
        <div className='cd-desktop:flex gap-x-20 items-center px-20 py-6'>
          <div className='flex flex-col gap-y-6 cd-desktop:basis-1/2'>
            <Image src={cdFormImageOne} width={475} alt='' />
            <Image src={cdFormImageTwo} width={475} alt='' />
          </div>
          <div className='grow max-w-xl	cd-desktop:basis-1/2'>
            <Form />
          </div>
        </div>
      </article>
    </>
  )
}
