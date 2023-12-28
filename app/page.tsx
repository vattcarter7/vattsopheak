import Image from "next/image"
import Link from "next/link"

import { INSTAGRAM_BLUR_DATA_URL, PROFILE_BLUR_DATA_URL } from "./constants/hash-data";

export default function Home() {
  return (
    <main className='h-full flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex justify-center items-center flex-col gap-y-4'>
        <h1 className='font-semibold text-2xl'>Vatt Sopheak</h1>
        <Image
          className='rounded-full'
          src='/images/vattsopheak.jpeg'
          width={250}
          height={250}
          placeholder="blur"
          blurDataURL={PROFILE_BLUR_DATA_URL}
          alt="vatt sopheak profile image"
        />
        <p className='pt-10'><b>Tel:</b> 010 326 778</p>
        <p>Phnom Penh, Cambodia</p>
        <Link className='flex flex-row' target="blank" href='https://instagram.com/vattsopheak/'>
          <Image
            className='rounded-full'
            src='/images/instagram.png'
            width={24}
            height={24}
            placeholder="blur"
            blurDataURL={INSTAGRAM_BLUR_DATA_URL}
            
            alt="vatt sopheak instagram page"
          />
          <span className='ml-2'>instagram.com/vattsopheak</span>
        </Link>
      </div>
    </main>
  )
}
