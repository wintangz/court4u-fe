'use client';
import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const currentPath = usePathname();

  const leftLinks = [
    { label: 'Home', href: '/' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'About', href: '/about' },
  ];
  const rightLinks = [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
  ];

  return (
    <div className='flex justify-between items-center w-[82%]'>
      <ul className='flex space-x-16 text-lg font-medium'>
        {leftLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                'text-primary font-bold': link.href === currentPath,
                'text-secondary': link.href !== currentPath,
                'hover:text-primary transition-colors': true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className='flex space-x-16 text-lg font-medium'>
        {rightLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                'text-primary font-bold': link.href === currentPath,
                'text-secondary': link.href !== currentPath,
                'hover:text-primary transition-colors': true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
