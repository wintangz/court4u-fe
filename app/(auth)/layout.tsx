import Image from 'next/image';
import AuthBanner from '../_components/authBanner/AuthBanner';
import '../globals.css';

export default async function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme='court4u' lang='en'>
      <body>
        <div className='flex justify-between'>
          <AuthBanner />
          {children}
        </div>
      </body>
    </html>
  );
}
