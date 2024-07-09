'use client';
import Calendar from '@/app/_components/calendar/Calendar';
import { getClub } from '@/app/_services/clubService';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Club = () => {
  const { id } = useParams();

  const [club, setClub] = useState<any>(null);
  const [slots, setSlots] = useState<any>(null);

  useEffect(() => {
    const result = getClub(id as string);
    result.then((data: any) => {
      console.log(data);
      setClub(data.data.metaData.club);
      setSlots(data.data.metaData.slot);
    });
  }, []);

  console.log(club);

  return (
    <div>
      {club && slots && (
        <div>
          <div className='mt-20 p-5 font-semibold text-2xl'>{club.name}</div>
          <div className='p-5'>
            <Calendar slots={slots} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Club;
