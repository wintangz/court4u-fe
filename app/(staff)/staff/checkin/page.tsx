'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
// @ts-ignore
import QrReader from 'react-qr-scanner';
const Scanner = () => {
  const [error, setError] = useState(null);
  const [scannedData, setScannedData] = useState(null);
  const [isCameraOpen, setCameraOpen] = useState(false);

  const handleScan = async (data: any) => {
    // console.log(data);
    if (data != null) {
      setCameraOpen(false);
      if (typeof window != 'undefined') {
        const token = localStorage.getItem('accessToken');
        try {
          const response = await axios.get(data.text as string, {
            headers: { Authorization: token },
          });

          setScannedData('success' as any);
          setScannedData(response.data);
        } catch (error: any) {
          setError(error.response.data.message);
          console.log(error);
          setScannedData('error' as any);
        }
      }
    }
  };

  const handleOpenCamera = () => {
    setCameraOpen(true);
    setScannedData(null);
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
      {scannedData === 'success' && (
        <>
          <p className='text-green-500'>Ticket Checked Successfully!</p>
          <br />
          {scannedData}
        </>
      )}
      {scannedData && scannedData !== 'success' && (
        <p className='text-red-500'>
          Error checking ticket. {scannedData && `${scannedData}`}. Please try
          again.
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
          {error && <p className='text-red-500'></p>}
          <QrReader
            id='qr-scanner'
            delay={300}
            onError={error}
            onScan={handleScan}
            style={{ width: '100%', maxWidth: '55vw', margin: 'auto' }}
          />
        </>
      )}
    </div>
  );
};

export default Scanner;
