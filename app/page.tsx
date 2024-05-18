import Image from 'next/image';

export default function Home() {
  return (
    <div className='mt-0'>
      <Image
        src='http://m.gettywallpapers.com/wp-content/uploads/2022/03/Badminton-Laptop-Wallpaper.jpeg'
        alt=''
        width={1920}
        height={1080}
      />
    </div>
  );
}
