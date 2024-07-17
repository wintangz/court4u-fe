'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '@/app/_services/userService';

const NavLinks = () => {
  const currentPath = usePathname();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  const leftLinks = [
    { label: 'Home', href: '/' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'About', href: '/about' },
  ];
  const leftOnlyPublicLinks = [{ label: 'Partner', href: '/partner' }];
  const rightLinks = [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
  ];
  const rightPrivateLinks = [{ label: 'Profile', href: '/profile' }];

  const isAuthenticated = () => {
    const token = localStorage.getItem('accessToken');
    return token !== null && token != undefined; // corrected condition for checking token
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuthenticated(false); // Update state to rerender
  };

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
        {!authenticated
          ? leftOnlyPublicLinks.map((link) => (
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
            ))
          : ''}
      </ul>
      <ul className='flex space-x-16 text-lg font-medium'>
        {!authenticated ? (
          rightLinks.map((link) => (
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
          ))
        ) : (
          <div>
            <li>Welcome, </li>
            <li>
              <button
                onClick={handleLogout}
                className='text-secondary font-bold hover:text-primary transition-colors'
              >
                Log out
              </button>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;
