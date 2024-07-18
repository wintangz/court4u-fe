import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

interface SubscriptionCardProps {
  title: string;
  features: string[];
  price: number;
  buttonText: string;
}

const SubscriptionCard: React.FC<any> = ({
  title,
  features,
  price,
  buttonText,
}) => (
  <div className='p-4 bg-white rounded shadow-md'>
    <h3 className='text-xl font-bold mb-2'>{title}</h3>
    <ul className='list-disc pl-5 mb-4'>
      {features.map((feature: any, index: number) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <p className='text-2xl font-bold mb-4'>${price}</p>
    <button className='bg-blue-500 text-white py-2 px-4 rounded'>
      {buttonText}
    </button>
  </div>
);

const SubscriptionCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const subscriptions = [
    {
      title: 'Waves 1 Module Start',
      features: ['10 Features', 'Starts at $100/month', '16.66% Discount'],
      price: 100,
      buttonText: 'Buy Now',
    },
    {
      title: 'Waves 2 Bundle',
      features: ['20 Features', 'Starts at $250/month', '16.66% Discount'],
      price: 250,
      buttonText: 'Buy Now',
    },
    {
      title: "Get 'Em All! 30 Features",
      features: ['30 Features', 'Starts at $500/month', '16.66% Discount'],
      price: 500,
      buttonText: 'Buy Now',
    },
  ];

  return (
    <div {...settings}>
      {subscriptions.map((sub, index) => (
        <SubscriptionCard key={index} {...sub} />
      ))}
    </div>
  );
};

export default SubscriptionCarousel;
