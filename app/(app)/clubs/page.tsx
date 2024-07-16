'use client';
import ClubCard from '@/app/_components/club/ClubCard';
import { getClubs } from '@/app/_services/clubService';
import { useEffect, useState } from 'react';

const Clubs = () => {
  const [clubs, setClubs] = useState<any>(null);

  useEffect(() => {
    const data = getClubs();
    data.then((result: any) => {
      setClubs(result.data.metaData);
    });
  }, []);

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
          min={new Date().toISOString().substring(0, 10)}
        />
        <button className='btn bg-[#6fc44e] w-1/4 border-0 text-white'>
          Search
        </button>
        {/* </div> */}
      </div>
      <div className='flex justify-end px-28'>
        <div className='w-1/4 p-4 space-y-4'>
          <div className='font-bold text-2xl'>Advanced</div>
          <div className='space-y-2'>
            <p className='font-semibold'>Select Time</p>
            <input
              type='time'
              className='bg-white text-black input input-bordered w-full'
              style={{ colorScheme: 'black' }}
              placeholder=''
            />
          </div>
          <div className='space-y-2'>
            <p className='font-semibold'>Select Date</p>
            <input
              type='date'
              className='bg-white text-black input input-bordered w-full'
              style={{ colorScheme: 'black' }}
              placeholder=''
              min={new Date().toISOString().substring(0, 10)}
            />
          </div>
          <button className='btn bg-[#6fc44e] w-full border-0 text-white'>
            Find
          </button>
        </div>
        <div className='w-3/4 flex flex-col p-4 space-y-4'>
          {clubs &&
            clubs.map((club: any) => {
              return (
                <ClubCard
                  key={club.id}
                  clubId={club.id}
                  clubName={club.name}
                  clubDescription={club.description}
                  clubImage={club.clubImage}
                />
              );
            })}
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
