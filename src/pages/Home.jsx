import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import React from 'react'
import { Link } from 'react-router-dom'

const images = [
  {
    src: 'https://promotions.newegg.com/microsoft/24-0071/1920x660_sm.jpg', alt: 'promotions'
  },
  {
    src: 'https://promotions.newegg.com/nepro/22-1681/1920x660_sm.jpg', alt: 'gamers'
  },
  {
    src: 'https://promotions.newegg.com/nepro/23-0253/759x300v2.jpg', alt: 'asrock motherboard'
  }
]

const accesoriesCard = [
  {
    src: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg', alt: 'headset', name: 'Headsets'
  },
  {
    src: 'https://m.media-amazon.com/images/I/618zZ7u3sUL._AC_UY218_.jpg', alt: 'keyboard', name: 'Keyboards'
  },
  {
    src: 'https://m.media-amazon.com/images/I/8189uwDnMkL._AC_UY218_.jpg', alt: 'mice', name: 'Mice'
  },
  {
    src: 'https://m.media-amazon.com/images/I/71wTMO+iQIL._AC_UL320_.jpg', alt: 'chair', name: 'Chairs'
  }

]

const hardwareCard = [
  {
    src: 'https://m.media-amazon.com/images/I/710hyHWebnL._AC_SY450_.jpg', alt: 'motherboard', name: 'Motherboards'
  },
  {
    src: 'https://m.media-amazon.com/images/I/71BGYAPqxiL._AC_SL1500_.jpg', alt: 'PSUs', name: 'PSU'
  },
  {
    src: 'https://m.media-amazon.com/images/I/91FAhElMh8L._AC_SL1500_.jpg', alt: 'SSD', name: 'SSD'
  },
  {
    src: 'https://m.media-amazon.com/images/I/5134NIlgPpS._AC_SL1000_.jpg', alt: 'Ram', name: 'RAM'
  }

]

function Home () {
  return (
    <div className='w-full justify-center flex h-full flex-col items-center mb-14'>
      <Carousel className='flex flex-col w-full  md:w-[40rem] lg:w-[60rem] mt-10 mb-5'>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.alt} className='w-full h-full'>
              <div>
                <Card>
                  <CardContent className='flex p-0 items-center justify-center h-[13rem] sm:h-[18rem] md:h-[20rem] lg:h-[25rem] rounded-md'>
                    <img src={image.src} alt={image.alt} className='w-full h-full object-cover rounded-sm ' />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='flex w-full justify-center gap-4 pt-5'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <div className=' grid grid-cols-2 gap-3 sm:gap-5 mt-5 content-cente mx-2'>
        <Card className='flex items-center flex-col justify-evenly text-center h-[15rem] md:h-[20rem] w-[12rem] sm:w-[15rem] md:w-[18rem] lg:w-[25rem]'>
          <CardContent className='gap-10'>
            <h2 className='text-sm md:text-xl font-semibold'>Deals in PCs</h2>
            <Link className='h-24 w-24 md:h-36 md:w-36 lg:w-44 hover:scale-110 transition-all duration-200' to='/products'>
              <img src='https://m.media-amazon.com/images/I/61svvSjuJ9L._AC_SY355_.jpg' alt='pc gamer' className='object-contain h-full w-full -mt-3' />
              <span className='text-xs text-gray-500/70'>Shop Now</span>
            </Link>
          </CardContent>
        </Card>
        <Card className='flex flex-col items-center justify-evenly text-center h-[15rem] md:h-[20rem] w-[12rem] sm:w-[15rem] md:w-[18rem] lg:w-[25rem]'>
          <CardContent>
            <h2 className='text-sm md:text-xl font-semibold'>Gaming Accesories</h2>
            <div className='grid grid-cols-2 gap-7 md:gap-10'>
              {accesoriesCard.map((item) => {
                return (
                  <Link to='/products' className='h-12 w-14 md:h-20 md:w-20  hover:scale-110 transition-all duration-200' key={item.alt}>
                    <img src={item.src} alt={item.alt} className='object-contain h-full w-full ' />
                    <span className='text-xs text-gray-500/70'>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </CardContent>
        </Card>
        <Card className='flex flex-col items-center justify-evenly text-center h-[15rem] md:h-[20rem] w-[12rem] sm:w-[15rem] md:w-[18rem] lg:w-[25rem]'>
          <CardContent>
            <h2 className='text-sm md:text-xl font-semibold'>Computer Hardware</h2>
            <div className='grid grid-cols-2 gap-7 md:gap-10'>
              {hardwareCard.map((item) => {
                return (
                  <Link to='/products' className='h-12 w-14 md:h-20 md:w-20 hover:scale-110 transition-all duration-200' key={item.alt}>
                    <img src={item.src} alt={item.alt} className='object-contain h-full w-full' />
                    <span className='text-xs text-gray-500/70'>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </CardContent>
        </Card>
        <Card className='flex flex-col items-center justify-evenly text-center h-[15rem] md:h-[20rem] w-[12rem] sm:w-[15rem] md:w-[18rem] lg:w-[25rem]'>
          <CardContent className='gap-10'>
            <h2 className='text-sm md:text-xl font-semibold'>Monitors</h2>
            <Link className='h-24 md:h-36 md:w-36 lg:w-44 hover:scale-110 transition-all duration-200' to='/products'>
              <img src='https://m.media-amazon.com/images/I/71EQFcsElOL._AC_UY218_.jpg' alt='pc gamer' className='object-contain h-full w-full -mt-3' />
              <span className='text-xs text-gray-500/70'>Shop Now</span>
            </Link>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default Home
