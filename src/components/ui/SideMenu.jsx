import React from 'react'
import { Link } from 'react-router-dom'
import { UserCircleIcon, StarIcon } from '@heroicons/react/24/outline'

const links = [
  {
    href: '/',
    name: 'Home',
    icon: <HomeIcon className='h-5 w-5' />,
    id: '1'
  },
  {
    href: '/products',
    name: 'Products',
    icon: <PackageIcon className='h-5 w-5' />,
    id: '2'
  },
  {
    href: '/',
    name: 'Account',
    icon: <UsersIcon className='h-5 w-5' />,
    id: '3'
  },
  {
    href: '/',
    name: 'Services',
    icon: <LineChartIcon className='h-5 w-5' />,
    id: '5'
  },
  {
    href: '/',
    name: 'Give Feedback',
    icon: <StarIcon className='h-5 w-5' />,
    id: '6'
  },
  {
    href: '/',
    name: 'Log In',
    icon: <UserCircleIcon className='h-5 w-5' />,
    id: '4'
  }
]

function SideMenu () {
  return (
    <div className='fixed w-full h-full bg-slate-800/80 z-20 top-0'>

      <div className='border-r bg-gray-100 dark:bg-gray-800/40 absolute top-0 left-0 w-52 md:w-72 h-screen z-20 lg:hidden'>
        <div className='flex flex-col gap-2'>
          <div className='flex h-[60px] items-center justify-center border-b border-slate-600/50 py-20 mx-5'>
            <Link className='flex items-center gap-2 font-semibold' to='/'>
              <Package2Icon className='h-6 w-6' />
              <span className=''>E-Commerce App</span>
            </Link>
          </div>
          <div className=''>
            <nav className='grid items-start px-4 text-sm font-medium border-b border-slate-600/50 mx-5 py-10 gap-2'>
              {
              links.slice(0, 3).map((link) => {
                return (
                  <Link key={link.id} to={link.href} className='flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-500/60 transition-all hover:text-blue-800 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'>{link.icon}{link.name}</Link>
                )
              })
              }
            </nav>
            <nav className='grid items-start px-4 text-sm font-medium border-b border-slate-600/50 mx-5 py-10 gap-2'>
              {
              links.slice(3, 5).map((link) => {
                return (
                  <Link key={link.id} to={link.href} className='flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-500/60 transition-all hover:text-blue-800 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50'>{link.icon}{link.name}</Link>
                )
              })
              }
            </nav>
            <nav className='grid items-start px-4 text-sm font-medium mx-5 py-10 gap-2'>
              {
              links.slice(5, 6).map((link) => {
                return (
                  <Link key={link.id} to={link.href} className='flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-500/60 transition-all hover:text-blue-800 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50 '>{link.icon}{link.name}</Link>
                )
              })
              }
            </nav>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenu

function Package2Icon (props) {
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
        <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' />
        <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9' />
        <path d='M12 3v6' />
      </svg>
    )
  )
}

function HomeIcon (props) {
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
        <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
        <polyline points='9 22 9 12 15 12 15 22' />
      </svg>
    )
  )
}

export function ShoppingCartIcon (props) {
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
        <circle cx='8' cy='21' r='1' />
        <circle cx='19' cy='21' r='1' />
        <path
          d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'
        />
      </svg>
    )
  )
}

function PackageIcon (props) {
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
        <path d='m7.5 4.27 9 5.15' />
        <path
          d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'
        />
        <path d='m3.3 7 8.7 5 8.7-5' />
        <path d='M12 22V12' />
      </svg>
    )
  )
}

function UsersIcon (props) {
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
        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
        <circle cx='9' cy='7' r='4' />
        <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
        <path d='M16 3.13a4 4 0 0 1 0 7.75' />
      </svg>
    )
  )
}

function LineChartIcon (props) {
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
        <path d='M3 3v18h18' />
        <path d='m19 9-5 5-4-4-3 3' />
      </svg>
    )
  )
}
