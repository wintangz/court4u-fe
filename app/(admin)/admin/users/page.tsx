'use client';
import { getUsers } from '@/app/_services/userService';
import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    const data = getUsers();

    data.then((result: any) => {
      setUsers(result.data.metaData);
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
            {users &&
              users.map((user: any, index: any) => (
                <tr key={user.id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle h-12 w-12'>
                          <img
                            src={user.avatarUrl}
                            alt='Avatar Tailwind CSS Component'
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{user.fullname}</div>
                  </td>
                  <td>
                    <div>{user.dateOfBirth}</div>
                  </td>
                  <td>
                    <div>{user.sex}</div>
                  </td>
                  <td>
                    <div>{user.email}</div>
                  </td>
                  <td>
                    <div>{user.phone}</div>
                  </td>
                  <td>
                    <div>
                      <label>
                        <input
                          type='checkbox'
                          className='checkbox checkbox-xs'
                          checked={user.status}
                        />
                      </label>
                    </div>
                  </td>
                  <th>
                    <button className='btn btn-ghost btn-xs'>update</button>
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

export default Users;
