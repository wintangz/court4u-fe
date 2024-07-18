import React from 'react';
import SubscriptionCarousel from './Carousel';

const Partner: React.FC = () => {
  return (
    <div className='p-6 bg-gray-100 mt-20 min-h-screen'>
      <h1 className='text-5xl font-bold text-center mb-6'>
        How Much Does It Cost to Book a Badminton Court?
      </h1>
      <p className='text-3xl text-center mb-6'>
        Wondering about the cost? We offer competitive rates that save you the hassle of high expenses. Enjoy playing without worrying about overcharging by buying subscriptions.
      </p>
      <SubscriptionCarousel />
    </div>
  );
};

export default Partner;
