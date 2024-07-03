import ClubCard from '@/app/_components/club/ClubCard';
import ClubComponents from './ClubComponents';

const Clubs = () => {
  return (
    <div className='mt-20'>
      <div className='p-5 px-20 bg-primary space-x-5 text-center'>
        {/* <div className='rounded-lg border-2 border-yellow-400 bg-yellow-400 py-2 space-x-5 text-center'> */}
        <input
          type='text'
          className='bg-white text-black input input-bordered w-1/3'
          style={{ colorScheme: 'black' }}
          placeholder='Enter location'
        />
        <input
          type='date'
          className='bg-white text-black input input-bordered w-1/3'
          style={{ colorScheme: 'black' }}
          placeholder='Pick a date'
        />
        <button className='btn bg-[#6fc44e] w-1/4 border-0 text-white'>
          Search
        </button>
        {/* </div> */}
      </div>
      <div className='flex justify-end px-28'>
        <div className='w-1/4 p-4'>
          <div className='font-bold text-2xl'>Select date and time</div>
        </div>
        <div className='w-3/4 flex flex-col p-4 space-y-4'>
          <ClubCard
            clubId=''
            clubName='Messi'
            clubDescription='Messi is GOAT'
            clubImage='https://www.fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000'
          />
          <ClubCard
            clubId=''
            clubName='Messi'
            clubDescription='Messi is GOAT'
            clubImage='https://www.fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?rxy=0.48356841796117644,0.31512414378031967&width=1600&height=1024&rnd=133210253587130000'
          />
        </div>
      </div>
    </div>
  );
};

export default Clubs;
