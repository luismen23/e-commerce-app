import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer className='w-full py-4 bg-gray-100 flex'>
      <div
        className='flex flex-col gap-3 text-sm text-gray-500 md:text-base md:px-6 dark:text-gray-400 w-full lg:gap-y-10'
      >

        <div className='flex w-full justify-evenly max-w-[20rem] md:max-w-[40rem] lg:max-w-[60rem] mx-auto gap-x-10 lg:gap-x-20'>
          <div className='hidden md:block'>
            <p className='font-semibold uppercase tracking-wide mb-2'>About Us</p>
            <p className='text-sm text-justify'>
              Your one-stop shop for the best products. We are dedicated to providing high-quality items with excellent
              service.
            </p>
          </div>

          <div className=''>
            <p className='font-semibold uppercase tracking-wide mb-2'>Contact Us</p>
            <div className='flex items-center gap-2 text-sm'>
              <PhoneIcon className='w-4 h-4 flex-shrink-0' />
              <span>1-800-123-4567</span>
            </div>
            <div className='flex items-center gap-2'>
              <EnvelopeIcon className='w-4 h-4 flex-shrink-0 text-sm' />
              <Link className='underline' href='#'>
                info@example.com
              </Link>
            </div>
          </div>

          <div className=''>
            <p className='font-semibold uppercase tracking-wide mb-2'>Categories</p>
            <ul className='text-sm grid grid-cols-2 gap-x-5 sm:gap-x-10'>
              <li>
                <Link className='hover:underline' href='#'>
                  Hardware
                </Link>
              </li>
              <li>
                <Link className='hover:underline' href='#'>
                  Desktop
                </Link>
              </li>
              <li>
                <Link className='hover:underline' href='#'>
                  Laptos
                </Link>
              </li>
              <li>
                <Link className='hover:underline' href='#'>
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex w-full justify-evenly gap-8 max-w-[20rem] md:max-w-[40rem] mx-auto'>
          <div
            className='flex items-center gap-1 md:gap-4 '
          >
            <Link
              className='rounded-lg inline-flex w-8 h-8 items-center justify-center border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50'
              to='/'
            >
              <FacebookIcon className='w-4 h-4' />
              <span className='sr-only'>Facebook</span>
            </Link>
            <Link
              className='rounded-lg inline-flex w-8 h-8 items-center justify-center border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50'
              to='/'
            >
              <InstagramIcon className='w-4 h-4' />
              <span className='sr-only'>Instagram</span>
            </Link>
            <Link
              className='rounded-lg inline-flex w-8 h-8 items-center justify-center border border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50'
              to='/'
            >
              <TwitterIcon className='w-4 h-4' />
              <span className='sr-only'>Twitter</span>
            </Link>
            <Link
              className='rounded-lg inline-flex w-8 h-8 items-center justify-center border  border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50'
              to='/'
            >
              <PinIcon className='w-4 h-4' />
              <span className='sr-only'>Pinterest</span>
            </Link>
          </div>
          <div className=' px-1 text-center items-center'>
            <span className='text-[0.8rem] md:text-sm '>© 2024 Luis Mendoza All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon (props) {
  return (
    (
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
        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
      </svg>
    )
  )
}

function InstagramIcon (props) {
  return (
    (
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
        <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
        <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
      </svg>
    )
  )
}

function TwitterIcon (props) {
  return (
    (
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
        <path
          d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'
        />
      </svg>
    )
  )
}

function PinIcon (props) {
  return (
    (
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
        <line x1='12' x2='12' y1='17' y2='22' />
        <path
          d='M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z'
        />
      </svg>
    )
  )
}

export default Footer
