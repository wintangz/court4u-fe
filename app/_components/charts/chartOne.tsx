'use client';

import { getBookings, getMembers } from '@/app/_services/adminService';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

interface Member {
  createdAt: string;
}

interface Booking {
  createdAt: string;
}

const countByMonth = (
  data: { createdAt: string }[],
  dateField: keyof Member | keyof Booking
): number[] => {
  const counts = new Array(12).fill(0);
  data.forEach((item) => {
    const month = new Date(item[dateField]).getMonth();
    counts[month]++;
  });
  return counts;
};

const ChartOne: React.FC = () => {
  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([
    { name: 'Members', data: [] },
    { name: 'Bookings', data: [] },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const membersResponse = await getMembers();
        const bookingsResponse = await getBookings();

        const membersData: Member[] = membersResponse.data.metaData;
        const bookingsData: Booking[] = bookingsResponse.data.metaData;

        const membersCount = countByMonth(membersData, 'createdAt');
        const bookingsCount = countByMonth(bookingsData, 'createdAt');

        setSeries([
          { name: 'Members', data: membersCount },
          { name: 'Bookings', data: bookingsCount },
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8'>
      <div className='flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap'>
        <div className='flex w-full flex-wrap gap-3 sm:gap-5'>
          <div className='flex min-w-[47.5%]'>
            <span className='mr-2 mt-1 flex h-4 w-full max-w-[1rem] items-center justify-center rounded-full border border-primary'>
              <span className='block h-2.5 w-full max-w-[0.625rem] rounded-full bg-primary'></span>
            </span>
            <div className='w-full'>
              <p className='font-semibold'>Total Members</p>
              <p className='text-sm font-medium text-primary'>Monthly count</p>
            </div>
          </div>
          <div className='flex min-w-[47.5%]'>
            <span className='mr-2 mt-1 flex h-4 w-full max-w-[1rem] items-center justify-center rounded-full border border-secondary'>
              <span className='block h-2.5 w-full max-w-[0.625rem] rounded-full bg-secondary'></span>
            </span>
            <div className='w-full'>
              <p className='font-semibold'>Total Bookings</p>
              <p className='text-sm font-medium text-primary'>Monthly count</p>
            </div>
          </div>
        </div>
        <div className='flex w-full max-w-[45%] justify-end'>
          <div className='inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4'>
            <button className='rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark'>
              Day
            </button>
            <button className='rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark'>
              Week
            </button>
            <button className='rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark'>
              Month
            </button>
          </div>
        </div>
      </div>
      <div>
        <div id='chartOne' className='-ml-5'>
          <ReactApexChart
            options={options}
            series={series}
            type='area'
            height={350}
            width={'100%'}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
