import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ClubCardProps {
  clubId: string;
  clubName: string;
  clubDescription: string;
  clubImage: string;
}

const ClubCard: React.FC<ClubCardProps> = ({
  clubId,
  clubName,
  clubDescription,
  clubImage,
}) => {
  return (
    <div className='card card-side bg-base-100 w-full h-52 shadow-lg'>
      <figure className='h-full w-1/4 relative'>
        <Image src={clubImage} alt='Movie' className='object-cover' fill />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{clubName}</h2>
        <p>{clubDescription}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-info'>
            <Link href={`/clubs/${clubId}`} />
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
