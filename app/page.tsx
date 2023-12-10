import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex justify-center items-center flex-col gap-y-4'>
        <h1 className='font-semibold text-2xl'>Vatt Sopheak</h1>
        <Image
          className='rounded-full'
          src='/images/vattsopheak.jpeg'
          width={250}
          height={250}
          alt="vatt sopheak profile image"
        />
        <p className='pt-10'><b>Tel:</b> 010 326 778</p>
        <p><b>Address:</b> Phnom Penh, Cambodia</p>
        <Link className='flex flex-row' target="blank" href='https://instagram.com/vattsopheak/'>
          <Image
            src='/images/instagram.png'
            width={24}
            height={24}
            alt="vatt sopheak instagram page"
          />
          <span className='ml-2'>instagram.com/vattsopheak</span>
        </Link>
      </div>
    </main>
  )
}
