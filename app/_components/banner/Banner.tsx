import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PiArrowElbowDownRightBold } from 'react-icons/pi';

const Banner = () => {
  return (
    <div>
      <Image
        className='select-none'
        src='http://m.gettywallpapers.com/wp-content/uploads/2022/03/Badminton-Laptop-Wallpaper.jpeg'
        alt=''
        width={1920}
        height={1080}
      />
      <div className='absolute text-5xl font-bold text-primary opacity-90 top-64 left-44'>
        <p className='leading-[2.5] select-none'>BOOK YOUR COURT NOW!</p>
        <div className='flex space-x-5 justify-center'>
          <Link href='/clubs' className='btn btn-outline btn-primary w-[21rem]'>
            EXPLORE CLUBS NEAR YOU
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
