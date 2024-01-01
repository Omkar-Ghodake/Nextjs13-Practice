import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // const isAuth = false

  console.log('it is middleware')
  console.log(request.method)
  console.log(request.url)
  console.log('middleware running.....')

  // if (!isAuth) NextResponse.redirect('/')

  return NextResponse.next()
}

// export const config = {
//   matcher: ['/dashboard', '/account', '/newPost/:path'],
// }
