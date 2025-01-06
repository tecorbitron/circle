import Image from 'next/image'
import React from 'react'
import dashImg from '@/assets/circle-dashboard.webp'
import arrowImg1 from '@/assets/circle-arrow-2.png'
import arrowImg2 from '@/assets/circle-arrow-4.png'
import arrowImg4 from '@/assets/circle-arrow-1.png'
import arrowImg3 from '@/assets/circle-arrow-3.png'

const DashboardSection = () => {
    return (
        <section className='bg-white py-20 px-4 overflow-hidden'>
            <div className="relative z-0 max-w-screen-lg m-auto">
                <Image src={dashImg} alt='dashboard image' width={1000} height={1000}
                    quality={100} className='w-full h-full object-cover object-center' />

                {/* left side  */}
                <div className="hidden md:block z-10">
                    <p className='absolute w-60 -top-10 -left-36 font-custom-hand-writing text-custom-black'>Create a place in circle for each project or team</p>
                    <Image src={arrowImg1} alt='dashboard image' width={80} height={80}
                        quality={100} className='absolute -top-6 left-10 object-cover object-center' />
                </div>

                {/* right side  */}
                <div className="z-10">
                    <p className='absolute w-60 -top-10 -right-16 md:top-24 md:-right-52 font-custom-hand-writing text-custom-black'>Involve every one who’s working on the project</p>
                    <Image src={arrowImg2} alt='dashboard image' width={80} height={80}
                        quality={100} className='absolute -top-20 right-40 md:top-24 md:right-10 object-cover object-center' />
                </div>

                {/* bottom left side  */}
                <div className="z-10">
                    <p className='absolute w-60 -bottom-10 md:bottom-40 left-10 md:-left-44 font-custom-hand-writing text-custom-black'>Structure your data into folder and sub folder to reduce clutter</p>
                    <Image src={arrowImg3} alt='dashboard image' width={80} height={80}
                        quality={100} className='absolute bottom-10 md:bottom-60 left-20 md:left-0 object-cover object-center' />
                </div>

                {/* bottom right side  */}
                <div className="hidden md:block z-10">
                    <p className='absolute w-60 bottom-6 right-60 font-custom-hand-writing text-custom-black'>Create a new task easly</p>
                    <Image src={arrowImg4} alt='dashboard image' width={80} height={80}
                        quality={100} className='absolute bottom-10 right-48 object-cover object-center' />
                </div>
            </div>

        </section>
    )
}

export default DashboardSection