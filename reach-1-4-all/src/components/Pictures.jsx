import React, { useState, useEffect } from 'react';
import img1 from '../assets/helpimg1.jpg';
import img2 from '../assets/helpimg2.jpg';
import img3 from '../assets/helpimg3.jpg';
import img4 from '../assets/helpimg4.jpg';
import new_img1 from '../assets/new_helpimg1.jpg';
import new_img2 from '../assets/new_helpimg2.jpg';
import new_img3 from '../assets/new_helpimg3.jpg';
import new_img4 from '../assets/new_helpimg4.jpg';
import new_img5 from '../assets/new_helpimg5.jpg';
import new_img6 from '../assets/new_helpimg6.jpg';
import new_img7 from '../assets/new_helpimg7.jpg';



function Pictures() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [
    {
      id: 1,
      src: img1,
      alt: 'A man with food donation',
    },
    {
      id: 2,
      src: img2,
      alt: 'Man with grocery cart of food donation. woman beside him.',
    },
    {
      id: 3,
      src: img3,
      alt: 'A couple standing together with donated meals.',
    },
    {
      id: 4,
      src: img4,
      alt: 'An elderly couple with bag of donated food.',
    },
    {
      id: 5,
      src: new_img1,
      alt: 'A helper handing someone a food plate from their car.'
    },
    {
      id: 6,
      src: new_img2,
      alt: 'A female client shows the food plate donated to them.'
    },
    {
      id: 7,
      src: new_img3,
      alt: 'A male client shows the food plate and beverage donated to them.'
    },
    {
      id: 8,
      src: new_img4,
      alt: 'A female client poses goofily with 2 beverages donated to her.'
    },
    {
      id: 9,
      src: new_img5,
      alt: 'A female on the phone shows appreciation for 2 donated beverages.'
    },
    {
      id: 10,
      src: new_img6,
      alt: 'A helper giving a family their donated supplies.'
    },
    {
      id: 11,
      src: new_img7,
      alt: 'A male client shows a brown bag donated to him.'
    },
  ];

  //Function to handles going to previous slide
  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  //Function to handle the next slide
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="pictures min-h-screen flex flex-col bg-[#D3D4D7] justify-center items-center">
      <div className="px-4">
        <p className="text-3xl sm:text-5xl font-bold text-center border-b-4 border-[#3E8DE3]">
          People We've Helped!
        </p>
        <p className="p-2 sm:p-4 text-base sm:text-xl text-center">
          Take a look at some of the positive changes we have been able to provide our community! We
          will remain committed to making a difference and building a brighter future together.
        </p>
      </div>
      <div className="relative flex flex-wrap justify-center">
        {/* Image Gallery */}
        <div className="w-full flex justify-center">
          {images.map((image, index) => (
            <div
              className={`p-2 sm:p-4 ${index === slideIndex ? 'block' : 'hidden'}`}
              key={image.id}
            >
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => openModal(image)}
                className="w-96 object-contain rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-100">
            <span
              className="absolute top-0 right-0 cursor-pointer text-[#143AA2] text-8xl p-2"
              onClick={closeModal}
            >
              &times;
            </span>
            <div className="max-w-md mx-auto bg-[#143AA2] rounded-lg p-2 sm:p-4 relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        )}

        {/* Prev Arrow */}
        <div className="relative bottom-5 pr-4 md:bottom-64 md:pr-64 md:transform md:-translate-y-1/2">
          <button
            className="text-7xl pr-12 lg:text-8xl text-[#143AA2] cursor-pointer bg-transparent border-none outline-none"
            onClick={prevSlide}
          >
            &lt;
          </button>
        </div>
        {/* Next Arrow */}
        <div className="relative bottom-5 pl-4 md:bottom-64 md:pl-64 md:transform md:-translate-y-1/2">
          <button
            className="text-7xl pl-12 lg:text-8xl text-[#143AA2] cursor-pointer bg-transparent border-none outline-none"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pictures;