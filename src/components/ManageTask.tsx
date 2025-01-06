import Image from 'next/image'
import React from 'react'
import image1 from '@/assets/circle-manage-task-1.webp'
import image2 from '@/assets/circle-manage-task-2.webp'
import image3 from '@/assets/circle-manage-task-3.webp'

const ManageTask = () => {
    return (
        <section className='py-20 px-4 bg-white'>
            <div className="flex flex-wrap justify-between max-w-screen-xl m-auto">
                <div className="w-full md:w-[48%]">
                    <h3 className='text-3xl md:text-5xl font-bold text-custom-black'>Manage all task easly in one app</h3>
                    <p className='text-custom-gray my-5'>We have a very professional team, so you don’t have to worry about aour services, we are a trusted partner for you, you are also easy to get services from us
                        <br /> <br />
                        We also have an extemsive network, with thousands of trusted partners and thousands of weekly active users
                    </p>
                    <ul className="flex flex-col items-start mb-6 text-custom-black">
                        <li>✅ Invite more than 10+ members on a task</li>
                        <li>✅ No space between member on the group</li>
                        <li>✅ Manage the task easly and clearly</li>
                    </ul>
                </div>
                <div className="relative w-full md:w-[48%]">
                <Image src={image1} alt='tutorial image' width={300} height={200} quality={100} className='md:absolute m-auto' />
                <Image src={image2} alt='tutorial image' width={400} height={200} quality={100} className='md:absolute top-32 m-auto' />
                <Image src={image3} alt='tutorial image' width={400} height={200} quality={100} className='absolute top-20 right-0 m-auto' />
                </div>
            </div>

        </section>
    )
}

export default ManageTask