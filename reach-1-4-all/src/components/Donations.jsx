import React from 'react';


function Donations() {
    return(
        <div id="donate" name="donation" className="w-full h-screen flex flex-col justify-center bg-[#fffff] text-gray-300">
            {/* Container */}
            <div className="max-w-[1268px] mx-auto p-40 w-full h-4/6 rounded-md bg-[#9e215a] flex flex-col justify-center items-center">
                <div className="w-full flex justify-center items-center flex-col mb-7">
                    <p className="text-5xl font-bold inline border-b-4 border-[#d9317e] text-center">Donate to our Cause Here!</p>
                    <p className="py-4 text-xl">Your generous donation plays a crucial role in our mission to alleviate hunger and provide sustenance to individuals facing dire circumstances. By contributing to our cause, you become an invaluable partner in our efforts to ensure that those in need receive the nourishment they require. Please note that all donations are tax deductible.</p>
                    <p className="py-4 text-l italic font-bold">This organization is ran by President Kim Buckner & Vice President Andrea Todd.</p>
                </div>
                <div className="w-full p-8 grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8">
                    <div className="rounded-md bg-gradient-to-r from-bg-gradient-to-r from-[#d9317e] to-[#9e215a] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <a 
                            href="https://cash.app/$reach14all" 
                            target="_blank" 
                            rel="noreferrer"
                            className='flex justify-center items-center my-4'>Donate Via Paypal
                        </a>
                    </div>
                    <div className='rounded-md bg-gradient-to-r from-bg-gradient-to-r from-[#d9317e] to-[#9e215a] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <a 
                            href="https://cash.app/$reach14all" 
                            target="_blank" 
                            rel="noreferrer"
                            className='flex justify-center items-center my-4'>Donate Via CashApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donations;