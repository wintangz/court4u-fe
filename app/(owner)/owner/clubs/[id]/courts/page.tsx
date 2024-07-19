'use client';
import { getCourts } from '@/app/_services/ownerService';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Courts = () => {
  const [courts, setCourts] = useState<any[]>([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCourts();
        const courtsData = result.data.metaData;
        setCourts(courtsData);
      } catch (error) {
        console.error('Failed to fetch courts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link href={'/owner/clubs/' + id + '/courts/create'}>
        <button className='bg-green-500 text-white px-4 py-2 rounded'>
          Create Court
        </button>
      </Link>
      <table className='table w-full mt-4'>
        <thead>
          <tr className='text-sm'>
            <th>No.</th>
            <th>Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courts.length > 0 ? (
            courts.map((court: any, index: any) => (
              <tr key={court.id}>
                <td>{index + 1}</td>
                <td>{court.number}</td>
                <td>{court.status}</td>
                <td>
                  <Link
                    href={`/owner/clubs/${id}/courts/${court.id}`}
                    className='btn btn-ghost btn-xs'
                  >
                    delete
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className='text-center'>
                No courts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Courts;
