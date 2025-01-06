import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/circle-logo.webp';


const Footer = () => {
    return (
        <footer className="bg-white text-custom-gray py-10">
            <div className="mx-auto px-4 max-w-screen-xl">
                <div className="flex flex-wrap justify-between text-sm">
                    {/* Left Section */}
                    <div className="w-full md:w-1/4 mb-10 md:mb-0 space-y-8">
                        <Link href="/" className="text-2xl font-bold">
                            <Image src={logo} alt='logo' height={100} width={150} />
                        </Link>
                        <p>
                            Circle workspace is the best and most trusted management app on the planet
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="w-full md:w-4/6 flex flex-wrap justify-around gap-6">
                        <div className="md:w-1/5">
                            <h3 className="text-base font-semibold mb-4 text-custom-black">Page</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="hover:text-custom-black">About Us</Link></li>
                                <li><Link href="#" className="hover:text-custom-black">Get App</Link></li>
                                <li><Link href="#" className="hover:text-custom-black">Pricing</Link></li>
                                <li><Link href="#" className="hover:text-custom-black">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="md:w-1/5">
                            <h3 className="text-base font-semibold mb-4 text-custom-black">Our Services</h3>
                            <ul className="space-y-4">
                                <li><Link href="#" className="hover:text-custom-black">Help Center</Link></li>
                                <li><Link href="#" className="hover:text-custom-black">FAQ</Link></li>
                                <li><Link href="#" className="hover:text-custom-black">Task Management</Link></li>
                                <li><Link href="#" className="hover:text-custom-black">Investation</Link></li>
                            </ul>
                        </div>
                        <div className="md:w-1/5">
                            <h3 className="text-base font-semibold mb-4 text-custom-black">Office</h3>
                            <p>23 Maplewood Drive
                                Springfield, IL 62704</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 md:mt-20 pt-6 text-center text-sm">
                    <p>© 2024 All Right Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
