'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { getClub } from '@/app/_services/clubService';
import Calendar from '@/app/_components/calendar/Calendar';

dayjs.extend(weekOfYear);

const Club = () => {
  const { id } = useParams();
  const [club, setClub] = useState<any>(null);
  const [slots, setSlots] = useState(null);

  useEffect(() => {
    const fetchClubData = async () => {
      const result = await getClub(id as string);
      setClub(result.data.metaData.club);
      setSlots(result.data.metaData.slot);
    };
    fetchClubData();
  }, [id]);

  return (
    <div className='mt-20'>
      {club && slots && (
        <>
          <div className='relative'>
            <img
              src={club.logoUrl}
              alt={club.name}
              className='w-full h-64 object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
              <h1 className='text-white text-4xl font-bold'>{club.name}</h1>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row mt-4 px-4'>
            <div className='w-full lg:w-3/4 px-2'>
              <Calendar clubId={id} slots={slots} />
            </div>
            <div className='w-full lg:w-1/4 px-2'>
              <div className='bg-white p-5 shadow-lg rounded-lg'>
                <h2 className='text-2xl font-semibold mb-2'>{club.name}</h2>
                <p className='text-gray-600 mb-4'>{club.description}</p>
                <div className='text-gray-600 mb-4'>
                  <h3 className='font-semibold'>Address</h3>
                  <p>
                    {club.address}, {club.district}
                  </p>
                </div>
                <div className='text-gray-600 mb-4'>
                  <h3 className='font-semibold'>City/Province</h3>
                  <p>{club.cityOfProvince}</p>
                </div>
                <div className='text-gray-600 mb-2'>
                  <h3 className='font-semibold'>Pre-order</h3>
                  <p>{club.preOrder}%</p>
                </div>
                <div className='text-gray-600'>
                  <h3 className='font-semibold'>Membership</h3>
                  <div className='text-blue-500'>Show membership status</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Club;
