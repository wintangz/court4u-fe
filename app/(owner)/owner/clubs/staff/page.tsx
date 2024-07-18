'use client';
import { getStaffProfilesByClubId } from '@/app/_services/ownerService';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Staff = () => {
  const [staffProfiles, setStaffProfiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStaffProfilesByClubId();
        setStaffProfiles(response.data.metaData);
        console.log(response.data.metaData);
      } catch (error) {
        console.error('Failed to fetch staff profiles:', error);
      }
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
              <th>Avatar</th>
              <th>Full Name</th>
              <th>Birthday</th>
              <th>Sex</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffProfiles.length > 0 ? (
              staffProfiles.map((staff: any, index: any) => (
                <tr key={staff.id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle h-12 w-12'>
                          <img
                            src={staff.user.avatarUrl || '/default-avatar.png'}
                            alt='Staff Avatar'
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{staff.user.fullname}</div>
                  </td>
                  <td>
                    <div>
                      {staff.user.dateOfBirth
                        ? new Date(staff.user.dateOfBirth).toLocaleDateString()
                        : 'N/A'}
                    </div>
                  </td>
                  <td>
                    <div>{staff.user.sex}</div>
                  </td>
                  <td>
                    <div>{staff.user.email}</div>
                  </td>
                  <td>
                    <div>{staff.user.phone || 'N/A'}</div>
                  </td>
                  <td>
                    <div>
                      <label>
                        <input
                          type='checkbox'
                          className='checkbox checkbox-xs'
                          checked={staff.user.status === 'active'}
                          readOnly
                        />
                      </label>
                    </div>
                  </td>
                  <th>
                    <Link
                      href={'/owner/clubs/staff/' + staff.userId}
                      className='btn btn-ghost btn-xs'
                    >
                      update
                    </Link>
                    <button className='btn btn-ghost btn-xs hover:bg-red-400'>
                      delete
                    </button>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className='text-center'>
                  No staff profiles found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Staff;
