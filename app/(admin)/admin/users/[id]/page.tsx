'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const User = () => {
  const { id } = useParams();

  return (
    <div>
      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>Full Name</span>
        </div>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
        />
      </label>
      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>Sex</span>
        </div>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
        />
      </label>
      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>Birthday</span>
        </div>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
        />
      </label>
      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>Email</span>
        </div>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
        />
      </label>
      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>Telephone</span>
        </div>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
        />
      </label>
      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>Status</span>
        </div>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered w-full'
        />
      </label>
      <button className='btn btn-neutral mt-4 w-full'>Submit</button>
    </div>
  );
};

export default User;
