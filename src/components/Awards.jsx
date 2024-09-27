import React from 'react';
import Border from '../shared/Border';

const Awards = () => {
    return (
        <>
            <section className="relative container mx-auto mt-32">
                <img
                    src="layers.png"
                    alt="Gradient Overlay"
                    className="absolute -left-0 -top-56 inset-0 rounded-3xl opacity-50 z-10"
                />
                <div className="relative z-0 bg-main border-2 border-[#04A0F8] rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 px-4 lg:p-20 justify-items-center items-center mx-4">

                    <div className="lg:col-span-1">
                        <h2 className="text-[24px] leading-[30px] sm:text-[28px] sm:leading-[34px] md:text-[32px] md:leading-[40px] lg:text-[36px] lg:leading-[46px] xl:text-[48px] xl:leading-[52px] 2xl:text-[60px] 2xl:leading-[60px] font-normal mb-4 text-white">
                            Awards & Achievements
                        </h2>

                        <p className="text-[#ADA8C3] font-normal text-lg leading-6 text-center sm:text-left">
                            At StarXcodes, we pride ourselves on delivering exceptional digital solutions that have garnered industry recognition and accolades. Our commitment to innovation, quality, and client satisfaction is reflected in the numerous awards and achievements we have earned over the years. Here are some highlights:
                        </p>
                    </div>

                    <div className="p-6 flex justify-center">
                        <img src="top.png" alt="Award 1" className="w-full max-w-[200px]" />
                    </div>
                    <div className="p-6 flex justify-center">
                        <img src="software.png" alt="Award 2" className="w-full max-w-[200px]" />
                    </div>
                    <div className="p-6 flex justify-center">
                        <img src="clutch.png" alt="Award 3" className="w-full max-w-[200px]" />
                    </div>
                </div>
            </section>
            <Border />
        </>
    );
};

export default Awards;
