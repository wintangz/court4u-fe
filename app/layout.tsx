import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import NavBar from './_components/navbar/NavBar';
import Footer from './_components/footer/Footer';

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html data-theme='court4u' lang='en'>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
