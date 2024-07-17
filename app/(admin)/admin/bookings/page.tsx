'use client';
import { getBookings } from '@/app/_services/adminService';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Bookings = () => {
  const [bookings, setBookings] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBookings();
      const bookingsData = result.data.metaData;

      // Ensure date is properly parsed
      const sortedBookings = bookingsData.sort((a: any, b: any) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

      setBookings(sortedBookings);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr className='text-sm'>
              <th>No.</th>
              <th>User ID</th>
              <th>Bill ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((booking: any, index: any) => (
                <tr key={booking.id}>
                  <th>{index + 1}</th>
                  <td>{booking.userId}</td>
                  <td>{booking.billId}</td>
                  <td>{new Date(booking.date).toLocaleDateString()}</td>
                  <td>{booking.status}</td>
                  <td>${booking.totalPrice.toFixed(2)}</td>
                  <th>
                    <Link
                      href={'/admin/bookings/' + booking.id}
                      className='btn btn-ghost btn-xs'
                    >
                      detail
                    </Link>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
