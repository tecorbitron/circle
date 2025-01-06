import React from 'react'

const HeroSection = () => {
  return (
    <section className='bg-white px-4'>
      <div className='text-center max-w-3xl m-auto pt-10 md:pt-40 pb-20'>
        <h1 className='text-3xl md:text-5xl font-bold text-custom-black mb-5'>The only task tool you need for task management and lists</h1>
        <p className='text-custom-gray max-w-2xl m-auto'>Looking for task manager software to help you organize individual and team tasks in one shared space? With Circle, it’s easy to collaborate with your team.</p>
        <div className="w-fit m-auto mt-5 border-custom-green border px-4 py-2 rounded-lg font-semibold hover:text-custom-green text-white bg-custom-green hover:bg-transparent cursor-pointer ">
          Try Circle For Free!
        </div>
      </div>
    </section>
  )
}

export default HeroSection