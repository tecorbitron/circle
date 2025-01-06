import Image from 'next/image'
import React from 'react'
import logo1 from '@/assets/circle-features-1.webp'
import logo2 from '@/assets/circle-features-2.webp'
import logo3 from '@/assets/circle-features-3.webp'
import logo4 from '@/assets/circle-features-4.webp'
import logo5 from '@/assets/circle-features-5.webp'
import logo6 from '@/assets/circle-features-6.webp'

const Features = () => {
    return (
        <section id='features' className='py-20 px-4 bg-white'>
            <div className="max-w-screen-xl m-auto text-center">
                {/* data  */}
                <h3 className='max-w-3xl m-auto text-custom-black text-3xl md:text-5xl font-bold mb-5'>All the features you need, available on one platform</h3>
                <p className='text-custom-gray max-w-2xl m-auto'>Circle has a lot of features that are very complete and really usefull, that’s why we are the best platform. Circle really helps everything a project manager needs</p>

                {/* cards  */}
                <div className="flex justify-center flex-wrap gap-10 my-10">
                    <div className="w-full md:w-1/4 flex flex-col items-center p-4 hover:border-custom-green ease-in-out transition-all border space-y-4">
                        <Image src={logo1} alt='logo' height={50} width={50} />
                        <h3 className='text-2xl md:text-3xl text-custom-black font-semibold'>Timeline</h3>
                        <p className='text-custom-gray'>Map out project plans on a timeline so you can see the relationship between tasks and keep work on track.</p>
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col items-center p-4 hover:border-custom-green ease-in-out transition-all border space-y-4">
                        <Image src={logo2} alt='logo' height={50} width={50} />
                        <h3 className='text-2xl md:text-3xl text-custom-black font-semibold'>Timeline</h3>
                        <p className='text-custom-gray'>Map out project plans on a timeline so you can see the relationship between tasks and keep work on track.</p>
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col items-center p-4 hover:border-custom-green ease-in-out transition-all border space-y-4">
                        <Image src={logo3} alt='logo' height={50} width={50} />
                        <h3 className='text-2xl md:text-3xl text-custom-black font-semibold'>Timeline</h3>
                        <p className='text-custom-gray'>Map out project plans on a timeline so you can see the relationship between tasks and keep work on track.</p>
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col items-center p-4 hover:border-custom-green ease-in-out transition-all border space-y-4">
                        <Image src={logo4} alt='logo' height={50} width={50} />
                        <h3 className='text-2xl md:text-3xl text-custom-black font-semibold'>Timeline</h3>
                        <p className='text-custom-gray'>Map out project plans on a timeline so you can see the relationship between tasks and keep work on track.</p>
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col items-center p-4 hover:border-custom-green ease-in-out transition-all border space-y-4">
                        <Image src={logo5} alt='logo' height={50} width={50} />
                        <h3 className='text-2xl md:text-3xl text-custom-black font-semibold'>Timeline</h3>
                        <p className='text-custom-gray'>Map out project plans on a timeline so you can see the relationship between tasks and keep work on track.</p>
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col items-center p-4 hover:border-custom-green ease-in-out transition-all border space-y-4">
                        <Image src={logo6} alt='logo' height={50} width={50} />
                        <h3 className='text-2xl md:text-3xl text-custom-black font-semibold'>Timeline</h3>
                        <p className='text-custom-gray'>Map out project plans on a timeline so you can see the relationship between tasks and keep work on track.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features