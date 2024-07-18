import { dot } from 'node:test/reporters';
import Banner from '../_components/banner/Banner';
import { url } from 'node:inspector';
import Image from 'next/image';
import { Router } from 'next/router';



export default function Home() {
  return (
    <div className=''>
      <Banner />
      
      <div className="flex flex-col items-center">
        
        <div className="flex flex-col md:flex-row items-center p-6 w-2/3">
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl md:text-4xl font-bold leading-none">Booking a
              <br />
              <span className="text-red-600">Badminton Court</span></h2>

            <div className="my-4 border-t border-gray-800"></div>
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-semibold">
                What and How <span className="text-red-600">We Serve</span>
              </h3>
            </div>

            <div className="mb-4" >
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Court Locations</li>
                <li>Different types of courts</li>
                <li>Corporate Booking</li>
                <li>Total 36 badminton courts</li>
                <li>Training grounds</li>
              </ul>
            </div>
          </div>
          <div className='md:w-1/2 p-4 '>
            <img
              className="w-[680px] h-[auto]"
              alt='court1'
              src='../assets/court1.png'
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center p-6 w-2/3">

          <div className='md:w-1/2 p-2 '>
            <img
              className="w-[560px] h-[auto]"
              alt='court2'
              src='../assets/court2.png'
            />
          </div>

          <div className="md:w-1/2 p-2">
            <h2 className="text-2xl font-bold">Custom Booking for <br />
              <span className="text-red-600">Trainings / Events / Competition</span></h2>
            <p className="mt-4">Contact us directly to make a custom booking.</p>
            <div className="mt-4 space-x-4">
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:shadow-[0_1px_0px_rgb(0,0,0)]" >Call us</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:shadow-[0_1px_0px_rgb(0,0,0)]" >Email us</button>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-col items-center p-6 w-1080 bg-slate-500">

          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl text-center font-bold text-white">Our Badminton Courts</h2>
          </div>

          <div className="md:w-full p-4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <img src="../assets/court3.png" className="h-full object-cover w-[930px]" alt="Court 3" />
              <img src="../assets/court4.png" className="h-full object-cover w-[930px]" alt="Court 4" />
              <img src="../assets/court5.png" className="h-full object-cover w-[930px]" alt="Court 5" />
            </div>
          </div>
        </div>
          {/* <div className="md:w-full p-4">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          <img src="../assets/court3.png" className="h-full object-cover w-[930px]" alt="Court 3" />
          <img src="../assets/court4.png" className="h-full object-cover w-[930px]" alt="Court 4" />
          <img src="../assets/court5.png" className="h-full object-cover w-[930px]" alt="Court 5" />
        </Carousel> */}
 
      {/* <div className="md:w-full p-4">
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                  className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                  className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                  className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                  className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      
      </div>
    </div>
    
  );
  
}
