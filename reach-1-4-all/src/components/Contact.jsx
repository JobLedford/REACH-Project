import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        //ADD
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return(
        <div className="combo">
        <div name='contact' className='w-full h-screen bg-[#fffff] flex justify-center items-center p-4'>
            <div className='flex flex-col max-w-[600px] mt-[55px] w-full'>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-5xl font-bold inline border-b-4 border-[#d9317e] text-[#00000]'>Contact</p>
                    <p className='checkpoint text-black-300 pb-0 py-4 text-l'>You can contact us by either calling, emailing, or fill out this form and we will contact you.</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className=' my-4 p-1 mb-0 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
                <input className='my-4 p-1 bg-[#ccd6f6]' type="tel" placeholder="Phone Number" name='phone' required />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="5" placeholder='Message'></textarea>
                <button className='rounded-md bg-gradient-to-r from-bg-gradient-to-r from-[#d9317e] to-[#9e215a] text-white hover:bg-[#d9317e] hover:border-[#d9317e] px-4 py-3 my-8 mx-auto flex items-center'>Send Contact Information</button>
            </div>
        </div>
        <div className="footer bg-gradient-to-r from-bg-gradient-to-r from-[#d9317e] to-[#9e215a] text-white py-4">
            <div className="max-w-screen-lg mx-auto px-4">
                <div>
                    <h3 className="border-b-4 border-[#d9317e] text-xl font-semibold">Our Contact Information</h3>
                    <p className="text-lg">Click to Call our Phone Number: <a href="tel:+15615983236">+1 (561) 598-3236</a></p>
                    <p className="text-lg">Click to Email us at: <a href="mailto:r.e.a.c.h.14all@gmail.com">R.E.A.C.H.14ALL@gmail.com</a></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;