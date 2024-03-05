import { ArchiveBoxIcon, Bars3Icon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

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
    <header className='flex items-center h-14 px-4 md:px-6 lg:px-10 border-b justify-center'>
      {
        showMenu ? <SideMenu /> : ''
      }
      <div className='flex justify-evenly w-full md:max-w-full items-center gap-2'>
        <div className='flex lg:hidden'>
          {
            showMenu
              ? <button onClick={handleClick}><XMarkIcon className='h-6 w-6 relative z-30' /></button>
              : <button onClick={handleClick}><Bars3Icon className='h-6 w-6 relative z-30' /></button>
        }
        </div>
        <Link className='flex items-center gap-2' to='/'>
          <h1 className='font-bold hidden lg:block'>Shop</h1>
          <ArchiveBoxIcon className='h-6 w-6' />
        </Link>
        <form className='flex-1'>
          <div className='relative mx-2 md:mx-6'>
            <MagnifyingGlassIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-300 dark:text-gray-700' />
            <Input className='pl-8 w-full text-sm' placeholder='Search for products' type='search' />
          </div>
        </form>
        <div className='items-center flex space-x-2 ml-auto justify-evenly'>
          <Link className='text-sm hidden md:flex' to='/products'>
            Products
          </Link>
          <Link className='text-sm hidden md:flex' to='/'>
            My Wishlist
          </Link>
          <Link className='text-sm relative flex gap-2' to='/'>
            <ShoppingCartIcon className='h-6 w-6' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
