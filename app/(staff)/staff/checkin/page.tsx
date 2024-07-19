'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
// @ts-ignore
import QrReader from 'react-qr-scanner';

interface BookedSlot {
  id: string;
  bookingId: string;
  date: string;
  slotId: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

interface ScannedData {
  status: string;
  bookedSlot?: BookedSlot;
}

const Scanner = () => {
  const [error, setError] = useState<string | null>(null);
  const [scannedData, setScannedData] = useState<ScannedData | null>(null);
  const [isCameraOpen, setCameraOpen] = useState(false);

  const handleScan = async (data: any) => {
    if (data != null) {
      setCameraOpen(false);
      if (typeof window != 'undefined') {
        const token = localStorage.getItem('accessToken');
        try {
          const response = await axios.get(data.text as string, {
            headers: { Authorization: token },
          });
          if (response.data.reasonStatusCode === 'OK') {
            setScannedData({
              status: 'success',
              bookedSlot: response.data.metaData.bookSlot,
            });
            console.log(scannedData);
          }
        } catch (error: any) {
          setError(error.response.data.message);
          setScannedData({ status: 'error' });
        }
      }
    }
  };

  const handleOpenCamera = () => {
    setCameraOpen(true);
    setScannedData(null);
    setError(null);
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === 'Enter' && !isCameraOpen) {
        handleOpenCamera();
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [isCameraOpen]);

  return (
    <div className='flex flex-col items-center justify-center h-screen p-8'>
      {scannedData?.status === 'success' && scannedData.bookedSlot && (
        <>
          <p className='text-green-500 text-xl font-bold mb-4'>
            Ticket Checked Successfully!
          </p>
          <div className='w-full max-w-md bg-white rounded-lg shadow-md p-6'>
            <div className='mb-4'>
              <span className='block text-gray-600 font-semibold'>ID:</span>
              <span className='block text-gray-900'>
                {scannedData.bookedSlot.id}
              </span>
            </div>
            <div className='mb-4'>
              <span className='block text-gray-600 font-semibold'>
                Booking ID:
              </span>
              <span className='block text-gray-900'>
                {scannedData.bookedSlot.bookingId}
              </span>
            </div>
            <div className='mb-4'>
              <span className='block text-gray-600 font-semibold'>Date:</span>
              <span className='block text-gray-900'>
                {new Date(scannedData.bookedSlot.date).toLocaleDateString()}
              </span>
            </div>
            <div className='mb-4'>
              <span className='block text-gray-600 font-semibold'>
                Slot ID:
              </span>
              <span className='block text-gray-900'>
                {scannedData.bookedSlot.slotId}
              </span>
            </div>
            <div className='mb-4'>
              <span className='block text-gray-600 font-semibold'>Price:</span>
              <span className='block text-gray-900'>
                {scannedData.bookedSlot.price.toFixed(2)}
              </span>
            </div>
            <div className='mb-4'>
              <span className='block text-gray-600 font-semibold'>
                Created At:
              </span>
              <span className='block text-gray-900'>
                {new Date(scannedData.bookedSlot.createdAt).toLocaleString()}
              </span>
            </div>
            <div>
              <span className='block text-gray-600 font-semibold'>
                Updated At:
              </span>
              <span className='block text-gray-900'>
                {new Date(scannedData.bookedSlot.updatedAt).toLocaleString()}
              </span>
            </div>
          </div>
        </>
      )}
      {scannedData?.status === 'error' && (
        <p className='text-red-500'>
          Error checking ticket. {error}. Please try again.
        </p>
      )}
      {!isCameraOpen && (
        <button
          className='bg-green-500 text-white px-4 py-2 rounded'
          onClick={handleOpenCamera}
        >
          Let Check
        </button>
      )}
      {isCameraOpen && (
        <>
          {error && <p className='text-red-500'>{error}</p>}
          <QrReader
            id='qr-scanner'
            delay={300}
            onError={setError}
            onScan={handleScan}
            style={{ width: '100%', maxWidth: '55vw', margin: 'auto' }}
          />
        </>
      )}
    </div>
  );
};

export default Scanner;
