import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>This is my Profile.</h1>
        <button>
          <Link href="/">Go To Home</Link>
        </button>
    </div>
  )
}

export default page