import React from 'react';

const Awards = () => {
    return (
        <>
            <section className="py-12 px-10">
                <div className="container mx-auto">
                    <div className="bg-[#1e1f2b] border-2 border-[#04A0F8] rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                        <div className="p-6">
                            <h2 className="text-5xl font-normal leading-[60px] mb-4 text-white">Awards & Achievements</h2>
                            <p className="text-[#ADA8C3] font-normal text-lg leading-6">
                                At StarXcodes, we pride ourselves on delivering exceptional digital solutions that have garnered industry recognition and accolades. Our commitment to innovation, quality, and client satisfaction is reflected in the numerous awards and achievements we have earned over the years. Here are some highlights
                            </p>
                        </div>
                        <div className="p-6">
                            <img src="../../public/top.png" alt="Award 1" />
                        </div>
                        <div className="p-6">
                            <img src="../../public/software.png" alt="Award 2" />
                        </div>
                        <div className="p-6">
                            <img src="../../public/clutch.png" alt="Award 3" />
                        </div>
                    </div>
                </div>
            </section>
            <img src="../../public/hr-line.png" alt="Rainbow" className='m-auto' />
        </>
    );
};

export default Awards;
