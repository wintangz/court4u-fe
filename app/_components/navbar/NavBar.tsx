import React from 'react';
import Link from 'next/link';
import { GiDinosaurBones } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const NavLinks = dynamic(() => import('./NavLinks'), { ssr: false });

const NavBar: React.FC = () => {
  return (
    <nav className='fixed z-10 w-full top-0 flex items-center justify-between space-x-16 border-b px-8 h-20 bg-gradient-to-l from-[#6bc945] to-[#22ad5c] border-none'>
      <div className='flex px-36 justify-between w-full'>
        <Link
          href='/'
          className='flex items-center space-x-6 hover:text-primary'
        >
          <Image
            className='w-8 h-8'
            src='/favicon.ico'
            width={100}
            height={100}
            alt='Logo'
          />
          <div className='text-2xl text-secondary font-sans font-bold hover:text-primary'>
            Court4U
          </div>
        </Link>
        <NavLinks />
        {/* <div className='flex space-x-16 items-center'> */}
        {/* <div className='form-control scale-90'>
              <label className='input input-bordered flex items-center gap-2'>
                <input type='text' className='grow' placeholder='Search' />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='w-4 h-4 opacity-70'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                    clipRule='evenodd'
                  />
                </svg>
              </label>
            </div> */}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
