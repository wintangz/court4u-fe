import React from 'react';

const Users = () => {
  return (
    <div>
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          {/* head */}
          <thead>
            <tr className='text-sm'>
              <th>ID</th>
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
            {}
            {/* row 3 */}
            <tr>
              <th>1</th>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle h-12 w-12'>
                      <img
                        src='https://img.daisyui.com/tailwind-css-component-profile-4@56w.png'
                        alt='Avatar Tailwind CSS Component'
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>Marjy Ferencz</div>
              </td>
              <td>
                <div>11/11/2003</div>
              </td>
              <td>
                <div>Male</div>
              </td>
              <td>
                <div>crimson@gmail.com</div>
              </td>
              <td>
                <div>0336886918</div>
              </td>
              <td>
                <div>
                  <label>
                    <input type='checkbox' className='checkbox checkbox-xs' />
                  </label>
                </div>
              </td>
              <th>
                <button className='btn btn-ghost btn-xs'>update</button>
                <button className='btn btn-ghost btn-xs'>delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
