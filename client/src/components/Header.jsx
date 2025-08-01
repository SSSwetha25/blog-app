import React from 'react'
import { assets } from "../assets/assets";
const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-20 mb-8'>

            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                <p>New AI feature Integrated</p>
                <img src={assets.star_icon} className='w-3.5' alt="" />
            </div>
            <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Your own <span className='text-primary'>blogging </span><br/> platform.</h1>
        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab non accusantium aliquid reprehenderit voluptatibus, eius nulla nostrum, molestiae ipsa doloremque aperiam recusandae dolore perferendis magni?</p>
        
        <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
          <input type="text" placeholder='Search for blogs' required className='w-full pl-4 outline-none'/>
          <button type="submit" className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
        </form>
        </div>
    <img src={assets.gradientbg} alt="" className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header