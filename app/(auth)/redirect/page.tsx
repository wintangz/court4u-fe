'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const Redirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (typeof window !== 'undefined') {
    localStorage.setItem(
      'accessToken',
      searchParams.get('accessToken') as string
    );
    console.log(searchParams.get('accessToken'));
    localStorage.setItem(
      'refreshToken',
      searchParams.get('refreshToken') as string
    );
    router.replace(process.env.NEXT_PUBLIC_BASE_URL as string);
  }

  return <></>;
};

export default Redirect;
