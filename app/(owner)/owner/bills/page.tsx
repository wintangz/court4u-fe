'use client';
import { getBills } from '@/app/_services/billService';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Bills = () => {
  const [bills, setBills] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBills();
      const billsData = result.data.metaData;

      // Ensure date is properly parsed
      const sortedBills = billsData.sort((a: any, b: any) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });

      setBills(sortedBills);
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
              <th>Method</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills &&
              bills.map((bill: any, index: any) => (
                <tr key={bill.id}>
                  <th>{index + 1}</th>
                  <td>{bill.method}</td>
                  <td>${bill.total.toFixed(2)}</td>
                  <td>{new Date(bill.date).toLocaleDateString()}</td>
                  <td>{bill.status}</td>
                  <td>{bill.type}</td>
                  <th>
                    <Link
                      href={'/admin/bills/' + bill.id}
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bills;
