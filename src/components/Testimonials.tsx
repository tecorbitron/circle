import Image from 'next/image'
import React from 'react'
import clientImg1 from '@/assets/circle-testimonials-1.webp'
import clientImg2 from '@/assets/circle-testimonials-2.webp'

const Testimonials = () => {
    return (
        <section id='testimonials' className='py-20 bg-white'>
            <div className="flex flex-col md:flex-row justify-between gap-6 text-custom-gray max-w-screen-xl m-auto px-4">
                <div className="w-full md:w-1/3">
                    <h3 className='text-3xl md:text-5xl font-semibold text-custom-black'>Come join the people who use our app</h3>
                    <p className='max-w-2xl m-auto my-5'>Thousands of people have feith the ease and comfort when using our application, you can run hundreads of features available in our application. You need to try to feel the ease of organizing your project. No need to worry, we give our best for you</p>

                </div>
                <div className="w-full md:w-2/3 flex justify-between items-center flex-wrap gap-5">
                    <div className="md:w-[48%] h-fit p-4 md:p-8 space-y-2 border">
                        <div className="flex gap-3">
                            <Image src={clientImg1} alt='client image' height={80} width={80} className='object-cover' />
                            <div>
                                <h3 className='text-custom-black text-lg md:text-2xl font-medium mt-3'>Janne Ruby Jane</h3>
                                <p>Front end developer</p>
                            </div>
                        </div>
                        <p>The platform itself is user-friendly, making navigation a breeze even for someone who&aposs not particularly tech-savvy. The design is clean and intuitive, which I appreciated. I was particularly impressed with the range of features offered, allowing for seamless transactions and easy management of my account.
                        </p>
                    </div>
                    <div className="md:w-[48%] h-fit p-4 md:p-8 space-y-2 border">
                        <div className="flex gap-3">
                            <Image src={clientImg2} alt='client image' height={80} width={80} className='object-cover' />
                            <div>
                                <h3 className='text-custom-black text-lg md:text-2xl font-medium mt-3'>Janne Ruby Jane</h3>
                                <p>Product designer</p>
                            </div>
                        </div>
                        <p>I recently had the opportunity to work with Circle, and I have to say, my experience was overwhelmingly positive. From the outset, their customer service team was incredibly responsive and attentive. They took the time to understand my needs and provided tailored solutions that truly met my requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials