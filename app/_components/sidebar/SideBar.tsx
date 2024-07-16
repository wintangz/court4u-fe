'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SideBar: React.FC<{ links: any }> = ({ links }) => {
  const pathname = usePathname();

  return (
    <ul className='fixed menu bg-base-200 w-[21vw] h-screen bg-gradient-to-b to-[#6bc945] from-[#22ad5c] gap-y-2 font-semibold text-base text-white'>
      <li className='w-full bg-slate-900 bg-opacity-40 hover:bg-opacity-75 rounded-xl'>
        <Link href='/' className='w-full h-full flex'>
          <Image
            className='w-9 h-9 hover:bg-none hover:shadow-none'
            src='/favicon.ico'
            width={100}
            height={100}
            alt='Logo'
          />
          <div className='text-xl text-secondary font-sans font-bold hover:text-primary'>
            Court4U
          </div>
        </Link>
      </li>

      {links.map((link: any, index: number) => (
        <li key={index}>
          <Link
            href={link.path}
            className={pathname == link.path ? 'active' : ''}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBar;
