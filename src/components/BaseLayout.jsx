import React from 'react'

export default function BaseLayout({children}) {
  return (
    <div className='lg:p-3 relative w-screen lg:flex lg:w-[65%] bg-white h-screen lg:h-[550px] lg:rounded-xl shadow-xl'>
        {children}
    </div>
  )
}
