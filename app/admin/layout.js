import { Roboto, Work_Sans } from 'next/font/google'
import React from 'react'
import '../../app/globals.css';

const roboto = Roboto({
    subsets: ['latin'],
    variable: "--font-roboto"
})

const workSans = Work_Sans({
    subsets: ['latin'],
    variable: "--font-work-sans"
})

export default function RootLayout({children}){
  return (
    <html>
        <body className={`${roboto.variable} ${workSans.variable}`}>
            <h1 className='font-work'>Root layout for Admin.</h1>
            {children}
        </body>
    </html>
  )
}
