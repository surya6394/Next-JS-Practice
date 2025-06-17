import React from 'react'

const page = () => {
  return (
    <div>
        <form action="">
            <input className='p-1.5 border-gray-300 border  mb-2 rounded-b-lg' type="text" placeholder='Enter your name....' />
            <input className='p-1.5 border-gray-300 border  mb-2 rounded-b-lg' type="text" placeholder='Enter your mobile...' />
            <button className='bg-amber-700 text-slate-50 px-3 py-1.5'>Submit</button>
        </form>
    </div>
  )
}

export default page