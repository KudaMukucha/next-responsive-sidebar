import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Responsive Sidebar',
  description: 'Responsive sidebar component with Next JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex dark:text-white dark:bg-black group:dark:bg-zinc-900 group-hover:dark:bg-zinc-900 group-hover:bg-gray-200'>
          <div><Sidebar/></div>
       <div>{children}</div> 
        </div>
        </body>
    </html>
  )
}
