import React from 'react';
import { useRouter } from 'next/navigation';

const SubscriptionOptions = ({ options }: { options: any }) => {
  const router = useRouter();

  const handleGetSubscription = (option: any) => {
    const items = [
      {
        id: option.id,
        name: option.name,
        price: option.price,
        detail: option.totalDate + ' days',
        type: 'Subscription',
      },
    ];

    const itemsString = JSON.stringify(items);
    router.push(`/payment?items=${encodeURIComponent(itemsString)}`);
  };

  return (
    <div className='bg-white p-5 rounded-lg shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>Subscription Options</h2>
      {options.map((option: any) => (
        <div key={option.id} className='mb-2 flex items-center space-x-2'>
          <h3 className='text-md font-semibold'>{option.name}</h3>
          <p className='text-gray-600'>{option.totalDate} days</p>
          <p className='text-gray-600'>{option.price.toLocaleString()} VND</p>
          <button
            onClick={() => handleGetSubscription(option)}
            className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'
          >
            Get
          </button>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionOptions;
