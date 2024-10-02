import React from 'react';
import Border from '../shared/Border';

export default function Technology() {
    return (
        <>
            <section className="mt-10 px-6 lg:px-10">
                <div className="flex lg:flex-row flex-col items-center bg-main rounded-3xl border border-[#04A0F8]">
                    <div className="lg:w-1/2 text-white lg:text-start p-4 sm:p-6 md:p-8 lg:p-10 lg:mb-20">
                        <h2 className="2xl:text-[48px] xl:text-[42px] lg:text-[36px] md:text-[32px] sm:text-[28px] text-2xl font-normal leading-10 lg:leading-[60px] mb-4 ">
                            Technologies We Work With
                        </h2>

                        <p className="text-[16px] lg:text-left text-center leading-[24px] font-normal text-[#ADA8C3] lg:w-[430px]">
                            At StarXcodes, we utilize a diverse range of technologies and stacks to deliver
                            robust, scalable, and innovative solutions tailored to our clients' needs.
                            Our expertise spans across various domains, ensuring comprehensive
                            and high-quality development services.
                        </p>
                    </div>

                    <div className="p-1 mb-10">
                        <img
                            src="tech-logo.png"
                            alt="Technologies Logo"
                        />
                    </div>
                </div>
                <Border />
            </section>
        </>
    );
}
