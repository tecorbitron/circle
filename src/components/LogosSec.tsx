import Image from 'next/image'
import React from 'react'
import logo1 from '@/assets/circle-companylogo-1.webp'
import logo2 from '@/assets/circle-companylogo-2.webp'
import logo3 from '@/assets/circle-companylogo-3.webp'

const LogosSec = () => {
    return (
        <section className='py-20 px-4 bg-white'>
            <div className="max-w-screen-xl m-auto">
                <h3 className=' max-w-3xl m-auto text-center text-custom-black text-3xl md:text-5xl font-bold '><span className='text-custom-green'>20,000+</span> companies around the world use Circle Workspace</h3>
                <div className="flex justify-around gap-6 py-20 overflow-x-scroll">
                    <Image src={logo3} alt='logo' height={150} width={150} className='w-20 md:w-28' />
                    <Image src={logo1} alt='logo' height={150} width={150} className='w-20 md:w-28' />
                    <Image src={logo2} alt='logo' height={150} width={150} className='w-20 md:w-28' />
                    <Image src={logo3} alt='logo' height={150} width={150} className='w-20 md:w-28' />
                    <Image src={logo1} alt='logo' height={150} width={150} className='w-20 md:w-28' />
                </div>
            </div>
        </section>
    )
}

export default LogosSec