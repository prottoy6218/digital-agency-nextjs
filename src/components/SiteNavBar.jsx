"use client"
import Link from 'next/link';
import { FaListUl } from 'react-icons/fa6';

const SiteNavBar = () => {
  return <header className="container mx-auto mt-4 py-4 text-black"><div className="flex justify-between items-center space-b">
    <p className="font-bold text-xl"><a href="/">Design<span className="text-sec">AGENCY</span></a></p>
    <nav className='font-medium'>
      <ul className="hidden md:flex md:flex-row md:items-center md:gap-6">
        <Link className='text-lg' href="/">Home</Link>
        <Link className='text-lg' href="/team">Team</Link>
        <Link className='text-lg' href="/service">Service</Link>
        <Link className='text-lg' href="/projects">Projects</Link>
        <Link className='text-lg' href="/testimonials">Testimonials</Link>
        <li><button className="flex flex-row items-center gap-1 py-1 px-4 border-2 border-brand rounded-lg text-lg">Login</button></li>
        <li><button className="flex flex-row items-center gap-1 py-1 px-4 border-2 border-brand bg-brand rounded-lg text-lg text-white">Register</button></li>
      </ul>
      <button className='block md:hidden  px-4 py-4 bg-white mr-6 rounded-lg focus:outline-none group'> <FaListUl />
        <div className='absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-200'>
          <ul className="flex flex-col item-center w-full text-base cursor-pointer pt-10">
            <Link className='text-lg px-6 py-4' href="/home">Home</Link>
            <Link className='text-lg px-6 py-4' href="/team">Team</Link>
            <Link className='text-lg px-6 py-4' href="/service"></Link>
            <Link className='text-lg px-6 py-4' href="/projects">Projects</Link>
            <Link className='text-lg px-6 py-4' href="/testimonials">Testimonials</Link>
          </ul>
        </div>
      </button>
    </nav>
  </div>
  </header>;
};
export default SiteNavBar;