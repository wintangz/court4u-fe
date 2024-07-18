'use client';
import React from 'react';

interface SubscriptionOption {
  id: string;
  name: string;
  duration: number;
  type: string; // 'month' or 'year'
  price: number;
}

interface SubscriptionOptionsProps {
  options: SubscriptionOption[];
}

const SubscriptionOptions: React.FC<SubscriptionOptionsProps> = ({
  options,
}) => {
  const handlePurchase = (optionId: string) => {
    // Handle purchase logic for the selected subscription option
    console.log(`Purchase option with ID ${optionId}`);
    // Add your purchase logic here
  };

  return (
    <div className='mt-4'>
      <h2 className='text-lg font-semibold mb-2'>Member Subscriptions</h2>
      <ul className='divide-y divide-gray-200'>
        {options.map((option: SubscriptionOption, index: number) => (
          <li key={index} className='py-2 flex items-center justify-between'>
            <div>
              <span className='font-semibold'>{option.name}</span>
              <span className='ml-2 text-sm text-gray-500'>
                {option.duration} {option.type}
              </span>
            </div>
            <div className='flex items-center'>
              <div className='text-gray-700'>${option.price.toFixed(2)}</div>
              <button
                onClick={() => handlePurchase(option.id)}
                className='ml-4 bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition duration-200'
              >
                Get
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionOptions;
