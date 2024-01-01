'use client'

import { notFound, useParams } from 'next/navigation'
import React from 'react'

const Post = () => {
  const params = useParams()

  if (params.postId === undefined) notFound()

  return (
    <div className='container mx-auto'>
      <div className='w-1/2 mx-auto space-y-10'>
        <h1 className='text-red-500 text-4xl text-center border-b border-gray-400 w-fit mx-auto px-5 py-2 font-bold'>
          POST {params.postId}
        </h1>

        <p className='text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          sapiente corrupti asperiores quas aperiam nisi a sequi at? Totam
          ratione inventore fuga laudantium reprehenderit suscipit et, itaque
          numquam eaque eligendi?
        </p>
      </div>
    </div>
  )
}

export default Post
