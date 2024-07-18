'use client';
import { changePassword } from '@/app/_services/userService';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');

  if (typeof window !== 'undefined') {
    localStorage.setItem('accessToken', accessToken as string);
    localStorage.setItem('refreshToken', refreshToken as string);
  }

  const handleChangePassword = () => {
    if (password === confirmPassword) {
      // Send the request to change the password
      // You can use your preferred method to send the request, e.g., fetch, axios, etc.
      const result = changePassword(password);
      result.then((res) => {
        if (res.status === 200) {
          router.push('/');
        } else {
          alert('Failed to change password');
        }
      });
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Change Password</h2>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter new password'
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='confirmPassword'
          >
            Confirm Password
          </label>
          <input
            type='password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Confirm new password'
          />
        </div>
        <button
          onClick={handleChangePassword}
          className='w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
