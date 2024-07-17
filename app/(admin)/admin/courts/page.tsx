'use client';
import { getCourts } from '@/app/_services/courtService';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Courts = () => {
  const [courts, setCourts] = useState<any>(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const res = getCourts(id as string);
    res.then((res: any) => {
      setCourts(res.data.metaData);
    });
  }, []);
  console.log(courts);

  return (
    <div>
      <div className='overflow-x-auto w-full'>
        <table className='table w-full'>
          <thead>
            <tr className='text-sm'>
              <th>No.</th>
              <th>Number</th>
              <th>Club</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courts &&
              courts.map((court: any, index: any) => (
                <tr key={court.id}>
                  <th>{index + 1}</th>
                  <td>
                    <div>{court.number}</div>
                  </td>
                  <td>
                    <div>{court.name}</div>
                  </td>
                  <td>
                    <div>
                      <label>
                        <input
                          type='checkbox'
                          className='checkbox checkbox-xs'
                          checked={court.status === 'active'}
                          readOnly
                        />
                      </label>
                    </div>
                  </td>
                  <th>
                    <button className='btn btn-ghost btn-xs'>
                      <Link href={`/admin/courts/${court.id}`}>update</Link>
                    </button>
                    <button className='btn btn-ghost btn-xs'>delete</button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courts;
