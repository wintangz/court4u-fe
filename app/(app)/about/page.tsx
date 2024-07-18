import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow p-8 bg-gray-100 relative">
        <img src="https://badmintonw.com/uploads/images/san-cau-long-dai-hoc-su-pham-ha-noi.png" alt="San Cau Long" className="absolute inset-0 w-full h-full object-cover z-0" />
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="relative z-20 p-6 bg-black bg-opacity-70 rounded text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
            <p className="text-lg font-normal mb-1 text-white">
              Welcome to Court4U! We are dedicated to providing the best court booking experience for our users.
              Our mission is to simplify the process of finding and booking sports courts. Whether you're a casual player looking for a game, a club manager scheduling tournaments, or a coach arranging training sessions, our platform is designed to meet your needs.
              Founded in 2024, we have quickly grown to become a trusted resource for sports enthusiasts everywhere.
            </p>
          </div>
          <div className="relative z-20 mt-8 w-full">
            <div className="p-6 bg-red-700 rounded-lg w-full flex flex-col justify-center items-center relative">
              <div className="text-4xl font-bold text-white text-center py-2">
                Book Your Court Now
              </div>
              <div className="relative flex items-center space-x-6 p-2 mt-2 bg-white shadow-lg rounded-lg">
                <Link
                  href='/login'
                  className='flex items-center space-x-6 text-lg text-black hover:bg-red-300  p-2 rounded'
                >
                  Choose Your Courts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Our Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
