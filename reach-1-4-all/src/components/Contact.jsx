import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebase';
import { FaFacebook, FaTwitter, FaEnvelope, FaLinkedin, FaTiktok } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await db.collection('submissions').add(formData);
  
      console.log('Form submitted successfully');
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
  
      // Send email with form data
      sendEmail(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="combo">
      <div name="contact" className="w-full h-screen bg-[#D3D4D7] flex justify-center items-center p-4">
        <div className="flex flex-col max-w-[600px] mt-[55px] w-full">
          <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
            <p className="text-5xl font-bold inline border-b-4 border-[#3E8DE3] text-[#04060D]">
              Contact
            </p>
            <p className="checkpoint text-black-300 pb-0 py-4 text-l">
              You can contact us by either calling, emailing, or fill out this form and we will contact you.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              className="bg-[#ccd6f6] rounded-md border-2 border-[#04060D] p-2 w-full"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="my-4 rounded-md border-2 border-[#04060D] p-1 mb-0 bg-[#ccd6f6] w-full"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="my-4 rounded-md border-2 border-black p-1 bg-[#ccd6f6] w-full"
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="bg-[#ccd6f6] rounded-md border-2 border-black p-2 w-full"
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              className="rounded-md bg-gradient-to-r from-bg-gradient-to-r from-[#3E8DE3] to-[#143AA2] border-2 border-black text-white hover:scale-110 duration-500 px-4 py-3 my-8 mx-auto"
              type="submit"
            >
              Send Contact Information
            </button>
          </form>
        </div>
      </div>
      <div className="footer bg-gradient-to-r from-bg-gradient-to-r from-[#3E8DE3] to-[#143AA2] text-white py-4">
        <div className="max-w-screen-lg mx-auto px-4 flex justify-center items-center">
          <div className="flex border-b-4 border-[#3E8DE3] text-xl font-semibold pb-1 space-x-4">
            <a 
                href="https://www.facebook.com/profile.php?id=100094138809691"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a 
                href="https://twitter.com/REACH14AllOrg"
                target="_blank"
                rel="noopener noreferrer"

            >
              <FaTwitter size={24} />
            </a>
            <a 
                href="mailto:r.e.a.c.h.14all@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaEnvelope size={24} />
            </a>
            <a 
                href="https://www.linkedin.com/in/reach-organization-005a69280/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl text-white hover:text-[#d9317e] transition-colors" />
            </a>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <h3 className="border-b-4 border-[#3E8DE3] text-xl font-semibold">Our Contact Information</h3>
          <p className="text-lg">Call us at: <a href="tel:+15615983236">+1 (561) 598-3236</a></p>
          <p className="text-lg">Email us at: <a href="mailto:r.e.a.c.h.14all@gmail.com">R.E.A.C.H.14ALL@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;