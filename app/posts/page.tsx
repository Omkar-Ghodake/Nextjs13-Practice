import Link from 'next/link'
import React from 'react'

// export const dynamic = 'force-dynamic'

const Posts = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className='container mx-auto'>
      <div className='py-5 flex justify-center'>
        <h1 className='text-center text-4xl text-rose-700 font-bold'>POSTS</h1>

        <Link href={'/newPost'}>
          <button className='btn btn-circle btn-lg btn-primary ml-[50%]'>
            New Post
          </button>
        </Link>
      </div>

      <div className='flex justify-between items-center'>
        {posts.map((post) => (
          <Link
            key={post}
            className='border-2 border-rose-700 rounded-lg p-5 w-fit hover:bg-rose-100 hover:scale-125 duration-150'
            href={`/posts/${post}`}
          >
            <h3 className='text-rose-500 font-bold text-2xl'>POST {post}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Posts
