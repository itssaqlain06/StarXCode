import React from 'react';

export default function Technology() {
    return (
        <>
            <section className="container mx-auto flex flex-row items-center justify-between mt-20">

                <div className="text-white z-20 w-1/2">
                    <h2 className="text-[48px] font-normal leading-[60px] mb-4">
                        Technologies We Work With
                    </h2>

                    <p className="text-[16px] leading-[24px] font-normal">
                        At StarXcodes, we utilize a diverse range of <br /> technologies and stacks to deliver
                        robust, scalable,<br /> and innovative solutions tailored to our clients' <br />needs.
                        Our expertise spans across various domains,<br /> ensuring comprehensive
                        and high-quality <br /> development services.
                    </p>
                </div>

                <div className="relative w-full">
                    <img
                        src="../../public/tech-logo.png"
                        alt="Technologies Logo"
                        className='absolute top-[-130px]'
                    />
                </div>
            </section>
            <img src="../../public/hr-line.png" alt="Rainbow" className='m-auto mt-20' />
        </>
    );
}
