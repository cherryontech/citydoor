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
      <article className='my-[90px] flex flex-col justify-between items-center'>
        <div className='flex'>
          <Heading level={1} className={"cd-desktop:text-6xl text-4xl mb-6 cd-desktop:mb-4"}>
            Contact Us
          </Heading>
          <div className='flex flex-col'>
            <p>Let’s talk about quotes, consultations, deliveries, feedback , and all things doors and doors hardware.</p>
            <p>Our experts are here to help you!</p>
          </div>
        </div>
        <div className='flex gap-x-20'>
          <div className='flex flex-col gap-y-6'>
            <Image src={cdFormImageOne} width={343} alt='' />
            <Image src={cdFormImageTwo} width={343} alt='' />
          </div>
          <Form />
        </div>
      </article>
    </>
  )
}
