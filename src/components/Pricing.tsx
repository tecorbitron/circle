import React from 'react';

const Pricing = () => {
    return (
        <section id='pricing' className='py-20 px-4 bg-white'>

            <div className="max-w-screen-xl m-auto text-center text-custom-black">
                {/* data  */}
                <h3 className=' max-w-3xl m-auto text-3xl md:text-5xl font-bold mb-5'>We have several plans that will work best for you</h3>
                <p className='text-custom-gray max-w-2xl m-auto'>We have several differenet options that will be very suitable for you to choose as the best choice</p>

                {/* pricing  */}
                <div className="flex flex-col md:flex-row gap-6 my-10 md:w-3/4 m-auto">
                    {/* Card 1 */}
                    <div className="flex flex-col border rounded-lg p-6">
                        <div className="text-right mb-4">
                            <span className="text-sm bg-gray-200 px-3 py-1 rounded-md">Legendaris</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">$15</h2>
                        <p className=" text-center mb-6">/ Month</p>
                        <p className="text-center mb-6">This package is suitable for teams of 1-10 people.</p>
                        <ul className="flex flex-col items-start mb-6">
                            <li>✅ For 1-10 people in team</li>
                            <li>✅ Limited Project files</li>
                            <li>✅ 80hr meeting via app</li>
                            <li>✅ Get the latest update</li>
                        </ul>
                        <button className="bg-custom-green text-white font-bold py-2 px-4 rounded hover:bg-custom-green-600">
                            Choose Plan
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col bg-[#04270E] text-white rounded-lg p-6">
                        <div className="text-right mb-4">
                            <span className="text-sm bg-custom-green text-white px-3 py-1 rounded-md">Pro</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">$25</h2>
                        <p className="text-center mb-6">/ Month</p>
                        <p className="text-center  mb-6">This package is suitable for teams of 10-50 people.</p>
                        <ul className="flex flex-col items-start mb-6">
                            <li>✅ For 1-10 people in team</li>
                            <li>✅ Limited Project files</li>
                            <li>✅ 80hr meeting via app</li>
                            <li>✅ Get the latest update</li>
                        </ul>
                        <button className="bg-custom-green text-white font-bold py-2 px-4 rounded hover:bg-custom-green">
                            Choose Plan
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col border rounded-lg p-6">
                        <div className="text-right mb-4">
                            <span className="text-sm bg-gray-200 px-3 py-1 rounded-md">Enterprise</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">$45</h2>
                        <p className="text-center mb-6">/ Month</p>
                        <p className="text-center mb-6">This package is suitable for teams of 25+ people.</p>
                        <ul className="flex flex-col items-start mb-6">
                            <li>✅ For 1-1000 people in team</li>
                            <li>✅ Unlimited Project files</li>
                            <li>✅ Unlimited meeting via app</li>
                            <li>✅ Get the latest update</li>
                        </ul>
                        <button className="bg-custom-green text-white font-bold py-2 px-4 rounded hover:bg-custom-green">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
