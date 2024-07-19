'use client';
import { addCourt } from '@/app/_services/courtService';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCourt = () => {
  const [court, setCourt] = useState<{ number: number }>({
    number: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourt({ ...court, [name]: Number(value) });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await addCourt({
        number: court.number,
      });
      console.log(response);
      toast.success('Court created successfully!', {
        position: 'bottom-right',
      });
    } catch (error) {
      console.error('Error creating court:', error);
      toast.error('Error creating court. Please try again.', {
        position: 'bottom-right',
      });
    }
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl mb-4'>Create New Court</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block mb-1'>Number Court</label>
          <input
            type='number'
            name='number'
            value={court.number}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Create Court
        </button>
      </form>
      <ToastContainer position='bottom-right' />
    </div>
  );
};

export default CreateCourt;
