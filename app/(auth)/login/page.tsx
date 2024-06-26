'use client';
import { login } from '@/app/_services/userService';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

type UserInfo = {
  email: string;
  password: string;
};

const Login = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    login({
      email: userInfo.email,
      password: userInfo.password,
    });
  };

  return (
    <div className=''>
      <div className='flex flex-col relative w-[50vw] min-h-[100vh] bg-secondary py-16 px-4 text-center '>
        <Link href='/' className='absolute left-0 top-0 p-4'>
          <IoIosArrowBack className='size-8' />
        </Link>
        <div className=''>
          <div className='title text-[40px] font-bold '>
            <p className='text-[neutral]'>Login</p>
          </div>
          <p className='text-[neutral] text-lg tracking-[0.2px] leading-6 text-center my-4 mx-36'>
            Welcome back to Court4U!
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg'>Email</span>
            </div>
            <input
              type='text'
              placeholder='Enter your email address'
              className='input input-bordered input-ghost w-full max-w-sm'
              onChange={(e) => {
                userInfo.email = e.target.value;
                setUserInfo(userInfo);
              }}
            />
          </label>
          <br />
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg'>Password</span>
            </div>
            <input
              type='password'
              placeholder='Enter your password'
              className='input input-bordered input-ghost w-full max-w-sm'
              onChange={(e) => {
                userInfo.password = e.target.value;
                setUserInfo(userInfo);
              }}
            />
          </label>
        </div>
        <br />
        <div className='flex flex-col items-center'>
          <button className='text-btn gap-4 hover:text-[#4f7d6f]'>
            Forgot Password?
          </button>
          <button
            onClick={() => handleLogin()}
            className='w-[54%] my-8 rounded-lg btn hover:shadow-[0_1px_0px_rgb(0,0,0)] text-[#ffffff] text-md bg-[#4f7d6f] ease-out hover:translate-y-1 transition-all hover:bg-[#2d4242]'
          >
            Login
          </button>
        </div>

        <div>
          <div className='relative'>
            <span className='absolute left-40 top-4 -translate-y-1/2 w-[54%] h-[1px] bg-[#1a1616]' />
            <span className='flex items-center justify-center relative z-10 w-8 h-[23px] m-auto bg-secondary'>
              or
            </span>
          </div>
        </div>

        <div className='flex justify-between mt-[30px] mb-9 mx-36'>
          <div className='text-[14px] gap-[15px] border border-black w-[45%] rounded-[23px] text-neutral flex p-2 justify-center items-center font-semibold hover:bg-[#c6c6c6a1] hover:text-black hover:cursor-pointer'>
            <img className='icon w-4' alt='Google' src='../assets/google.png' />
            Login with Google
          </div>
          <div className='text-[14px] gap-[15px] border border-black w-[45%]  rounded-[23px] text-neutral flex p-2 justify-center items-center font-semibold hover:bg-[#c6c6c6a1] hover:text-black  hover:cursor-pointer'>
            <img
              className='icon w-4'
              alt='Google'
              src='../assets/facebook.png'
            />
            Login with Facebook
          </div>
        </div>

        <div className='sign_up inline-flex justify-center items-center'>
          <p className='text-neutral'>Don’t have an account?</p>
          <Link
            href='/register'
            className="font-semibold text-green-700 text-sm relative gap-1 px-2 inline-flex after:content-[''] after:absolute after:left-2 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-green-700 after:transition-all hover:after:w-[75%]"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
