import React from 'react';

function Donations() {
  return (
    <div id="donate" name="donation" className="w-full min-h-screen bg-[#D3D4D7] text-gray-300">
      {/* Container */}
      <div className="max-w-[1268px] mx-auto px-4 py-16 sm:p-20 md:p-24 lg:p-32 xl:p-40 rounded-md bg-[#143AA2]">
        <div className="w-full mb-7">
          <p className="text-4xl md:text-5xl font-bold text-center border-b-4 border-[#3E8DE3]">
            Donate to our Cause Here!
          </p>
          <p className="py-4 text-lg md:text-xl text-center">
            Your generous donation plays a crucial role in our mission to alleviate hunger and provide sustenance to individuals facing dire circumstances. By contributing to our cause, you become an invaluable partner in our efforts to ensure that those in need receive the nourishment they require. Please note that all donations are tax deductible.
          </p>
          <p className="py-4 text-base md:text-lg italic font-bold text-center">
            This organization is run by President Kim Buckner & Vice President Andrea Todd.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-center py-8">
          <div className="rounded-md bg-gradient-to-r from-[#3E8DE3] to-[#143AA2] shadow-md hover:scale-110 duration-500">
            <a
              href="https://cash.app/$reach14all"
              target="_blank"
              rel="noreferrer"
              className="block py-4 px-8 border-2 border-black rounded-md text-lg md:text-xl text-white"
            >
              Donate Via Paypal
            </a>
          </div>
          <div className="rounded-md bg-gradient-to-r from-[#3E8DE3] to-[#143AA2] shadow-md hover:scale-110 duration-500">
            <a
              href="https://cash.app/$reach14all"
              target="_blank"
              rel="noreferrer"
              className="block py-4 px-8 border-2 border-black rounded-md text-lg md:text-xl text-white"
            >
              Donate Via CashApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donations;