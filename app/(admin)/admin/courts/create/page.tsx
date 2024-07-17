'use client';
import { getClubs } from '@/app/_services/clubService';
import React, { useEffect, useState } from 'react';

const Create = () => {
  const [court, setCourt] = useState({
    number: '',
    clubId: '',
    status: 'active',
  });

  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await getClubs();
        setClubs(response.data.metaData);
      } catch (error) {
        console.error('Error fetching clubs:', error);
      }
    };

    fetchClubs();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCourt({ ...court, [name]: value });
  };

  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     try {
  //       const response = await createCourt({
  //         number: parseInt(court.number, 10),
  //         clubId: court.clubId,
  //         status: court.status,
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.error('Error creating court:', error);
  //     }
  //   };

  return (
    <div className='p-4'>
      <h2 className='text-2xl mb-4'>Create New Court</h2>
      <form className='space-y-4'>
        <div>
          <label className='block mb-1'>Number</label>
          <input
            type='number'
            name='number'
            value={court.number}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>Club</label>
          <select
            name='clubId'
            value={court.clubId}
            onChange={handleChange}
            className='select select-bordered w-full'
            required
          ></select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Create Court
        </button>
      </form>
    </div>
  );
};

export default Create;
