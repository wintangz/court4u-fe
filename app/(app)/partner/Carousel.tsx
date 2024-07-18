"use client";

import React, { useState } from 'react';

interface SubscriptionCardProps {
  title: string;
  features: string[];
  price: number;
  buttonText: string;
  duration: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  title,
  features,
  price,
  buttonText,
  duration,
}) => (
  <div className='p-4 bg-white rounded shadow-md flex flex-col items-center justify-center h-128'>
    <h3 className='text-xl font-bold mb-2'>{title}</h3>
    <ul className='list-disc pl-5 mb-4'>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <p className='text-2xl font-bold mb-4'>${price} / {duration}</p>
    <button className='bg-blue-500 text-white py-2 px-4 rounded'>
      {buttonText}
    </button>
  </div>
);

const SubscriptionCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const subscriptions = [
    {
      title: 'Monthly Badminton Guide',
      features: ['Basic Techniques', 'Rules of the Game', 'Training Tips'],
      price: 10,
      buttonText: 'Subscribe Now',
      duration: 'month',
    },
    {
      title: 'Weekly Fixed Schedule',
      features: ['Advanced Techniques', 'Game Strategies', 'Fitness Tips'],
      price: 25,
      buttonText: 'Subscribe Now',
      duration: 'week',
    },
    {
      title: 'Flexible Schedule',
      features: ['Professional Techniques', 'Match Analysis', 'Diet Plans'],
      price: 50,
      buttonText: 'Subscribe Now',
      duration: 'flexible',
    },
  ];

  const prev = () =>
    setCurrentIndex((curr) => (curr === 0 ? subscriptions.length - 1 : curr - 1));

  const next = () =>
    setCurrentIndex((curr) => (curr === subscriptions.length - 1 ? 0 : curr + 1));

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="carousel w-full max-w-2xl relative h-128">
        <div className="carousel-item relative w-full">
          <div className="overflow-hidden">
            <div
              className="whitespace-nowrap transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {subscriptions.map((sub, index) => (
                <div key={index} className="inline-block w-full">
                  <SubscriptionCard {...sub} />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={prev} className="btn btn-circle">❮</button>
            <button onClick={next} className="btn btn-circle">❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCarousel;
