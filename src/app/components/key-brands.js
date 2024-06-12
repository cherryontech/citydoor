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
    <article className='cd-desktop:my-[90px] flex flex-col cd-desktop:basis-1/2 gap-y-20 cd-desktop:gap-y-0 px-20 py-3'>
      <div className="flex flex-col gap-y-3">
        <Heading level={2} className={"cd-desktop:text-4xl text-4xl font-semibold pt-6"}>Key Partners Brands</Heading>
        <p className="py-5">Trusted by industry-leading companies worldwide</p>
      </div>
      <div>
        <div className="flex gap-x-[88.4px]">
          <Image src={simpson} width={120} alt='' className='mx-auto' />
          <Image src={pemko} width={120} alt='' className='mx-auto' />
          <Image src={emtek} width={120} alt='' className='mx-auto' />
          <Image src={lcn} width={120} alt='' className='mx-auto' />
          <Image src={steelcraft} width={120} alt='' className='mx-auto' />
          <Image src={hager} width={120} alt='' className='mx-auto' />
        </div>
        <div className="flex gap-x-[198.66px]">
          <Image src={masonite} width={120} alt='' className='mx-auto' />
          <Image src={vonDuprin} width={120} alt='' className='mx-auto' />
          <Image src={ives} width={120} alt='' className='mx-auto' />
          <Image src={schlage} width={120} alt='' className='mx-auto' />
        </div>
      </div>
    </article>
  )
}

