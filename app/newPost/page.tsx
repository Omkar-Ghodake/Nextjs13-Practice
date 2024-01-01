'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const NewPost = () => {
  const [notify, setNotify] = useState(false)
  const [formData, setFormData] = useState({ title: '', content: '' })

  // e: React.FormEvent<HTMLFormElement>
  const addPost = (e: React.FormEvent) => {
    e.preventDefault()

    setNotify(true)

    document.querySelector('form')!.reset()

    setTimeout(() => {
      setNotify(false)
    }, 2000)
  }

  // const addPost = (formData: FormData) => {
  //   let title = formData.get('title')
  //   console.log('🚀 ~ file: page.tsx:21 ~ addPost ~ title:', title)
  // }

  const onChange = (e: React.FormEvent) => {
    setFormData({
      ...formData,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    })

    console.log(formData)
  }

  return (
    <div>
      <div
        role='alert'
        className={`alert absolute w-1/4 left-10 bottom-10 ${
          !notify ? 'scale-x-0' : 'scale-x-100'
        } origin-top-left duration-150 ease-out`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-current shrink-0 h-10 w-10'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span className='text-xl'>Post Successful!!</span>
      </div>

      <h1 className='text-center text-4xl text-rose-500 font-bold mb-10'>
        New Post
      </h1>
      <form
        onSubmit={addPost}
        className='flex flex-col space-y-10 justify-center items-center bg-white w-fit mx-auto shadow-lg rounded-lg p-10'
      >
        <div className='relative group flex flex-col justify-center items-start text-xl'>
          <input
            type='text'
            name='title'
            id='title'
            className='input-secondary input-md border rounded-md text-xl'
            required
            onChange={onChange}
          />

          <label
            htmlFor='title'
            className={`absolute text-base text-slate-500 left-4 ${
              formData.title.length > 0
                ? `translate-x-2 -translate-y-6 px-1 text-lg text-black`
                : 'group-focus-within:translate-x-2 group-focus-within:-translate-y-6 group-focus-within:px-1 group-focus-within:text-lg group-focus-within:text-black'
            } bg-white duration-200 select-none`}
          >
            Title
          </label>
        </div>

        <div className='relative group flex flex-col justify-center items-start text-xl'>
          <label
            htmlFor='content'
            className={`absolute text-base text-slate-500 left-4 ${
              formData.content.length > 0
                ? `translate-x-2 -translate-y-6 px-1 text-lg text-black`
                : 'group-focus-within:translate-x-2 group-focus-within:-translate-y-6 group-focus-within:px-1 group-focus-within:text-lg group-focus-within:text-black'
            } bg-white duration-200 select-none`}
          >
            Content
          </label>
          <input
            type='text'
            name='content'
            id='content'
            className='input-secondary input-md border rounded-md text-xl'
            required
            onChange={onChange}
          />
        </div>

        <button className='btn btn-secondary btn-md btn-block' role='submit'>
          POST
        </button>
      </form>
    </div>
  )
}

export default NewPost
