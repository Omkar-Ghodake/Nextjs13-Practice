import React from 'react'
import ProductCart from '../components/ProductCard/ProductCart'

interface User {
  id: number
  name: string
  username: string
  email: string
}

const UsersPage = async () => {
  const response: Response = await fetch(
    'https://jsonplaceholder.typicode.com/users/',
    { cache: 'no-cache' }
  )
  const users: User[] = await response.json()
  const jpeg = 'gochi'
  console.log(jpeg)

  return (
    <div className='p-5'>
      <h1 className='text-2xl'>Users</h1>

      {new Date().toLocaleTimeString()}

      <ul className='list-none'>
        {users.map((user, index) => (
          <li key={user.name}>
            {index + 1}. {user.name}
          </li>
        ))}
      </ul>

      <ProductCart />
    </div>
  )
}

export default UsersPage
