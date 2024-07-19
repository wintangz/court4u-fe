'use client';
// import { updateStaffProfile } from '@/app/_services/ownerService'; // Adjust the path as necessary
import { getUser, updateUser } from '@/app/_services/userService';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UpdateStaff = () => {
  const params = useParams();
  const id = params.staffId;
  const [staff, setStaff] = useState({
    fullname: '',
    email: '',
    phone: '',
    sex: 'other',
    avatarUrl: '',
    dateOfBirth: '',
    status: 'disable',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaffProfile = async () => {
      try {
        const response = await getUser(id as string);
        setStaff(response.data.metaData);
        console.log(response.data.metaData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching staff profile:', error);
        setLoading(false);
      }
    };

    fetchStaffProfile();
  }, [id]);

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
      const response = await updateUser({
        fullname: staff.fullname,
        email: staff.email,
        phone: staff.phone,
        sex: staff.sex,
        avatarUrl: staff.avatarUrl,
        dateOfBirth: staff.dateOfBirth,
        status: staff.status,
      });
      console.log(response);
    } catch (error) {
      console.error('Error updating staff profile:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4'>
      <h2 className='text-2xl mb-4'>Update Staff Profile</h2>
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
        <div>
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
        </div>
        <div>
          <label className='block mb-1'>Avatar URL</label>
          <input
            type='text'
            name='avatarUrl'
            value={staff.avatarUrl}
            onChange={handleChange}
            className='input input-bordered w-full'
          />
        </div>
        <div>
          <label className='block mb-1'>Date of Birth</label>
          <input
            type='date'
            name='dateOfBirth'
            value={
              staff.dateOfBirth
                ? new Date(staff.dateOfBirth).toISOString().split('T')[0]
                : ''
            }
            onChange={handleChange}
            className='input input-bordered w-full'
          />
        </div>
        <div>
          <label className='block mb-1'>Status</label>
          <select
            name='status'
            value={staff.status}
            onChange={handleChange}
            className='select select-bordered w-full'
          >
            <option value='active'>Active</option>
            <option value='disable'>Disable</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Update Staff Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateStaff;
