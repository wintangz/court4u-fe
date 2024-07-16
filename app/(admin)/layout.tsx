'use client';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ReactNode } from 'react';
import SideBar from '../_components/sidebar/SideBar';
import TopBar from '../_components/sidebar/TopBar';
import { usePathname } from 'next/navigation';

const links: any = [
  { title: 'Dashboard', path: '/admin' },
  { title: 'Users', path: '/admin/users' },
  { title: 'Clubs', path: '/admin/clubs' },
  { title: 'Subscriptions', path: '/admin/subscriptions' },
];

function getTitle(pathname: string) {
  if (pathname != '/admin') {
    pathname =
      pathname.replace('/admin/', '').charAt(0).toUpperCase() +
      pathname.slice(8);

    if (pathname.includes('/')) {
      pathname = 'Update ' + pathname.slice(0, pathname.lastIndexOf('s/'));
    }
  } else {
    pathname = 'Dashboard';
  }
  return pathname;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html data-theme='court4u' lang='en'>
      <body className='flex bg-primary'>
        <SideBar links={links} />
        <div className='flex flex-col w-[75vw]'>
          <div className='z-10'>
            <TopBar title={getTitle(pathname)} />
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
