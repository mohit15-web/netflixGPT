import React from 'react'
import Header from './Header'
import Login from './Login'

function Body() {
  return (
    <div className='w-full h-[100vh]'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" className='absolute h-screen w-full'/>
      <Header />
      <Login />
    </div>
  )
}

export default Body