'use client';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ReactNode } from 'react';
import SideBar from '../_components/sidebar/SideBar';
import TopBar from '../_components/sidebar/TopBar';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html data-theme='court4u' lang='en'>
      <body className='flex bg-primary'>
        <SideBar />
        <div className='flex flex-col w-[75vw]'>
          <div className='z-10'>
            <TopBar
              title={
                pathname != '/admin'
                  ? pathname.replace('/admin/', '').charAt(0).toUpperCase() +
                    pathname.slice(8)
                  : 'Dashboard'
              }
            />
          </div>
          <div className='mt-16 ml-80 min-h-screen min-w-full -z-0 p-5'>
            {children}
          </div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
