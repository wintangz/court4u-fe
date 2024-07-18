'use client';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getClub } from '@/app/_services/clubService'; // Replace with actual API calls
import { useParams } from 'next/navigation';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { addSlot, deleteSlot } from '@/app/_services/slotService';

dayjs.extend(utc);
dayjs.extend(timezone);

interface Slot {
  slotId: string;
  dateOfWeek: number;
  startTime: string;
  endTime: string;
  price: number;
}

interface TimeSlot {
  time: string;
  slots: { [key: number]: { slotId: string; display: string } };
}

const Slots = () => {
  const { id } = useParams();
  const [slots, setSlots] = useState<Slot[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newSlot, setNewSlot] = useState<Partial<Slot>>({
    startTime: '',
    endTime: '',
    price: 0,
    dateOfWeek: 0,
  });

  const fetchSlots = async () => {
    try {
      const response = await getClub(id as string); // Replace with actual API call
      const sortedSlots = response.data.metaData.slot.sort((a: Slot, b: Slot) =>
        dayjs(a.startTime).isBefore(dayjs(b.startTime)) ? -1 : 1
      );
      setSlots(sortedSlots);
      generateTimeSlots(sortedSlots);
    } catch (error) {
      console.error('Failed to fetch slots:', error);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, [id]);

  const generateTimeSlots = (slots: Slot[]) => {
    const timeSlotMap: {
      [key: string]: { [key: number]: { slotId: string; display: string } };
    } = {};
    const uniqueTimes = new Set<string>();

    slots.forEach((slot) => {
      const startTime = slot.startTime.slice(11, 16);
      const endTime = slot.endTime.slice(11, 16);
      const dayOfWeek = slot.dateOfWeek;

      uniqueTimes.add(startTime);

      if (!timeSlotMap[startTime]) {
        timeSlotMap[startTime] = {};
      }

      timeSlotMap[startTime][dayOfWeek] = {
        slotId: slot.slotId,
        display: `${startTime} - ${endTime}`,
      };
    });

    const timeSlotArray: TimeSlot[] = Array.from(uniqueTimes).map((time) => ({
      time,
      slots: timeSlotMap[time] || {},
    }));

    setTimeSlots(timeSlotArray);
  };

  const handleAddSlot = () => {
    setShowModal(true);
  };

  const handleModalSubmit = async () => {
    const startTimeParts = newSlot.startTime!.split(':');
    const endTimeParts = newSlot.endTime!.split(':');

    const date = dayjs().day(newSlot.dateOfWeek!).startOf('day');
    const startTimeISO = date
      .hour(parseInt(startTimeParts[0]) + 7)
      .minute(parseInt(startTimeParts[1]))
      .second(0)
      .millisecond(0)
      .toISOString();
    const endTimeISO = date
      .hour(parseInt(endTimeParts[0]) + 7)
      .minute(parseInt(endTimeParts[1]))
      .second(0)
      .millisecond(0)
      .toISOString();

    const newSlotWithId: any = {
      startTime: startTimeISO,
      endTime: endTimeISO,
      price: newSlot.price!,
      dateOfWeek: newSlot.dateOfWeek!,
    };

    // Make an API call to add the slot
    await addSlot(newSlotWithId);
    fetchSlots();
    setShowModal(false);
  };

  const handleDeleteSlot = async (slotId: string) => {
    // Make an API call to delete the slot
    await deleteSlot(slotId);
    fetchSlots();
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Manage Slots</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>Time</th>
              {[
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ].map((day, index) => (
                <th className='py-2 px-4 border-b' key={index}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(({ time, slots }) => (
              <tr key={time}>
                <td className='py-2 px-4 border-b'>{time}</td>
                {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                  <td className='py-2 px-4 border-b' key={day}>
                    {slots[day] && (
                      <div className='flex items-center justify-between'>
                        {slots[day].display}
                        <button
                          onClick={() => handleDeleteSlot(slots[day].slotId)}
                          className='text-red-500 ml-2 w-1'
                        >
                          <FaTrash />
                        </button>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className='py-2 px-4 border-b'>Add Slot</td>
              {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                <td className='py-2 px-4 border-b text-center' key={day}>
                  <button onClick={handleAddSlot} className='text-blue-500'>
                    <FaPlus />
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75'>
          <div className='bg-white p-6 rounded-lg'>
            <h2 className='text-xl font-bold mb-4'>Add Slot</h2>
            <div className='mb-4'>
              <label className='block mb-2'>Start Time</label>
              <input
                type='time'
                className='border border-gray-300 p-2 w-full bg-white'
                value={newSlot.startTime}
                onChange={(e) =>
                  setNewSlot({ ...newSlot, startTime: e.target.value })
                }
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-2'>End Time</label>
              <input
                type='time'
                className='border border-gray-300 p-2 w-full bg-white'
                value={newSlot.endTime}
                onChange={(e) =>
                  setNewSlot({ ...newSlot, endTime: e.target.value })
                }
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-2'>Price</label>
              <input
                type='number'
                className='border border-gray-300 p-2 w-full bg-white'
                value={newSlot.price}
                onChange={(e) =>
                  setNewSlot({ ...newSlot, price: +e.target.value })
                }
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-2'>Day of Week</label>
              <select
                className='border border-gray-300 p-2 w-full bg-white'
                value={newSlot.dateOfWeek}
                onChange={(e) =>
                  setNewSlot({ ...newSlot, dateOfWeek: +e.target.value })
                }
              >
                {[
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ].map((day, index) => (
                  <option value={index} key={index}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex justify-end'>
              <button
                onClick={handleModalSubmit}
                className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
              >
                Add
              </button>
              <button
                onClick={() => setShowModal(false)}
                className='bg-gray-300 text-black px-4 py-2 rounded'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slots;
