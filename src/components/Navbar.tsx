"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/circle-logo.webp';


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenu, setIsMenu] = useState(false);


  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar on scroll up
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show navbar on scroll down
      }

      // Detect if scrolled down past a threshold

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenu]);


  return (
    <nav className='bg-white'>
      <nav className={`w-full z-50 transition-transform duration-300 md:fixed bg-white font-medium text-custom-black p-2 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-2xl font-bold">
                <Image src={logo} alt='logo' height={100} width={150} />
              </Link>

              <div className="hidden md:flex space-x-8">
                <Link href="#features" className=" ">Features</Link>
                <Link href="#pricing" className=" ">Pricing</Link>
                <Link href="#testimonials" className=" ">Testimonials</Link>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
              <Link href="#" className="hidden md:block">Log In</Link>
              <Link href="#" className="border-custom-green border px-4 py-2 rounded-lg font-semibold text-custom-green">Get a Quote</Link>
              <div onClick={() => setIsMenu(!isMenu)} className="md:hidden  cursor-pointer">
                <Menu />
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* for mobile screen  */}
      {isMenu && <nav className='fixed top-0 z-50 md:hidden h-screen w-full p-2 font-medium bg-white text-custom-black '>
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image src={logo} alt='logo' height={100} width={150} />
            </Link>
          </div>
          <div onClick={() => setIsMenu(!isMenu)} className="md:hidden  cursor-pointer">
            <X />
          </div>
        </div>
        {/* Nav items  */}
        <div className="flex flex-col items-center space-y-5 mt-5">
          <Link href="#features" className=" ">Features</Link>
          <Link href="#pricing" className=" ">Pricing</Link>
          <Link href="#testimonials" className=" ">Testimonials</Link>
        </div>
        <div className="absolute bottom-10 w-full text-center cursor-pointer">
          <Link href="#" className="border-custom-green border px-4 py-2 rounded-lg font-semibold text-custom-green">Get a Quote</Link>
        </div>
      </nav>}

    </nav>
  );
};

export default Navbar;
