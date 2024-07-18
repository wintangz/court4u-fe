'use client';
import { bookSlots } from '@/app/_services/bookService';
import { buyMemberSubscription } from '@/app/_services/subscriptionService';
import dayjs from 'dayjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const items = searchParams.get('items');

  const [parsedItems, setParsedItems] = useState<any>([]);
  const [slots, setSlots] = useState<{
    slotList: { slotId: any; date: any }[];
  }>({ slotList: [] });

  useEffect(() => {
    if (items) {
      try {
        const parsed = JSON.parse(decodeURIComponent(items as string));
        setParsedItems(parsed);
        console.log(parsed);
        setSlots({
          slotList: parsed.map((slot: any) => ({
            slotId: slot.id,
            date: slot.date,
          })),
        });
      } catch (error) {
        console.error('Failed to parse items:', error);
      }
    }
  }, [items]);

  const handleBook = () => {
    const loadingToastId = toast.loading('Processing your booking...');
    if (parsedItems[0].type === 'Subscription') {
      const result = buyMemberSubscription(parsedItems[0].id);
      result
        .then((result: any) => {
          toast.update(loadingToastId, {
            render: 'Booking successful!',
            type: 'success',
            isLoading: false,
            autoClose: 5000,
          });
          const payUrl = result.data.metaData.payUrl;
          window.location.href = payUrl;
        })
        .catch((error: any) => {
          toast.update(loadingToastId, {
            render: 'Booking failed!',
            type: 'error',
            isLoading: false,
            autoClose: 5000,
          });
          console.error('Booking failed:', error);
        });
    } else {
      const result = bookSlots(slots);
      result
        .then((result: any) => {
          toast.update(loadingToastId, {
            render: 'Booking successful!',
            type: 'success',
            isLoading: false,
            autoClose: 5000,
          });
          const payUrl = result.data.metaData.payUrl;
          window.location.href = payUrl;
        })
        .catch((error: any) => {
          toast.update(loadingToastId, {
            render: 'Booking failed!',
            type: 'error',
            isLoading: false,
            autoClose: 5000,
          });
          console.error('Booking failed:', error);
        });
    }
  };

  const calculateTotal = () => {
    return parsedItems.reduce(
      (total: number, item: any) => total + item.price,
      0
    );
  };

  const total = calculateTotal();
  const initialPayment =
    parsedItems[0]?.type !== 'Subscription' ? total * 0.3 : total;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      <ToastContainer />
      {/* Add your payment processing logic here */}
      <div className='flex justify-between px-8 py-4 mt-20'>
        {/* Left Section: Shopping Cart */}
        <div className='w-2/3 bg-white p-8 rounded-lg shadow-md'>
          <h1 className='text-2xl font-bold mb-4'>Cart</h1>
          <ul className='mb-4'>
            {parsedItems.map((item: any, index: number) => (
              <li
                key={index}
                className='mb-4 flex justify-between items-center p-4 border-b'
              >
                <div>
                  <h2 className='text-xl font-semibold'>{item.name}</h2>
                  <p className='text-gray-600'>{item.detail}</p>
                  <p className='text-gray-600'>{item.type}</p>
                </div>
                <div className='text-xl font-bold'>
                  {formatPrice(item.price)}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Payment Info */}
        <div className='w-1/3 bg-white p-8 rounded-lg shadow-md'>
          <h1 className='text-2xl font-bold mb-4'>Payment Info</h1>
          <div className='mb-4'>
            <h2 className='text-lg font-semibold mb-2'>Payment Method</h2>
            <div className='mb-2'>
              <input
                type='radio'
                id='momo'
                name='paymentMethod'
                value='momo'
                readOnly
                defaultChecked
              />
              <label htmlFor='momo' className='ml-2'>
                MoMo
              </label>
            </div>
          </div>
          <div className='mb-4'>
            <h2 className='text-lg font-semibold mb-2'>Date</h2>
            <p>{dayjs().format('YYYY-MM-DD')}</p>
          </div>
          <div className='flex justify-between items-center p-4 border-t-2'>
            <h2 className='text-xl font-bold'>Total</h2>
            <div className='text-xl font-bold'>{formatPrice(total)}</div>
          </div>
          <div className='flex justify-between items-center p-4 border-t-2'>
            <h2 className='text-xl font-semibold'>You pay now</h2>
            <div className='text-xl font-bold'>
              {formatPrice(initialPayment)}
            </div>
          </div>
          {parsedItems && parsedItems[0]?.type !== 'Subscription' && (
            <div className='text-gray-600 p-4 border-t-2'>
              Pay the rest when you check in.
            </div>
          )}
          <button
            onClick={() => handleBook()}
            className='mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
