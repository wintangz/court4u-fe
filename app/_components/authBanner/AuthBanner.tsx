import Link from 'next/link';

const AuthBanner = () => {
  return (
    <div className='w-[50vw] min-h-[100vh] bg-gradient-to-l from-[#6bc945] to-[#22ad5c] pt-[5%] relative'>
      <div>
        <div className='title'>
          <Link href='/' className='flex items-center justify-center gap-3'>
            <img alt='' src='../logo_dark.svg' />
            <p className='text-[32px] font-bold text-[#d0ecf7]'>Court4You</p>
          </Link>
        </div>
        <p className='text-[#E2E1E1] font-semibold text-lg tracking-[0.2px] leading-6 text-center my-4'>
          We're on a mission to empower sports lovers by giving <br /> them a
          hassle-free way to enjoy their favorite activities.
        </p>
      </div>
      <img
        alt=''
        className='w-[95%] ml-4'
        src='https://res.cloudinary.com/dijvg89ff/image/upload/v1716212252/court4u/bitmap3_d050bk_c_crop_w_1181_h_800_rpvzpb.png'
      />
    </div>
  );
};

export default AuthBanner;
