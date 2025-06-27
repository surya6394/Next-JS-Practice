import React from 'react'

export default function RootLayout({children}){
  return (
    <html>
        <body>
            <h1>Root layout for Admin.</h1>
            {children}
        </body>
    </html>
  )
}
