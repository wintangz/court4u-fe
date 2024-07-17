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
    localStorage.setItem(
      'refreshToken',
      searchParams.get('refreshToken') as string
    );
    router.replace('http://localhost:3000/');
  }

  return <></>;
};

export default Redirect;
