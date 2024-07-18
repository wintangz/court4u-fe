import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-gray-800 text-white p-4'>
        <nav>
          <ul className='flex justify-center space-x-4'>
            <li>
              <a href='/' className='hover:underline'>
                Home
              </a>
            </li>
            <li>
              <a href='/about' className='hover:underline'>
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='flex-grow p-8 bg-gray-100'>
        <section className='mb-12 p-6 border-2 border-black bg-white'>
          <h1 className='text-4xl font-bold mb-1'>About Us</h1>
          <p className='text-lg font-normal mb-1 '>
            Welcome to Court4U! We are dedicated to providing the best court
            booking experience for our users. Our mission is to simplify the
            process of finding and booking sports courts. Whether you are a
            casual player looking for a game, a club manager scheduling
            tournaments, or a coach arranging training sessions, our platform is
            designed to meet your needs. Founded in 2024, we have quickly grown
            to become a trusted resource for sports enthusiasts everywhere. Our
            commitment to excellence and customer satisfaction is at the heart
            of everything we do.
          </p>
          <div className='relative min-h-screen'>
            <img
              src='https://badmintonw.com/uploads/images/san-cau-long-dai-hoc-su-pham-ha-noi.png'
              alt='San Cau Long'
              className='absolute inset-0 w-full h-full object-cover z-0'
            />
            <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-50'>
              <div className='flex items-center space-x-6 p-4 border-2 border-gray-300 bg-white shadow-lg'>
                <Link
                  href='/login'
                  className='flex items-center space-x-6 text-3xl hover:bg-red-700 p-2 rounded'
                >
                  Book Your Court Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-gray-800 text-white p-4 text-center'>
        <p>2024 Our Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
