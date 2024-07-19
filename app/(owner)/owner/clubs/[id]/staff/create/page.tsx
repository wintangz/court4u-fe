'use client';
import { createStaffProfile } from '@/app/_services/ownerService'; // Adjust the path as necessary
import React, { useState } from 'react';

const CreateStaff = () => {
  const [staff, setStaff] = useState({
    fullname: '',
    email: '',
    phone: '',
    // sex: 'other',
    // avatarUrl: '',
    // dateOfBirth: '',
    // status: 'active',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createStaffProfile({
        fullname: staff.fullname,
        email: staff.email,
        phone: staff.phone,
        // sex: staff.sex,
        // avatarUrl: staff.avatarUrl,
        // dateOfBirth: staff.dateOfBirth,
        // status: staff.status,
      });
      console.log(response);
    } catch (error) {
      console.error('Error creating staff profile:', error);
    }
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl mb-4'>Create New Staff Profile</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block mb-1'>Full Name</label>
          <input
            type='text'
            name='fullname'
            value={staff.fullname}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>Email</label>
          <input
            type='email'
            name='email'
            value={staff.email}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>Phone</label>
          <input
            type='text'
            name='phone'
            value={staff.phone}
            onChange={handleChange}
            className='input input-bordered w-full'
          />
        </div>
        {/* <div>
          <label className='block mb-1'>Sex</label>
          <select
            name='sex'
            value={staff.sex}
            onChange={handleChange}
            className='select select-bordered w-full'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </div> */}
        {/* <div>
          <label className='block mb-1'>Avatar URL</label>
          <input
            type='text'
            name='avatarUrl'
            value={staff.avatarUrl}
            onChange={handleChange}
            className='input input-bordered w-full'
          />
        </div> */}
        {/* <div>
          <label className='block mb-1'>Date of Birth</label>
          <input
            type='date'
            name='dateOfBirth'
            value={staff.dateOfBirth}
            onChange={handleChange}
            className='input input-bordered w-full'
          />
        </div> */}
        <button type='submit' className='btn btn-primary'>
          Create Staff Profile
        </button>
      </form>
    </div>
  );
};

export default CreateStaff;
