'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { getClub } from '@/app/_services/clubService';
import Calendar from '@/app/_components/calendar/Calendar';
import SubscriptionOptions from '@/app/_components/memberSubscription/MemberSubscription';
import { getCurrentSubscription } from '@/app/_services/subscriptionService';

dayjs.extend(weekOfYear);

const Club = () => {
  const { id } = useParams();
  const [club, setClub] = useState<any>(null);
  const [subs, setSubs] = useState<any>(null);
  const [curSub, setCurSub] = useState<any>(null);
  const [slots, setSlots] = useState(null);

  useEffect(() => {
    const fetchClubData = async () => {
      const result = await getClub(id as string);
      setClub(result.data.metaData);
      setSlots(result.data.metaData.slot);
      setSubs(result.data.metaData.subscriptionOption);
    };
    fetchClubData();
  }, [id]);

  useEffect(() => {
    if (
      localStorage.getItem('accessToken') !== undefined &&
      localStorage.getItem('accessToken') != null
    ) {
      const result = getCurrentSubscription(id as string);
      result.then((result) => {
        setCurSub(result.data.metaData);
        console.log(result);
      });
    }
  }, [id]);

  return (
    <div className='mt-20'>
      {club && slots && subs && (
        <>
          {/* First Row: Club Name */}
          <div className='relative mb-4'>
            <img
              src={club.logoUrl}
              alt={club.name}
              className='w-full h-64 object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
              <h1 className='text-white text-4xl font-bold'>{club.name}</h1>
            </div>
          </div>

          {/* Second Row: Club Information */}
          <div className='bg-white px-10 py-5 rounded-lg mb-2 flex space-x-10 justify-between'>
            <div className=''>
              <h2 className='text-2xl font-semibold mb-2'>{club.name}</h2>
              <p className='text-xl mb-2'>{club.description}</p>
            </div>
            <div className='grid grid-cols-4 gap-8'>
              <div className='text-gray-600'>
                <h3 className='font-semibold'>Address</h3>
                <p>
                  {club.address}, {club.district}
                </p>
              </div>
              <div className='text-gray-600'>
                <h3 className='font-semibold'>City/Province</h3>
                <p>{club.cityOfProvince}</p>
              </div>
              <div className='text-gray-600'>
                <h3 className='font-semibold'>Pre-order</h3>
                <p>{club.preOrder}%</p>
              </div>
              <div className='text-gray-600'>
                <h3 className='font-semibold'>Membership</h3>
                <div className='text-blue-500'>Show membership status</div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr className='border-t border-gray-300 my-4' />

          {/* Third Row: Calendar and Subscription Options */}
          <div className='flex flex-col lg:flex-row px-4'>
            <div className='w-full lg:w-3/4 px-2 mb-4 lg:mb-0'>
              <div className='mb-4'>
                <Calendar clubId={id} slots={slots} />
              </div>
            </div>
            <div className='w-full lg:w-1/4 px-2'>
              <SubscriptionOptions options={subs} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Club;
