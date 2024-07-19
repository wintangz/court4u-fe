'use client';
import { getClubs, getClubsOfOwner } from '@/app/_services/clubService';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Clubs = () => {
  const [clubs, setClubs] = useState<any>(null);

  useEffect(() => {
    const res = getClubsOfOwner();
    res.then((res: any) => {
      setClubs(res.data.metaData);
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
              <th>Logo</th>
              <th>Name</th>
              <th>Address</th>
              <th>District</th>
              <th>City/Province</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clubs &&
              clubs.map((club: any, index: any) => (
                <tr key={club.id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle h-12 w-12'>
                          <img src={club.logoUrl} alt='Club Logo' />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{club.name}</div>
                  </td>
                  <td>
                    <div>{club.address}</div>
                  </td>
                  <td>
                    <div>{club.district}</div>
                  </td>
                  <td>
                    <div>{club.cityOfProvince}</div>
                  </td>
                  <td>
                    <div>{club.description}</div>
                  </td>
                  <td>
                    <div>
                      <label>
                        <input
                          type='checkbox'
                          className='checkbox checkbox-xs'
                          checked={club.status === 'active'}
                          readOnly
                        />
                      </label>
                    </div>
                  </td>
                  <th>
                    <button className='btn btn-ghost btn-xs'>
                      <Link href={`/owner/clubs/${club.id}`}>detail</Link>
                    </button>
                    <button className='btn btn-ghost btn-xs'>delete</button>
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

export default Clubs;
