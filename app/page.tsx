import React from 'react'
import AddToCart from './components/AddToCart'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='p-5'>
      {/* {new Date().toLocaleTimeString()} */}

      <AddToCart />

      <Image
        src={'https://picsum.photos/200/300'}
        alt='there is an image'
        height={200}
        width={200}
      />
    </div>
  )
}

export default Home
