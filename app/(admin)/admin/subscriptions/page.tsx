'use client';
import { getClubSubscriptions } from '@/app/_services/subscriptionService';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<any>(null);

  useEffect(() => {
    const data = getClubSubscriptions();

    data.then((result: any) => {
      setSubscriptions(result.data.metaData);
    });
  }, []);

  return (
    <div>
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr className='text-sm'>
              <th>No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions &&
              subscriptions.map((sub: any, index: any) => (
                <tr key={sub.id}>
                  <th>{index + 1}</th>
                  <td>
                    <div>{sub.name}</div>
                  </td>
                  <td>
                    <div>{sub.price}</div>
                  </td>
                  <td>
                    <div>{sub.totalDate}</div>
                  </td>
                  <td>
                    <div>{sub.type}</div>
                  </td>
                  <td>
                    <div>
                      <label>
                        <input
                          type='checkbox'
                          className='checkbox checkbox-xs'
                          checked={sub.status}
                        />
                      </label>
                    </div>
                  </td>
                  <th>
                    <Link
                      href={'/admin/subscriptions/' + sub.id}
                      className='btn btn-ghost btn-xs'
                    >
                      update
                    </Link>
                    <button className='btn btn-ghost btn-xs hover:bg-red-400'>
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            {/* row 3 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;
