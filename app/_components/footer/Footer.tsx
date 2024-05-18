import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-0 bg-neutral text-primary w-full py-10 space-y-10'>
      <div className='flex justify-around items-start'>
        <div className='flex space-y-2 flex-col justify-center items-center'>
          <div className='font-bold text-xl'>Company</div>
          <ul>
            <li>About us</li>
            <li>Privacy policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className='flex space-y-2 flex-col justify-center items-center'>
          <div className='font-bold text-xl'>Social</div>
          <ul>
            <li className='flex space-x-1'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg'
                alt=''
                width={15}
                height={15}
              ></Image>
              <p>facebook.com/court4u</p>
            </li>
            <li className='flex space-x-1'>
              <p>instagram.com/court4u</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center'>| © 2024 Court4U |</div>
    </div>
  );
};

export default Footer;
