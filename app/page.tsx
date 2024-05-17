// app/page.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
        <Link className='mr-6 flex items-center' href='#'>
          <Image
            alt='Image'
            className='mr-3'
            height={50}
            src='/Logo.png'
            width={50}
          />
          <span className='text text-xl'>Earth Peace Initiative</span>
        </Link>
      </header>
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-[url('/Hero1.webp')] bg-cover bg-center">
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80' />
        <div className='container  mx-auto relative z-10 text-center space-y-6 px-4 md:px-6'>
          <h1 className='text-4xl md:text-6xl font-bold text-white tracking-tight'>
            Bringing Peacefulness to the World
          </h1>
          <p className='text-lg md:text-xl text-gray-200 max-w-[1200px] mx-auto'>
            The Earth Peace Initiative is dedicated to cultivating a more
            harmonious and sustainable future for all. We believe that by
            fostering a deeper connection with nature and practicing
            mindfulness, we can create a world of greater peace, compassion, and
            understanding.
          </p>
        </div>
      </section>
      <section className='py-12 md:py-24 bg-gray-100'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='space-y-4'>
              <HandIcon className='h-12 w-12 text-green-500' />
              <h3 className='text-2xl font-bold'>Our Mission</h3>
              <p className='text-gray-500'>
                To cultivate a more peaceful and sustainable world through
                education, community engagement, and environmental stewardship.
                We believe that by empowering individuals to live more mindfully
                and connect with the natural world, we can create a ripple
                effect of positive change.
              </p>
            </div>
            <div className='space-y-4'>
              <LeafIcon className='h-12 w-12 text-green-500' />
              <h3 className='text-2xl font-bold'>Sustainable Living</h3>
              <p className='text-gray-500'>
                Learn about eco-friendly practices and how to reduce your carbon
                footprint. From renewable energy solutions to sustainable
                gardening techniques, we offer a wealth of resources to help you
                live in harmony with the planet. By making small, mindful
                changes in our daily lives, we can collectively create a more
                sustainable future.
              </p>
            </div>
            <div className='space-y-4'>
              <HeartIcon className='h-12 w-12 text-green-500' />
              <h3 className='text-2xl font-bold'>Mindfulness Practices</h3>
              <p className='text-gray-500'>
                Explore meditation, and other techniques to cultivate inner
                peace. Through these practices, we can learn to quiet the mind,
                connect with our true selves, and develop a deeper appreciation
                for the natural world around us. By fostering mindfulness, we
                can find greater clarity, resilience, and joy in our daily
                lives, and inspire others to do the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-gray-100 py-8'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <p className='text-sm text-gray-500'>
              © 2024 Earth Peace Initiative
              <br />
              ABN 12671003442
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

function HandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0' />
      <path d='M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2' />
      <path d='M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8' />
      <path d='M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15' />
    </svg>
  )
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
    </svg>
  )
}

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z' />
      <path d='M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' />
    </svg>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  )
}
