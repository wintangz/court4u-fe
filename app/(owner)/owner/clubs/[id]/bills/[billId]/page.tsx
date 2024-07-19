'use client';

import { getClub } from '@/app/_services/adminService';
import { getBillDetail } from '@/app/_services/billService'; // Adjust the path as necessary
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const BillDetail = () => {
  const params = useParams();
  const id = params.id;

  const [billData, setBillData] = useState<any>(null);
  const [club, setClub] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBillDetail = async () => {
      try {
        const response = await getBillDetail(id as string);
        const data = response.data.metaData;
        setBillData(response.data.metaData);

        let clubId = null;

        if (data.type === 'booking') {
          clubId = data.booking.bookedSlot[0].slot.clubId;
        } else if (data.type === 'memberSubscription') {
          clubId = data.memberSubscription.subscriptionOption[0].clubId;
        } else if (data.type === 'ownerSubscription') {
          clubId = data.clubSubscription.clubId;
        }

        if (clubId) {
          const result = await getClub(clubId);
          setClub(result.data.metaData);
        }
      } catch (error) {
        console.error('Failed to fetch bill details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBillDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!billData) {
    return <div>Bill details not found.</div>;
  }

  const customerName =
    billData.booking?.user?.fullname ||
    billData.memberSubscription?.user?.fullname ||
    billData.clubSubscription?.user?.fullname ||
    'N/A';

  const customerEmail =
    billData.booking?.user?.email ||
    billData.memberSubscription?.user?.email ||
    billData.clubSubscription?.club?.user?.email ||
    'N/A';

  const customerPhone =
    billData.booking?.user?.phone ||
    billData.memberSubscription?.user?.phone ||
    billData.clubSubscription?.club?.user?.phone ||
    'N/A';

  return (
    <div className='max-w-3xl mx-auto mt-10 p-8 border border-gray-300 bg-white shadow-lg'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold'>COURT4U</h1>
        <h2 className='text-xl font-bold mt-4'>BILL RECEIPT</h2>
      </div>
      <div className='mb-8'>
        <div className='flex justify-between mb-2'>
          <span>Customer Name:</span>
          <span>{customerName}</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span>Customer Email:</span>
          <span>{customerEmail}</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span>Date:</span>
          <span>{new Date(billData.date).toLocaleDateString()}</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span>Phone No:</span>
          <span>{customerPhone}</span>
        </div>
        <div className='flex justify-between mb-2'>
          <span>Bill No:</span>
          <span>{id}</span>
        </div>
      </div>
      <table className='w-full mb-8 border-collapse border border-gray-400'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>Club</th>
            <th className='border border-gray-300 p-2'>Particulars</th>
            <th className='border border-gray-300 p-2'>Quantity</th>
            <th className='border border-gray-300 p-2'>Pay Method</th>
            <th className='border border-gray-300 p-2'>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-gray-300 p-2'>
              {club?.name || 'N/A'}
            </td>
            <td className='border border-gray-300 p-2'>{billData.type}</td>
            <td className='border border-gray-300 p-2'>1</td>
            <td className='border border-gray-300 p-2'>{billData.method}</td>
            <td className='border border-gray-300 p-2'>
              ${billData.total.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className='mb-8'>
        <p className='mb-2'>Additional Notes:</p>
        <p className='border border-gray-300 p-2 h-24'></p>
      </div>
      <div className='flex justify-between mt-8'>
        <span>Company Name</span>
        <span>Authorized Signatory</span>
      </div>
    </div>
  );
};

export default BillDetail;