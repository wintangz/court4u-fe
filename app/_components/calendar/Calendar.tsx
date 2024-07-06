'use client';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

const timeSlots = [
  { date: '11-11-2003', slot: ['8am', '9am', '10am'] },
  { date: '12-11-2003', slot: ['8am', '9am'] },
  { date: '13-11-2003', slot: ['8am', '9am'] },
];

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handlePrevDay = () => {
    setSelectedDate(selectedDate.subtract(1, 'day'));
  };

  const handleNextDay = () => {
    setSelectedDate(selectedDate.add(1, 'day'));
  };

  return (
    <div className='p-4'>
      {/* <div className='flex items-center justify-between mb-4'>
        <button
          onClick={handlePrevDay}
          className='p-2 bg-blue-500 text-white rounded'
        >
          &lt;
        </button>
        <div>
          <span className='text-lg font-semibold'>
            {selectedDate.format('dddd DD MMMM')}
          </span>
          <span className='ml-4 text-sm text-gray-500'>
            week {selectedDate.week()}
          </span>
        </div>
        <button
          onClick={handleNextDay}
          className='p-2 bg-blue-500 text-white rounded'
        >
          &gt;
        </button>
      </div> */}

      <div className='grid grid-cols-1'>
        {/* <div className='flex items-center'>
          <div className='w-1/6'></div>
          {timeSlots.map((slot, index) => (
            <div key={index} className='flex-1 text-center py-2'>

            </div>
          ))}
        </div> */}

        <div className='flex justify-center'>
          {timeSlots.map((dateAndSlot, index) => (
            <div key={index} className='w-[6%]'>
              <div>{dateAndSlot.date}</div>
              {dateAndSlot.slot.map((slot, index) => (
                <div
                  key={index}
                  className='flex-1 h-16 border border-gray-300 hover:bg-blue-400'
                >
                  {slot}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center mt-4 justify-center'>
        <div className='flex items-center mr-4'>
          <div className='w-4 h-4 bg-white border border-gray-400'></div>
          <span className='ml-2'>Available</span>
        </div>
        <div className='flex items-center mr-4'>
          <div className='w-4 h-4 bg-gray-400'></div>
          <span className='ml-2'>Not available</span>
        </div>
        <div className='flex items-center mr-4'>
          <div className='w-4 h-4 bg-red-400'></div>
          <span className='ml-2'>Fully booked</span>
        </div>
        <div className='flex items-center mr-4'>
          <div className='w-4 h-4 bg-green-400'></div>
          <span className='ml-2'>Paid bookings</span>
        </div>
        <div className='flex items-center'>
          <div className='w-4 h-4 bg-yellow-400'></div>
          <span className='ml-2'>Unpaid bookings</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
