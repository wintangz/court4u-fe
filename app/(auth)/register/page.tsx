'use client';

import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <div>
      <div className='w-[50vw] min-h-[100vh]  bg-[#129523] py-16 px-4  text-center '>
        <div className='welcome-back'>
          <div className='title text-[40px] font-bold '>
            <p className='text-[#E2E1E1]'>Registration</p>
          </div>
          <p className='text-[#E2E1E1] font-semibold text-lg tracking-[0.2px] leading-6 text-center my-4 mx-36'>
            Your trust in our services is truly appreciated.
            <br /> Let's make every interaction exceptional.
          </p>
        </div>

        <div className='input-field mx-20 '>
          <label className='form-control w-full max-w-screen-sm pl-20 my-2'>
            <div className='label'>
              <span className='label-text font-bold text-[12px] text-[#414141]'>
                Name
              </span>
            </div>
            <input
              type='text'
              placeholder='Your name'
              className='input input-bordered input-md w-[85%] '
            />
          </label>

          <label className='form-control w-full max-w-screen-sm pl-20 my-2'>
            <div className='label'>
              <span className='label-text font-bold text-[12px] text-[#414141]'>
                E-mail
              </span>
            </div>
            <input
              type='text'
              placeholder='Your E-mail address'
              className='input input-bordered input-md w-[85%] '
            />
          </label>

          <label className='form-control w-full max-w-screen-sm pl-20 my-2'>
            <div className='label'>
              <span className='label-text font-bold text-[12px] text-[#414141]'>
                Password
              </span>
            </div>
            <input
              type='password'
              placeholder='Your password'
              className='input input-bordered input-md w-[85%] '
            />
          </label>
        </div>

        <div>
          <button className='w-[56%] my-8 rounded-lg btn shadow-[0_5px_0_rgb(0,0,0)] hover:shadow-[0_1px_0px_rgb(0,0,0)] text-[#485960] bg-[#b6d9e7] ease-out hover:translate-y-1 transition-all'>
            Registration
          </button>
        </div>

        <div>
          <div className='relative'>
            <span className='absolute left-40 top-4 -translate-y-1/2 w-[56%] h-[1px] bg-[#1a1616]' />
            <span className='flex items-center justify-center relative z-10 w-11 h-[23px] m-auto bg-[#129523]'>
              or
            </span>
          </div>
        </div>

        <div className='flex justify-between mt-[30px] mb-9 mx-36 '>
          <div className='text-[14px] gap-[15px] border border-black w-[45%] rounded-[23px] text-white flex py-2 px-[6px] justify-center items-center font-semibold hover:bg-white hover:text-black hover:border-white hover:cursor-pointer'>
            <img className='icon w-4' alt='Google' src='../assets/google.png' />
            Sign up with Google
          </div>
          <div className='text-[14px] gap-[15px] border border-black w-[45%]  rounded-[23px] text-white flex py-2 px-[6px] justify-center items-center font-semibold hover:bg-white hover:text-black hover:border-white hover:cursor-pointer'>
            <img
              className='icon w-4'
              alt='Google'
              src='../assets/facebook.png'
            />
            Sign up with Facebook
          </div>
        </div>

        <div className='sign_up inline-flex justify-center items-center'>
          <p className='text-white'>I already have an account</p>
          <Link
            href='/login'
            className="font-semibold text-sm relative gap-1 px-2 inline-flex after:content-[''] after:absolute after:left-2 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-[75%]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
