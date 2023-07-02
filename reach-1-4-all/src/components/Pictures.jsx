import React, { useState } from 'react';
import img1 from '../assets/helpimg1.jpg';
import img2 from '../assets/helpimg2.jpg';
import img3 from '../assets/helpimg3.jpg';
import img4 from '../assets/helpimg4.jpg';

function Pictures() {
  const [selectedImage, setSelectedImage] = useState(null);

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
  ];

  return (
    <div className="pictures w-screen h-screen flex flex-col justify-center items-center">
        <div>
            <p className="text-5xl font-bold flex flex-col justify-center items-center border-b-4 border-[#d9317e]">People We've Helped!</p>
            <p className="p-4 text-xl">Take a look at some of the positive changes we have been able to provide our community! We will remain committed to making a difference and building a brighter future together.</p>
        </div>
        <div className="flex flex-wrap justify-center">
            {images.map((image) => (
                <div className="p-4" key={image.id}>
                    <img
                        src={image.src}
                        alt={image.alt}
                        onClick={() => openModal(image)}
                        className="cursor-pointer w-64 h-64 object-cover rounded-lg shadow-md"
                    />
                </div>
            ))}

            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <span
                        className="absolute top-0 right-0 cursor-pointer text-[#d9317e] text-9xl p-2"
                        onClick={closeModal}
                    >
                    &times;
                    </span>
                    <div className="max-w-lg mx-auto bg-[#9e215a] rounded-lg p-4 relative">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                 </div>
            )}
        </div>
    </div>
  );
}

export default Pictures;