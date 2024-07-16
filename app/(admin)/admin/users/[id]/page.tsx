'use client';
import { getUser } from '@/app/_services/userService';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>({
    fullName: '',
    sex: '',
    birthday: '',
    email: '',
    telephone: '',
    status: '',
  });

  useEffect(() => {
    const data = getUser(id as string);

    data.then((result: any) => {
      setUser(result.data.metaData);
    });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser: any) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <label className='form-control w-full'>
        <div className='label'>
          <span className='label-text'>Full Name</span>
        </div>
        <input
          type='text'
          name='fullName'
          value={user.fullName}
          onChange={handleChange}
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
          name='sex'
          value={user.sex}
          onChange={handleChange}
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
          name='birthday'
          value={user.birthday}
          onChange={handleChange}
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
          name='email'
          value={user.email}
          onChange={handleChange}
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
          name='telephone'
          value={user.telephone}
          onChange={handleChange}
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
          name='status'
          value={user.status}
          onChange={handleChange}
          placeholder='Type here'
          className='input input-bordered w-full'
        />
      </label>
      <button className='btn btn-neutral mt-4 w-full'>Submit</button>
    </div>
  );
};

export default User;
