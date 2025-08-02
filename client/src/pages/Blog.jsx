import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { blog_data } from '../assets/assets'
import Navbar from '../components/Navbar'

const Blog = () => {
  const {id}=useParams()

  const [data, setData]=useState(null)

  const fetchBlogData= async ()=>{
    const data= blog_data.find((item=>item._id===id))
    setData(data)
  }

  useEffect(()=>{
    fetchBlogData()
  },[])

  return data ? (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
<Navbar />
      <div 
      // className='backdrop-blur-sm bg-white/80 rounded-xl shadow-md p-8 mx-auto max-w-2xl mt-12'
      >

      </div>
      <div></div>

    </div>
  ) : <div>Loading...</div>
}

export default Blog