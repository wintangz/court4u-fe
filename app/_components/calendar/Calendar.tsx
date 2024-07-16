'use client';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { bookSlots } from '@/app/_services/bookService';
import { useRouter } from 'next/navigation';

dayjs.extend(weekOfYear);

const timeSlots = [
  { date: '11-11-2003', slot: ['8am', '9am', '10am'] },
  { date: '12-11-2003', slot: ['8am', '9am'] },
  { date: '13-11-2003', slot: ['8am', '9am'] },
];

const Calendar: React.FC<{ slots: any }> = ({ slots }) => {
  const router = useRouter();

  const [selectedWeek, setSelectedWeek] = useState(dayjs().startOf('week'));
  const [currentWeekDays, setCurrentWeekDays] = useState<any>();

  const [selectedSlots, setSelectedSlots] = useState<any>();

  useEffect(() => {
    const currentWeekDays: Dayjs[] = [];
    for (let i = 0; i < 7; i++) {
      currentWeekDays.push(selectedWeek.add(i, 'day'));
    }
    setCurrentWeekDays(currentWeekDays);
  }, [selectedWeek]);

  const handlePrevDay = () => {
    setSelectedWeek(selectedWeek.subtract(7, 'day'));
  };

  const handleNextDay = () => {
    setSelectedWeek(selectedWeek.add(7, 'day'));
  };

  const transformedSlots = Object.values(
    slots.reduce((acc: any, slot: any) => {
      const { dateOfWeek, id, startTime, endTime, price } = slot;
      if (!acc[dateOfWeek]) {
        acc[dateOfWeek] = { dateOfWeek, slots: [] };
      }
      acc[dateOfWeek].slots.push({ id, startTime, endTime, price });
      return acc;
    }, {})
  );

  const handleSelectSlot = (slotId: any) => {
    const localSelectedSlots = selectedSlots ?? { slotList: [] };
    localSelectedSlots.slotList.push({ slotId, date: dayjs().toISOString() });
    console.log(localSelectedSlots);

    setSelectedSlots(localSelectedSlots);
  };

  const handleBookSlots = () => {
    const result = bookSlots(selectedSlots);

    result.then((result: any) => {
      const payUrl = result.data.metaData.payUrl;
      window.location.href = payUrl;
    });
  };

  console.log(transformedSlots);

  return (
    <div className='p-4'>
      <div className='flex items-center justify-between mb-4'>
        <button
          onClick={handlePrevDay}
          className='p-2 bg-blue-500 text-white rounded'
        >
          &lt;
        </button>
        <div>
          <span className='text-lg font-semibold'>
            {selectedWeek.format('dddd DD MMMM')}
          </span>
          <span className='ml-4 text-sm text-gray-500'>
            week {selectedWeek.week()}
          </span>
        </div>
        <button
          onClick={handleNextDay}
          className='p-2 bg-blue-500 text-white rounded'
        >
          &gt;
        </button>
      </div>

      <div className='grid grid-cols-1'>
        <div className='flex justify-center'>
          {/* Header */}
          <div className='w-[6%] text-center'>Sunday</div>
          <div className='w-[6%] text-center'>Monday</div>
          <div className='w-[6%] text-center'>Tuesday</div>
          <div className='w-[6%] text-center'>Wednesday</div>
          <div className='w-[6%] text-center'>Thursday</div>
          <div className='w-[6%] text-center'>Friday</div>
          <div className='w-[6%] text-center'>Saturday</div>
        </div>
        <div className='flex justify-center'>
          {currentWeekDays &&
            transformedSlots &&
            currentWeekDays.map((day: Dayjs, index: number) => (
              <div key={index} className='w-[6%] text-center'>
                <div>{day.format('DD/MM/YY')}</div>
                {transformedSlots
                  .filter(
                    (slotGroup: any) => slotGroup.dateOfWeek === day.day()
                  )
                  .map((slot: any, index: number) => (
                    <div key={index}>
                      {slot.slots.map((slot: any, index: number) => (
                        <div
                          key={index}
                          className='flex-1 h-16 border border-gray-300 hover:bg-gray-300 hover:cursor-pointer'
                          onClick={() => handleSelectSlot(slot.id)}
                        >
                          {slot.startTime.slice(11, 16)}
                        </div>
                      ))}
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
      <div>
        <button
          onClick={handleBookSlots}
          className='py-2 px-4 bg-blue-500 text-white rounded'
        >
          Book slots
        </button>
      </div>
    </div>
  );
};

export default Calendar;
