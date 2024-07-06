'use client';
import { createdClub } from '@/app/_services/clubService';
import React, { useState } from 'react';

const Create = () => {
  const [club, setClub] = useState({
    name: '',
    address: '',
    district: '',
    cityOfProvince: '',
    logoUrl: '',
    description: '',
    status: 'active',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setClub({ ...club, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createdClub({
        name: club.name,
        address: club.address,
        district: club.district,
        cityOfProvince: club.cityOfProvince,
        logoUrl: club.logoUrl,
        description: club.description,
        status: club.status,
      });
      console.log(response);
    } catch (error) {
      console.error('Error creating club:', error);
    }
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl mb-4'>Create New Club</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block mb-1'>Name</label>
          <input
            type='text'
            name='name'
            value={club.name}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>Address</label>
          <input
            type='text'
            name='address'
            value={club.address}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>District</label>
          <input
            type='text'
            name='district'
            value={club.district}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>City/Province</label>
          <input
            type='text'
            name='cityOfProvince'
            value={club.cityOfProvince}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>Logo URL</label>
          <input
            type='text'
            name='logoUrl'
            value={club.logoUrl}
            onChange={handleChange}
            className='input input-bordered w-full'
          />
        </div>
        <div>
          <label className='block mb-1'>Description</label>
          <textarea
            name='description'
            value={club.description}
            onChange={handleChange}
            className='textarea textarea-bordered w-full'
          />
        </div>
        {/* <div>
          <label className='block mb-1'>Status</label>
          <select
            name='status'
            value={club.status}
            onChange={handleChange}
            className='select select-bordered w-full'
          >
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
          </select>
        </div> */}
        <button type='submit' className='btn btn-primary'>
          Create Club
        </button>
      </form>
    </div>
  );
};

export default Create;
