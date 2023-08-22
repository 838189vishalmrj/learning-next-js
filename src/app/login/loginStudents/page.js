"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
   const router =  useRouter();
  return (
    <div>
        <h1>Students Login Page</h1>
        <br />
        <button onClick={()=>router.push('/login')}>Go to login page</button>
    </div>
  )
}

export default page