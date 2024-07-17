'use client';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { bookSlots } from '@/app/_services/bookService';
import { useRouter } from 'next/navigation';
import { getClubRemainingCourt } from '@/app/_services/clubService';
import { checkRole } from '@/app/_services/authService';

dayjs.extend(weekOfYear);

const Calendar: React.FC<{ clubId: any; slots: any }> = ({ clubId, slots }) => {
  const router = useRouter();

  const [selectedWeek, setSelectedWeek] = useState(dayjs().startOf('week'));
  const [currentWeekDays, setCurrentWeekDays] = useState<Dayjs[]>([]);
  const [remainingSlots, setRemainingSlots] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [selectedSlots, setSelectedSlots] = useState<{ slotList: any[] }>({
    slotList: [],
  });

  useEffect(() => {
    const fetchRemainingSlots = async () => {
      setLoading(true);
      const data = await getClubRemainingCourt(clubId, selectedWeek);
      setRemainingSlots(data.data.metaData);
      setLoading(false);
    };

    fetchRemainingSlots();
  }, [selectedWeek]);

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
      acc[dateOfWeek].slots.push({ id, startTime, endTime, price, dateOfWeek });

      // Sort the slots by sliced startTime after pushing the new slot
      acc[dateOfWeek].slots.sort((a: any, b: any) => {
        const timeA = a.startTime.slice(11, 16);
        const timeB = b.startTime.slice(11, 16);
        return timeA.localeCompare(timeB);
      });

      return acc;
    }, {})
  );

  const handleSelectSlot = (slotId: any) => {
    if (loading) return;

    // Check if the slot is available
    const isAvailable = remainingSlots?.some((remainingSlot: any) => {
      return remainingSlot.id === slotId && remainingSlot.courtRemain > 0;
    });

    if (!isAvailable) {
      // If not available, return early and do not select
      return;
    }

    setSelectedSlots((prevSelectedSlots) => {
      const isSelected = prevSelectedSlots.slotList.some(
        (selectedSlot) => selectedSlot.slotId === slotId
      );

      if (isSelected) {
        // Remove the slot if it's already selected
        return {
          slotList: prevSelectedSlots.slotList.filter(
            (selectedSlot) => selectedSlot.slotId !== slotId
          ),
        };
      } else {
        // Add the slot if it's not already selected
        return {
          slotList: [
            ...prevSelectedSlots.slotList,
            { slotId, date: dayjs().toISOString() },
          ],
        };
      }
    });
  };

  const handleBookSlots = () => {
    if (checkRole('member')) {
      const result = bookSlots(selectedSlots);

      result.then((result: any) => {
        const payUrl = result.data.metaData.payUrl;
        window.location.href = payUrl;
      });
    } else {
      router.push('/login');
    }
  };

  const getSlotClassNames = (slot: any) => {
    const isSelected = selectedSlots?.slotList?.some(
      (selectedSlot: any) => selectedSlot.slotId === slot.id
    );

    const isAvailable = remainingSlots?.some((remainingSlot: any) => {
      return remainingSlot.id === slot.id && remainingSlot.courtRemain > 0;
    });

    const thisSlotDay: Dayjs = currentWeekDays[slot.dateOfWeek];

    thisSlotDay.set('hour', slot.startTime.slice(11, 13));
    thisSlotDay.set('minute', slot.startTime.slice(14, 16));

    const isPastSlot = thisSlotDay.isBefore(dayjs());

    return `px-6 py-4 whitespace-nowrap text-sm text-gray-500 select-none flex items-center justify-center ${
      loading
        ? 'bg-gray-400 pointer-events-none'
        : isPastSlot
        ? 'bg-gray-500 pointer-events-none'
        : isSelected
        ? 'hover:bg-blue-500 bg-blue-400 text-white'
        : isAvailable
        ? 'hover:bg-gray-300'
        : 'bg-red-400 pointer-events-none'
    }`;
  };

  const getAllSortedSlotTimes = () => {
    if (!transformedSlots || transformedSlots.length === 0) {
      return [];
    }

    // Flatten the slots into a single array
    const allSlots = transformedSlots.reduce((acc: any[], slotGroup: any) => {
      return acc.concat(slotGroup.slots);
    }, []);

    if (allSlots.length === 0) {
      return [];
    }

    // Extract the startTimes and sort them in ascending order
    const sortedTimes = allSlots
      .map((slot: any) => slot.startTime.slice(11, 16))
      .sort((a: string, b: string) => a.localeCompare(b));

    // Use a Set to remove duplicates
    const uniqueSortedTimes = Array.from(new Set(sortedTimes));

    return uniqueSortedTimes;
  };

  const sortedSlotTimes = getAllSortedSlotTimes();

  return (
    <div className='p-4'>
      {/* Calendar header */}
      <div className='flex items-center mb-4 justify-between space-x-2'>
        {/* Navigation buttons */}
        <div className='space-x-2'>
          <button
            onClick={handlePrevDay}
            className='p-2 bg-blue-500 text-white rounded'
          >
            &lt;
          </button>
          <button
            onClick={handleNextDay}
            className='p-2 bg-blue-500 text-white rounded'
          >
            &gt;
          </button>
        </div>
        {/* Week and date information */}
        <div className=''>
          <span className='text-lg font-semibold'>
            {selectedWeek.format('dddd DD MMMM')}
          </span>
          <span className='ml-2 text-sm text-gray-500'>
            Week {selectedWeek.week()}
          </span>
        </div>
        {/* Book slots button */}
        <button
          onClick={handleBookSlots}
          className='py-2 px-4 bg-blue-500 text-white rounded'
        >
          Book slots
        </button>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 border-2 border-black'>
          <thead>
            <tr className='bg-gray-50'>
              <th className='w-1/12 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Time
              </th>
              {currentWeekDays &&
                currentWeekDays.map((day: Dayjs, index: number) => (
                  <th
                    key={index}
                    className='w-[10%] py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center'
                  >
                    {day.format('dddd') + ' '}
                    {day.format('DD/MM')}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {remainingSlots.length > 0 &&
              transformedSlots &&
              sortedSlotTimes &&
              sortedSlotTimes.map((time, timeIndex) => (
                <tr key={timeIndex}>
                  <td className='px-0 py-0 whitespace-nowrap text-center text-sm text-gray-500'>
                    {time}
                  </td>
                  {transformedSlots &&
                    currentWeekDays &&
                    currentWeekDays.map((day: Dayjs, dayIndex: number) => (
                      <td
                        key={dayIndex}
                        className='px-0 py-0 whitespace-nowrap'
                      >
                        {transformedSlots &&
                          transformedSlots
                            .filter(
                              (slotGroup: any) =>
                                slotGroup.dateOfWeek === day.day()
                            )
                            .map((slotGroup: any) =>
                              slotGroup.slots
                                .filter(
                                  (slot: any) =>
                                    slot.startTime.slice(11, 16) === time
                                )
                                .map((slot: any, index: number) => (
                                  <div
                                    key={index}
                                    className={getSlotClassNames(slot)}
                                    onClick={() =>
                                      !loading && handleSelectSlot(slot.id)
                                    }
                                    style={{
                                      marginBottom:
                                        index === slotGroup.slots.length - 1
                                          ? 0
                                          : '-1px',
                                    }}
                                  >
                                    {slot.startTime.slice(11, 16)}
                                  </div>
                                ))
                            )}
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className='flex items-center mt-4 justify-center'>
        <div className='flex items-center mr-4'>
          <div className='w-4 h-4 bg-white border border-gray-400'></div>
          <span className='ml-2'>Available</span>
        </div>
        <div className='flex items-center mr-4'>
          <div className='w-4 h-4 bg-red-400'></div>
          <span className='ml-2'>Not available</span>
        </div>
        <div className='flex items-center mr-4'>
          <div className='w-4 h-4 bg-gray-500'></div>
          <span className='ml-2'>Past</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
