'use client';
import Calendar from '@/app/_components/calendar/Calendar';
import { getClub } from '@/app/_services/clubService';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Club = () => {
  const { id } = useParams();

  const [club, setClub] = useState<any>(null);

  useEffect(() => {
    const result = getClub(id as string);
    result.then((data: any) => {
      setClub(data.data.metaData.club);
    });
  }, []);

  return (
    <div>
      {club && (
        <div>
          <div className='mt-20 p-5 font-semibold text-2xl'>{club.name}</div>
          <div className='p-5'>
            <Calendar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Club;
