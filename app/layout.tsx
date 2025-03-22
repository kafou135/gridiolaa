import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyFootballAPP',
  description: 'Football/Soccer Stats, Matches, Team Info App',
  icons:{
    icon:['/khdam.png?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./khdam.ico" type="image/x-icon" sizes='any'/>
      </head>
      <body className={inter.className}>
        <div className='relative bg-black'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img
              src='/background.png'
              alt='backgroundImage'
              className='h-screen w-full object-cover'
            />
          </div>
          <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-b
                          from-black/10 to-black'/>
          <div className='relative'>
            {children}
          </div>
        </div>

      </body>
    </html>
  )
}