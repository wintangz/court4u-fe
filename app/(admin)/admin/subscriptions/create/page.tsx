'use client';
import { addClubSubscription } from '@/app/_services/subscriptionService';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateSubscription = () => {
  const [subscription, setSubscription] = useState({
    name: '',
    price: 0,
    totalDate: 0,
    type: 'Month',
    status: 'active',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setSubscription({
      ...subscription,
      [name]: name === 'price' || name === 'totalDate' ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await addClubSubscription(subscription);
      console.log(response);
      toast.success('Subscription created successfully!', {
        position: 'bottom-right',
      });
    } catch (error) {
      console.error('Error creating subscription:', error);
      toast.error('Error creating subscription. Please try again.', {
        position: 'bottom-right',
      });
    }
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl mb-4'>Create New Subscription</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label className='block mb-1'>Name</label>
          <input
            type='text'
            name='name'
            value={subscription.name}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>Price</label>
          <input
            type='number'
            name='price'
            value={subscription.price}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>Duration</label>
          <input
            type='number'
            name='totalDate'
            value={subscription.totalDate}
            onChange={handleChange}
            className='input input-bordered w-full'
            required
          />
        </div>
        <div>
          <label className='block mb-1'>Type</label>
          <select
            name='type'
            value={subscription.type}
            onChange={handleChange}
            className='select select-bordered w-full'
          >
            <option value='Month'>Month</option>
            <option value='Year'>Year</option>
          </select>
        </div>
        <div>
          <label className='block mb-1'>Status</label>
          <select
            name='status'
            value={subscription.status}
            onChange={handleChange}
            className='select select-bordered w-full'
          >
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Create Subscription
        </button>
      </form>
      <ToastContainer position='bottom-right' />
    </div>
  );
};

export default CreateSubscription;
