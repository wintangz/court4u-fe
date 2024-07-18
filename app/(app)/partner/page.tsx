import React from 'react';
import SubscriptionCarousel from './Carousel';
import OwnerForm from './OwnerForm';

const Partner: React.FC = () => {
  return (
    <div className='p-6 bg-gray-100 mt-20 min-h-screen'>
      <h1 className='text-5xl font-bold text-center mb-6'>
        How Much Does It Cost to Buy subscription?
      </h1>
      <p className='text-3xl text-center mb-6'>
        Wondering about the cost? We offer competitive rates that save you the hassle of high expenses.
      </p>
      <SubscriptionCarousel />
      <OwnerForm />
    </div>
  );
};


export default Partner;
