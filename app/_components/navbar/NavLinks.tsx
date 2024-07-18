'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '@/app/_services/userService';
import { jwtDecode } from 'jwt-decode';
import { FiChevronDown } from 'react-icons/fi'; // Example: Use appropriate icon from react-icons library

const NavLinks = () => {
  const currentPath = usePathname();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('accessToken') !== undefined
    ) {
      if (typeof localStorage.getItem('accessToken') === 'string') {
        const decodedToken: any = jwtDecode(
          localStorage.getItem('accessToken') as string
        );
        console.log(decodedToken);
        setUser(decodedToken.email.slice(0, decodedToken.email.indexOf('@')));
      }
    }
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

  const isAuthenticated = () => {
    const token = localStorage.getItem('accessToken');
    return token !== null && token !== undefined; // corrected condition for checking token
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuthenticated(false); // Update state to rerender
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
          <div className='relative'>
            <button
              onClick={toggleDropdown}
              className='flex items-center text-secondary hover:text-primary transition-colors cursor-pointer'
            >
              <span className='mr-1'>Welcome, {user}</span>
              <FiChevronDown />
            </button>
            {showDropdown && (
              <div className='absolute right-0 mt-2 w-48 bg-gray-500 shadow-lg rounded-lg p-2'>
                <Link
                  href='/profile'
                  className='text-sm block px-4 py-2 text-white hover:bg-gray-700'
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className='text-sm block w-full text-left px-4 py-2 text-white hover:bg-gray-700'
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;
