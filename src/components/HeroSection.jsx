import React from 'react';
import Button from '../shared/Button';
import Border from '../shared/Border';

const HeroSection = () => {
    return (
        <section className="container mx-auto">
            <div className='flex flex-col justify-center items-center relative py-14'>
                <div className="flex items-center justify-center mb-6 space-x-4 px-4">
                    <img src="left-rectangle.png" alt="Right Icon" className="w-[31.15px] h-[1.48px] lg:w-[63px] lg:h-[3px]" />
                    <img src="starXCode.png" alt="Left Icon" className="w-[11.37px] h-[11.37px] lg:w-[23px] lg:h-[23px]" />

                    <p className="text-center text-sm lg:text-2xl font-semibold text-[#D7D7D7] leading-5 2xl:leading-[72px] lg:leading-10">
                        One-Stop Website, Mobile App, & Custom Software Development Solution
                    </p>

                    <img src="starXCode.png" alt="Right Icon" className="w-[11.37px] h-[11.37px] lg:w-[23px] lg:h-[23px]" />
                    <img src="right-rectangle.png" alt="Left Icon" className="w-[31.15px] h-[1.48px] lg:w-[63px] lg:h-[3px]" />
                </div>

                <div className="px-4 text-center">
                    <div className="text-white">
                        <h1 className="font-semibold text-base leading-6 xl:text-[60px] xl:leading-[72px] lg:text-5xl lg:leading-[50px] px-4">
                            Delivering quality <span className="text-teal-400">projects</span> beyond <p>expectations</p>
                        </h1>
                        <div className="flex justify-center mt-2">
                            <img src="rainbow.png" alt="Rainbow" className="lg:w-[395px] lg:h-4 w-[137.67px] h-[4.88]" />
                        </div>

                        <p className="lg:text-xl text-sm leading-8 font-light px-2 lg:px-64 my-6 text-[#ADA8C3]">
                            StarXcodes is a professional web, mobile app development, UI UX design kits, and WordPress
                            Plugins and Themes business that prioritizes client happiness and smart technologies. Since its founding in 2019, our organization has a 100% success rate when providing top-notch solutions to enterprises throughout the world. Hire our knowledge at a reasonable cost to get the best IT solutions for your business.
                        </p>
                        <Button text="Let's Talk" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)", width: "176px" }} />
                    </div>
                </div>

                <Border />

                <div className="absolute lg:left-20 top-0 left-0">
                    <img src="figma.png" alt="Figma Icon" className="w-[80px] h-[80px]" />
                </div>
                <div className="absolute top-14 right-0">
                    <img src="react.png" alt="React Icon" className="w-[60px] h-[60px]" />
                </div>
                <div className="absolute lg:top-34 lg:left-14 top-56 left-0">
                    <img src="flutter.png" alt="Flutter Icon" className="w-[60px] h-[60px]" />
                </div>
                <div className="absolute lg:top-[25rem] lg:right-14 top-[30rem] right-0">
                    <img src="laptop.png" alt="Laptop Icon" className="w-[50px] h-[50px]" />
                </div>
                <div className="absolute lg:bottom-28 lg:left-56 bottom-72 left-0">
                    <img src="wp.png" alt="WP Icon" className="w-[60px] h-[60px]" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
