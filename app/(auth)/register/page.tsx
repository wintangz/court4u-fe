'use client';

import { register } from '@/app/_services/userService';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';

type UserInfo = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = async () => {
    try {
      if (userInfo.password === userInfo.confirmPassword) {
        const result = await register({
          fullname: userInfo.fullName,
          email: userInfo.email,
          phone: userInfo.phone,
          password: userInfo.password,
        });

        if (result.status === 200) {
          toast.success('Success! Please check your email.', {
            position: 'bottom-right',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'light',
          });
          // Clear form
          setUserInfo({
            fullName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          });
        }
      } else {
        console.log('Password not matched');
      }
    } catch (error) {
      console.error(error);
      if (!toast.isActive('registerError')) {
        toast.error('🦄 Error while registering!', {
          toastId: 'registerError',
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'light',
        });
      }
    }
  };

  useEffect(() => {}, [userInfo]);

  return (
    <div className=''>
      <ToastContainer />
      <div className='flex flex-col relative w-[50vw] min-h-[100vh] bg-secondary py-16 px-4 text-center '>
        <Link href='/' className='absolute left-0 top-0 p-4'>
          <IoIosArrowBack className='size-8' />
        </Link>
        <div className='welcome-back'>
          <div className='title text-[40px] font-bold '>
            <p className='text-[neutral]'>Register</p>
          </div>
          <p className='text-[neutral] text-lg tracking-[0.2px] leading-6 text-center my-4 mx-36'>
            Welcome to Court4U. Join us now!
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg'>Full Name</span>
            </div>
            <input
              type='text'
              placeholder='Enter your full name'
              className='input input-bordered input-ghost w-full max-w-sm'
              value={userInfo.fullName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, fullName: e.target.value })
              }
            />
          </label>
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg'>Email</span>
            </div>
            <input
              type='text'
              placeholder='Enter your email address'
              className='input input-bordered input-ghost w-full max-w-sm'
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </label>
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg'>Phone</span>
            </div>
            <input
              type='text'
              placeholder='Enter your phone number'
              className='input input-bordered input-ghost w-full max-w-sm'
              value={userInfo.phone}
              onChange={(e) =>
                setUserInfo({ ...userInfo, phone: e.target.value })
              }
            />
          </label>
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg'>Password</span>
            </div>
            <input
              type='password'
              placeholder='Enter your password'
              className='input input-bordered input-ghost w-full max-w-sm'
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
          </label>
          <label className='form-control w-full max-w-sm'>
            <div className='label'>
              <span className='label-text text-lg'>Confirm Password</span>
            </div>
            <input
              type='password'
              placeholder='Confirm your password'
              className='input input-bordered input-ghost w-full max-w-sm'
              value={userInfo.confirmPassword}
              onChange={(e) =>
                setUserInfo({ ...userInfo, confirmPassword: e.target.value })
              }
            />
          </label>
        </div>
        <div className='flex flex-col items-center'>
          <button
            onClick={handleRegister}
            className='w-[54%] my-8 rounded-lg btn hover:shadow-[0_1px_0px_rgb(0,0,0)] text-[#ffffff] text-md bg-[#4f7d6f] ease-out hover:translate-y-1 transition-all hover:bg-[#2d4242]'
          >
            Register
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
            Signup with Google
          </div>
          <div className='text-[14px] gap-[15px] border border-black w-[45%]  rounded-[23px] text-neutral flex p-2 justify-center items-center font-semibold hover:bg-[#c6c6c6a1] hover:text-black  hover:cursor-pointer'>
            <img
              className='icon w-4'
              alt='Google'
              src='../assets/facebook.png'
            />
            Signup with Facebook
          </div>
        </div>

        <div className='sign_up inline-flex justify-center items-center'>
          <p className='text-neutral'>Already have an account?</p>
          <Link
            href='/login'
            className="font-semibold text-green-700 text-sm relative gap-1 px-2 inline-flex after:content-[''] after:absolute after:left-2 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-green-700 after:transition-all hover:after:w-[75%]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
