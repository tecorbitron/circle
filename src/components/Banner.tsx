import Image from 'next/image'
import React from 'react'
import logo1 from '@/assets/circle-banner-1.webp'
import logo2 from '@/assets/circle-banner-2.webp'
import logo3 from '@/assets/circle-banner-3.webp'

const Banner = () => {
    return (
        <section className='bg-white py-20 px-4'>
            <div className="max-w-screen-lg m-auto bg-[#04270E] rounded-3xl p-6 md:p-20 text-white">
                <h3 className='max-w-3xl m-auto text-center text-2xl md:text-4xl font-bold mb-5'>Grab your version of our software from the link below!</h3>
                <div className="w-fit m-auto mt-5 border-custom-green border px-4 py-2 rounded-lg font-semibold hover:text-custom-green text-white bg-custom-green hover:bg-transparent cursor-pointer ">
                    Download Now
                </div>
                <div className="flex justify-center gap-2 md:gap-6 mt-6">
                    <Image src={logo1} alt='logo' height={100} width={100} className='object-contain' />
                    <Image src={logo2} alt='logo' height={100} width={100} className='object-contain' />
                    <Image src={logo3} alt='logo' height={100} width={100} className='object-contain' />
                </div>
            </div>
        </section>
    )
}

export default Banner