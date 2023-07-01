import React from 'react';

function About() {
    return(
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-[#fffff] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className=" py-16 rounded-md bg-[#9e215a] flex flex-col justify-center items-center h-4/6 w-4/6">
                    <div className=" pb-8 pl-4">
                        <p className="text-5xl font-bold inline border-b-4 border-[#d9317e]">
                            About Our Organization
                        </p>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-xl font-bold">
                            <p>
                                R.E.A.C.H. is dedicated to providing community assistance for drug addiction. We offer counseling services, referral programs for inpatient help, food assistance, and job placement. Our goal is to support individuals in their recovery journey and help them rebuild their lives with the necessary resources and guidance.
                            </p>
                        </div>
                        <div>
                            <p>
                                Our organizations' mission is to reach individuals seeking help, resources, and support to overcome addiction, access food for themselves and their families, and secure employment. We are committed to providing assistance to individuals from all walks of life, irrespective of their race, creed, color, gender, or background. Our goal is to empower individuals to become productive members of society by offering inclusive and comprehensive services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;