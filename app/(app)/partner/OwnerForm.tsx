'use client';

import React, { useEffect, useState } from 'react';
import {
  getClubSubscriptions,
  buyClubSubscription,
} from '@/app/_services/subscriptionService';
import { FaPlus, FaTrash } from 'react-icons/fa';

interface SubscriptionCardProps {
  title: string;
  features: string[];
  price: number;
  duration: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  features,
  price,
  duration,
}) => (
  <div className='p-4 bg-white rounded shadow-md flex flex-col items-center justify-center h-128'>
    <h3 className='text-xl font-bold mb-2'>{title}</h3>
    <ul className='list-disc pl-5 mb-4'>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <p className='text-2xl font-bold mb-4'>
      ${price} / {duration}
    </p>
  </div>
);

const OwnerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    clubName: '',
    address: '',
    district: '',
    cityOfProvince: '',
    description: '',
    preOrder: '',
    subscriptionForClubId: '',
  });

  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await getClubSubscriptions();
        setSubscriptions(response.data.metaData);
        setFormData({
          ...formData,
          subscriptionForClubId: response.data[0]?.id || '',
        });
      } catch (error) {
        console.error('Failed to fetch subscriptions:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  console.log(subscriptions);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await buyClubSubscription(formData);
      console.log('Subscription purchased successfully:', formData);
    } catch (error) {
      console.error('Failed to purchase subscription:', error);
    }
  };

  const prev = () =>
    setCurrentIndex((curr) => {
      const newIndex = curr === 0 ? subscriptions.length - 1 : curr - 1;
      setFormData({
        ...formData,
        subscriptionForClubId: subscriptions[newIndex].id,
      });
      return newIndex;
    });

  const next = () =>
    setCurrentIndex((curr) => {
      const newIndex = curr === subscriptions.length - 1 ? 0 : curr + 1;
      setFormData({
        ...formData,
        subscriptionForClubId: subscriptions[newIndex].id,
      });
      return newIndex;
    });

  return (
    <>
      <div className='flex justify-center items-center my-10'>
        <div className='carousel w-full max-w-2xl relative h-128'>
          <div className='carousel-item relative w-full'>
            <div className='overflow-hidden'>
              <div
                className='whitespace-nowrap transition-transform duration-500'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {subscriptions.map((sub, index) => (
                  <div key={index} className='inline-block w-full'>
                    <SubscriptionCard {...sub} />
                  </div>
                ))}
              </div>
            </div>
            <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
              <button type='button' onClick={prev} className='btn btn-circle'>
                ❮
              </button>
              <button type='button' onClick={next} className='btn btn-circle'>
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className='max-w-lg mx-auto p-4 bg-white rounded shadow-md'
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='fullname'
          >
            Full Name
          </label>
          <input
            type='text'
            id='fullname'
            name='fullname'
            value={formData.fullname}
            onChange={handleChange}
            placeholder='Enter your Full Name'
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your Email'
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='phone'
          >
            Phone
          </label>
          <input
            type='text'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Enter your Phone Number'
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='clubName'
          >
            Club Name
          </label>
          <input
            type='text'
            id='clubName'
            name='clubName'
            value={formData.clubName}
            onChange={handleChange}
            placeholder='Enter your Club Name'
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='address'
          >
            Address
          </label>
          <input
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            placeholder='Enter your Club Address'
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='district'
          >
            District
          </label>
          <input
            type='text'
            id='district'
            name='district'
            value={formData.district}
            onChange={handleChange}
            placeholder='Enter your Club District'
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='cityOfProvince'
          >
            City/Province
          </label>
          <input
            type='text'
            id='cityOfProvince'
            name='cityOfProvince'
            value={formData.cityOfProvince}
            onChange={handleChange}
            placeholder='Enter your Club City/Province'
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='description'
          >
            Description
          </label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Enter a Description'
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='preOrder'
          >
            Pre-Order
          </label>
          <input
            type='text'
            id='preOrder'
            name='preOrder'
            value={formData.preOrder}
            onChange={handleChange}
            placeholder='Enter Pre-Order Details'
            className='shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 text-gray-900 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <button
          type='submit'
          className='bg-green-500 text-white py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default OwnerForm;
