import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import hands from '../assets/reaching-hands.jpeg';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-[#D3D4D7]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-xl sm:text-4xl mt-12 md:mt-6 font-bold text-[#00000]">
          Restoring, Educating, Advocating, Community, & Health.
          </h2>
          <p className="text-black-300 text-xl py-4 max-w-md">
            Restoring, educating, advocating—these three words capture the essence of our dedication to community health. At R.E.A.C.H., we are committed to making a lasting difference in our community. With your support, we can continue our vital work, providing resources, support, and education that empower individuals and families to prioritize their well-being. Join us in our mission to build a healthier future for all.
          </p>
          <div className="flex flex-col items-center">
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-bg-gradient-to-r from-[#3E8DE3] to-[#143AA2] cursor-pointer"
            >
              About Us
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={hands}
            alt="Two hands reaching towards each other"
            className="rounded-2xl mx-auto w-2/3 md:w-2/4"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;