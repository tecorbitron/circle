import Image from 'next/image'
import image1 from '@/assets/circle-integration.webp'

const BuildMarketplace = () => {
    return (
        <section className='bg-white py-20 px-4'>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-6 max-w-screen-xl m-auto">
                <div className="md:w-[46%] bg-white">
                    <Image src={image1} alt='tutorial image' width={500} height={200} quality={100} className='m-auto' />
                </div>
                <div className="flex flex-col justify-center gap-10 md:w-[46%] p-4 z-10">
                    <h2 className='text-custom-black text-3xl md:text-5xl font-bold'>
                        Integrate your tools</h2>
                    <p className='text-custom-gray'>Leverage 500+ integrations to work seamlessly, and 300+ other extension to craft your team’s perfect process. You can bring together everything your team needs to communicate, collaborate, and coordinate work, from start to finish</p>
                    <div className='bg-primary-colour w-fit m-auto md:m-0 bg-custom-green font-semibold text-white px-5 py-3 rounded-lg ' >Learn More</div>
                </div>
            </div>
        </section>
    )
}
export default BuildMarketplace
