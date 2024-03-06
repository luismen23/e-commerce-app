import { ArchiveBoxIcon, Bars3Icon, MagnifyingGlassIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import SideMenu, { ShoppingCartIcon } from './ui/SideMenu'

function Header () {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className='flex flex-col items-center h-24 px-4 md:px-6 lg:px-10 border-b justify-center bg-slate-200/50'>
      {
        showMenu ? <SideMenu /> : ''
      }
      <div className='flex justify-between w-full h-[50%] md:max-w-full items-center '>
        <div className='flex gap-4'>
          <div className='flex lg:hidden'>
            {
              showMenu
                ? <button onClick={handleClick}><XMarkIcon className='h-6 w-6 relative z-30' /></button>
                : <button onClick={handleClick}><Bars3Icon className='h-6 w-6 relative z-30' /></button>
          }
          </div>
          <Link className='flex items-center gap-2' to='/'>
            <h1 className='font-bold lg:block'>E-Commerce App</h1>
            <ArchiveBoxIcon className='h-6 w-6' />
          </Link>
        </div>
        <div className='items-center flex justify-between md:gap-7'>
          <Link className='text-sm hidden md:flex' to='/products'>
            Products
          </Link>
          <Link className='text-sm hidden mr-4 md:flex' to='/'>
            My Wishlist
          </Link>
          <div className='flex w-16 items-center gap-4'>
            <p className='text-sm -mx-3'>Log In </p>
            <UserCircleIcon className='h-6 w-6' />
          </div>
          <Link className='text-sm relative flex gap-2' to='/'>
            <ShoppingCartIcon className='h-6 w-6' />
          </Link>
        </div>
      </div>
      <form className='flex-1 h-[50%] w-full'>
        <div className='relative '>
          <MagnifyingGlassIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-300 dark:text-gray-700' />
          <Input className='pl-8 w-full text-sm' placeholder='Search for products' type='search' />
        </div>
      </form>
    </header>
  )
}

export default Header
