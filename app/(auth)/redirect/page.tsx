'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Redirect = () => {
  const router = useRouter();

  router.replace('http://localhost:3000/');

  return <></>;
};

export default Redirect;
