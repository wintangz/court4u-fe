'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SideBar = () => {
  const pathname = usePathname();
  const [role, setRole] = useState('');

  useEffect(() => {
    const userRole = localStorage.getItem('roles');
    if (userRole) {
      setRole(userRole);
    }
  }, []);

  if (!role) {
    return null;
  }

  return (
    <ul className='fixed menu bg-base-200 w-[21vw] h-screen bg-gradient-to-b to-[#6bc945] from-[#22ad5c] gap-y-2 font-semibold text-base text-white'>
      <li className='w-full bg-slate-900 bg-opacity-40 hover:bg-opacity-75 rounded-xl'>
        <div className='w-full h-full flex'>
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
        </div>
      </li>
      {role === 'ADMIN' && (
        <>
          <li>
            <Link
              href='/admin'
              className={pathname == '/admin' ? 'active' : ''}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href='/admin/users'
              className={pathname == '/admin/users' ? 'active' : ''}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href='/admin/clubs'
              className={pathname == '/admin/clubs' ? 'active' : ''}
            >
              Clubs
            </Link>
          </li>
        </>
      )}
      {role === 'OWNER' && (
        <>
          <li>
            <Link
              href='/owner/clubs'
              className={pathname == '/owner/clubs' ? 'active' : ''}
            >
              Clubs
            </Link>
          </li>
          <li>
            <Link
              href='/owner/staff'
              className={pathname == '/owner/staff' ? 'active' : ''}
            >
              Staff
            </Link>
          </li>
        </>
      )}
      {role === 'STAFF' && (
        <>
          <li>
            <Link
              href='/staff/clubs'
              className={pathname == '/staff/clubs' ? 'active' : ''}
            >
              Clubs
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default SideBar;
