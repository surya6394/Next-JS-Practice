import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-[10px] font-thin'>Come let's join this course.</h1>
        <Link href='/about/teams'>
          <button className="px-3 py-1.5 text-slate-50 rounded-lg bg-orange-600">About Team</button>
        </Link>
    </div>
  )
}

export default page