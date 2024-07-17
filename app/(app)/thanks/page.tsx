'use client';

import Link from 'next/link';

const Thanks = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center'>
      {/* {responseCode === '00' ? ( */}
      <>
        <h1 className='text-5xl font-bold text-green-800'>Thank you.</h1>
        <h2 className='text-2xl text-green-600 mt-4'>
          Your order was completed successfully.
        </h2>
        <div className='mt-12 flex justify-center items-center'>
          <div className='text-6xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 24 24'
              className='fill-current text-green-500'
            >
              <path d='M0 4v16h24V4H0zm22 2v1.72l-10 5.56-10-5.56V6h20zm-20 12V9.7l10 5.56 10-5.56V18H2z'></path>
            </svg>
          </div>
          <p className='text-lg text-green-500 ml-4'>
            <i>
              An email receipt including the details about your order has been{' '}
              <br /> sent to the email address provided. Please keep it for your
              records.
            </i>
          </p>
        </div>
        <div className='mt-8 flex justify-center'>
          <Link href='/'>
            <button className='bg-green-400 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-green-500 hover:text-white transition-colors duration-300'>
              Back to Home
            </button>
          </Link>
        </div>
      </>
      {/* ) : ( */}

      {/* <>
          <h1 className='text-5xl font-bold text-green-800'>Warning...</h1>
          <h2 className='text-2xl text-green-600 mt-4'>
            You haven't paid for your order yet.
          </h2>
          <div className='mt-12 flex justify-center items-center'>
           <div className='text-6xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 24 24'
              className='fill-current text-green-500'
            >
              <path d='M0 4v16h24V4H0zm22 2v1.72l-10 5.56-10-5.56V6h20zm-20 12V9.7l10 5.56 10-5.56V18H2z'></path>
            </svg>
          </div>
            <p className='text-lg text-green-500 ml-4'>
              <i>
                An email receipt including the details about your order has been{' '}
                <br /> sent to the email address provided. Please keep it for
                your records.
              </i>
            </p>
          </div>
          <div className='mt-8 flex justify-center'>
            <Link href='/'>
              <button className='bg-green-400 text-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-green-500 hover:text-white transition-colors duration-300'>
                Back to Home
              </button>
            </Link>
          </div>
        </> */}

      {/* )} */}
    </div>
  );
};

export default Thanks;
