export default function RootLayout({children}){
    return(
        <html>
            <body>
                <h2>Welcome to my profile. </h2>
                {children}
            </body>
        </html>
    )
}