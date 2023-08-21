import React, { useState, useRef } from 'react';
//import { firestore } from '../firebase';
//import { addDoc,collection } from '@firebase/firestore';
import { FaFacebook, FaTwitter, FaEnvelope, FaLinkedin, FaTiktok } from 'react-icons/fa';
import axios from 'axios';
import striptags from 'striptags';
//Set API key
const b_api_key = process.env.REACT_APP_BREVO_API_KEY;

function Contact() {
  //create a state to store the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  //initialize a Ref for each input value
  const nameRef = useRef();
  const emailRef= useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  //handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    //get form data from Refs and construct the data object
    let data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    try {
      //*****NON_USED FIREBASE CODE*****//
      //access the "Submissons" collection in Firestore
      //const ref = collection(firestore, "Submissions");
      // Add the data object to Firestore as a new document
      //await addDoc(ref, data);
      
      //Strip an HTML tags for security
      const strippedMessage = striptags(data.message);

      // Send the form data to Brevo's API endpoint for sending emails
      const response = await axios.post(
        'https://api.sendinblue.com/v3/smtp/email',
        {
          sender: { name: data.name, email: data.email },
          to: [{ email: 'r.e.a.c.h.14all@gmail.com' }], // Replace with recipient
          subject: 'New Contact Form Submission',
          htmlContent: `<p>Name: ${data.name}</p>
                        <p>Email: ${data.email}</p>
                        <p>Phone: ${data.phone}</p>
                        <p>Message: ${strippedMessage}</p>`,
        },
        {
          headers: {
            'api-key': b_api_key,
            'content-type': 'application/json',
          },
        }
      );
      //Log the API response
      console.log(response.data); 
      // Show an alert to the user that the contact information has been sent
      //window.alert('Contact information has been sent successfully! We will contact you soon!');

      // Set the success message
      setSuccessMessage('Thank you! Contact information has been sent successfully! We will contact you soon!');

      // Clear form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  //handle form input changes
  const handleChange = (e) => {
    //update formData state with the newinput value
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
              ref={nameRef}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="my-4 rounded-md border-2 border-[#04060D] p-1 mb-0 bg-[#ccd6f6] w-full"
              type="email"
              placeholder="Email"
              ref={emailRef}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="my-4 rounded-md border-2 border-black p-1 bg-[#ccd6f6] w-full"
              type="tel"
              placeholder="Phone Number"
              ref={phoneRef}
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
              ref={messageRef}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              className="rounded-md bg-gradient-to-r z-10 from-bg-gradient-to-r from-[#3E8DE3] to-[#143AA2] border-2 border-black text-white hover:scale-110 duration-500 px-4 py-3 my-8 mx-auto"
              type="submit"
            >
              Send Contact Information
            </button>
            {/* Display success message if it's not empty */}
            {successMessage && <p className="text-xl border-2 border-black mb-6 bg-[#3E8DE3] rounded-md text-center text-[#143AA2]">{successMessage}</p>}
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
              <FaFacebook className="hover:text-[#3E8DE3]" size={24} />
            </a>
            <a 
                href="https://twitter.com/REACH14AllOrg"
                target="_blank"
                rel="noopener noreferrer"

            >
              <FaTwitter className="hover:text-[#3E8DE3]" size={24} />
            </a>
            <a 
                href="mailto:r.e.a.c.h.14all@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaEnvelope className="hover:text-[#3E8DE3]" size={24} />
            </a>
            <a 
                href="https://www.linkedin.com/in/reach-organization-005a69280/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-[#3E8DE3]" size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl text-white hover:text-[#3E8DE3] transition-colors" />
            </a>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <h3 className="border-b-4 border-[#3E8DE3] text-xl font-semibold">Our Contact Information</h3>
          <p className="text-lg">Call us at: <a href="tel:+15615983236" className="hover:text-[#3E8DE3]">+1 (561) 598-3236</a></p>
          <p className="text-lg">Email us at: <a href="mailto:r.e.a.c.h.14all@gmail.com" className="hover:text-[#3E8DE3]">R.E.A.C.H.14ALL@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;