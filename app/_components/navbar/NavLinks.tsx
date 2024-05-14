'use client';
import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'About', href: '/about' },
  ];

  return (
    <ul className='flex space-x-16 text-lg font-medium'>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={classNames({
              'text-primary': link.href === currentPath,
              'text-secondary': link.href !== currentPath,
              'hover:text-primary transition-colors': true,
            })}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
