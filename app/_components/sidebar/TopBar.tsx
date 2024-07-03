import React from 'react';

const TopBar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <nav className='right-0 shadow-lg fixed z-10 w-[78vw] top-0 flex items-center justify-between space-x-16 border-b px-8 h-16 bg-gradient-to-l from-[#6bc945] to-[#22ad5c] border-none'>
      {/* <div className='flex px-36 justify-between w-full'> */}
      <div className='text-2xl font-semibold py-4 text-white'>{title}</div>
      {/* </div> */}
    </nav>
  );
};

export default TopBar;
