'use client';
import Calendar from '@/app/_components/calendar/Calendar';
import { getClubs } from '@/app/_services/clubService';
import React, { useEffect } from 'react';

const Club = () => {
  useEffect(() => {
    const clubs = getClubs();
    console.log(clubs);
  }, []);

  return (
    <div>
      <div className='mt-7'>Club</div>
      <div className='p-5'>
        <Calendar />
      </div>
    </div>
  );
};

export default Club;
