'use client'
import Heading from "./heading";
import Image from 'next/image'
import simpson from '/public/simpson.png'
import pemko from '/public/pemko.jpeg'
import emtek from '/public/emtek.png'
import lcn from '/public/lcn.png'
import steelcraft from '/public/steelcraft.png'
import hager from '/public/hager.png'
import masonite from '/public/masonite.png'
import vonDuprin from '/public/vonDuprin.png'
import ives from '/public/ives.png'
import schlage from '/public/schlage.jpeg'

export default function KeyBrands() {
  return (
    <article className='cd-desktop:my-[90px] flex flex-col cd-desktop:basis-1/2 gap-y-20 py-3'>
      <div className="flex flex-col gap-y-3">
        <Heading level={2} className={"text-4xl font-semibold pt-6 cd-desktop:text-6xl"}>Key Partners Brands</Heading>
        <p className="py-5 text-xl cd-desktop:text-2xl">Trusted by industry-leading companies worldwide</p>
      </div>
      <div className="brands">
        <div className="flex flex-col cd-desktop:flex-row cd-desktop:gap-x-[88.4px] cd-desktop:justify-center">
          <div className="flex gap-x-20 cd-desktop:gap-x-[88.4px] cd-desktop:justify-center">
            <Image src={simpson} width={120} alt='' className='mx-auto' />
            <Image src={pemko} width={130} alt='' className='mx-auto' />
            <Image src={emtek} width={84} alt='' className='mx-auto' />
          </div>
          <div className="flex gap-x-20 cd-desktop:gap-x-[88.4px] cd-desktop:justify-center">
            <Image src={lcn} width={84} alt='' className='mx-auto' />
            <Image src={steelcraft} width={130} alt='' className='mx-auto' />
            <Image src={hager} width={130} alt='' className='mx-auto' />
          </div>
        </div>
        <div className="flex flex-col cd-desktop:flex-row cd-desktop:gap-x-[198.66px] cd-desktop:justify-center">
          <div className="flex gap-x-20 cd-desktop:gap-x-[198.66px] cd-desktop:justify-center">
            <Image src={masonite} width={180} alt='' className='mx-auto' />
            <Image src={vonDuprin} width={130} alt='' className='mx-auto' />
          </div>
          <div className="flex gap-x-20 cd-desktop:gap-x-[198.66px] cd-desktop:justify-center">
            <Image src={ives} width={84} alt='' className='mx-auto' />
            <Image src={schlage} width={130} alt='' className='mx-auto' />
          </div>
        </div>
      </div>
    </article>
  )
}

