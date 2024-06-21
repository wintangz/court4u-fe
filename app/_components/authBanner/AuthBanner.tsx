import Image from 'next/image';
import Link from 'next/link';

const AuthBanner = () => {
  return (
    <div className='w-[50vw] min-h-[100vh] bg-[#1b282a] relative'>
      <Image
        src='/assets/authBackground.jpg'
        width={1080}
        height={667}
        alt=''
      />
    </div>
  );
};

export default AuthBanner;
