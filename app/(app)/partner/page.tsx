import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// interface SubscriptionCardProps {
//   title: string;
//   features: string[];
//   price: number;
//   buttonText: string;
// }


// const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ title, features, price, buttonText }) => (
//   <div className="p-4 bg-white rounded shadow-md">
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     <ul className="list-disc pl-5 mb-4">
//       {features.map((feature, index) => (
//         <li key={index}>{feature}</li>
//       ))}
//     </ul>
//     <p className="text-2xl font-bold mb-4">${price}</p>
//     <button className="bg-blue-500 text-white py-2 px-4 rounded">{buttonText}</button>
//   </div>
// );

// const SubscriptionCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const subscriptions = [
//     {
//       title: "Waves 1 Module Start",
//       features: ["10 Features", "Starts at $100/month", "16.66% Discount"],
//       price: 100,
//       buttonText: "Buy Now",
//     },
//     {
//       title: "Waves 2 Bundle",
//       features: ["20 Features", "Starts at $250/month", "16.66% Discount"],
//       price: 250,
//       buttonText: "Buy Now",
//     },
//     {
//       title: "Get 'Em All! 30 Features",
//       features: ["30 Features", "Starts at $500/month", "16.66% Discount"],
//       price: 500,
//       buttonText: "Buy Now",
//     },
//   ];

//   return (
//     <Slider {...settings}>
//       {subscriptions.map((sub, index) => (
//         <SubscriptionCard key={index} {...sub} />
//       ))}
//     </Slider>
//   );
// };

// const Partner = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6">How Much Does It Cost?</h1>
//       <p className="text-center mb-6">So what does it cost? We're saving you the hassle of tens or hundreds of thousands of dollars and doing it all fast, but don't worry, we're not overcharging you.</p>
//       <SubscriptionCarousel />
//     </div>
//   );
// }; 

interface SubscriptionCardProps {
  title: string;
  features: string[];
  price: number;
  buttonText: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ title, features, price, buttonText }) => (
  <div className="p-4 bg-white rounded shadow-md">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <ul className="list-disc pl-5 mb-4">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <p className="text-2xl font-bold mb-4">${price}</p>
    <button className="bg-blue-500 text-white py-2 px-4 rounded">{buttonText}</button>
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
      title: "Waves 1 Module Start",
      features: ["10 Features", "Starts at $100/month", "16.66% Discount"],
      price: 100,
      buttonText: "Buy Now",
    },
    {
      title: "Waves 2 Bundle",
      features: ["20 Features", "Starts at $250/month", "16.66% Discount"],
      price: 250,
      buttonText: "Buy Now",
    },
    {
      title: "Get 'Em All! 30 Features",
      features: ["30 Features", "Starts at $500/month", "16.66% Discount"],
      price: 500,
      buttonText: "Buy Now",
    },
  ];

  return (
    <Slider {...settings}>
      {subscriptions.map((sub, index) => (
        <SubscriptionCard key={index} {...sub} />
      ))}
    </Slider>
  );
};

const Partner: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 mt-20 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">How Much Does It Cost?</h1>
      <p className="text-center mb-6">So what does it cost? We're saving you the hassle of tens or hundreds of thousands of dollars and doing it all fast, but don't worry, we're not overcharging you.</p>
      <SubscriptionCarousel />
    </div>
  );
};

export default Partner;


// function Partner() {

//   // interface SubscriptionCardProps {
//   //   title: string;
//   //   features: string[];
//   //   price: number;
//   //   buttonText: string;
//   // }
  
  
//   // const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ title, features, price, buttonText }) => (
//   //   <div className="p-4 bg-white rounded shadow-md">
//   //     <h3 className="text-xl font-bold mb-2">{title}</h3>
//   //     <ul className="list-disc pl-5 mb-4">
//   //       {features.map((feature, index) => (
//   //         <li key={index}>{feature}</li>
//   //       ))}
//   //     </ul>
//   //     <p className="text-2xl font-bold mb-4">${price}</p>
//   //     <button className="bg-blue-500 text-white py-2 px-4 rounded">{buttonText}</button>
//   //   </div>
//   // );
  
//   // const SubscriptionCarousel = () => {
//   //   const settings = {
//   //     dots: true,
//   //     infinite: true,
//   //     speed: 500,
//   //     slidesToShow: 1,
//   //     slidesToScroll: 1,
//   //   };
  
//   //   const subscriptions = [
//   //     {
//   //       title: "Waves 1 Module Start",
//   //       features: ["10 Features", "Starts at $100/month", "16.66% Discount"],
//   //       price: 100,
//   //       buttonText: "Buy Now",
//   //     },
//   //     {
//   //       title: "Waves 2 Bundle",
//   //       features: ["20 Features", "Starts at $250/month", "16.66% Discount"],
//   //       price: 250,
//   //       buttonText: "Buy Now",
//   //     },
//   //     {
//   //       title: "Get 'Em All! 30 Features",
//   //       features: ["30 Features", "Starts at $500/month", "16.66% Discount"],
//   //       price: 500,
//   //       buttonText: "Buy Now",
//   //     },
//   //   ];
  
//   //   return (
//   //     <Slider {...settings}>
//   //       {subscriptions.map((sub, index) => (
//   //         <SubscriptionCard key={index} {...sub} />
//   //       ))}
//   //     </Slider>
//   //   );
//   // };

//   const Partner = () => {
//     return (
//       <div className="p-6 bg-gray-100 min-h-screen">
//         <h1 className="text-3xl font-bold text-center mb-6">How Much Does It Cost?</h1>
//         <p className="text-center mb-6">So what does it cost? We're saving you the hassle of tens or hundreds of thousands of dollars and doing it all fast, but don't worry, we're not overcharging you.</p>
//         {/* <SubscriptionCarousel /> */}
//       </div>
//     );
//   }; 



//   return (
//     <div>
//       {Partner()}
//       fdsfsfsdf
//     </div>
//   )
// }

// export default Partner