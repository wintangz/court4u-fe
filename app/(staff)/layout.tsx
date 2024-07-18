'use client';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import SideBar from '../_components/sidebar/SideBar';
import TopBar from '../_components/sidebar/TopBar';
import '../globals.css';

const links: any = [{ title: 'Check In', path: '/staff/checkin' }];

export default function StaffLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const getTitle = (pathname: string) => {
    const baseTitle = pathname.replace('/owner/', '');
    return baseTitle.charAt(0).toUpperCase() + baseTitle.slice(1);
  };

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
