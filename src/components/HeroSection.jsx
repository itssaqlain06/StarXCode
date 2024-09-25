import React from 'react';
import Button from '../shared/Button';

const HeroSection = () => {
    return (
        <section className="container mx-auto px-44 min-h-[90vh] flex flex-col justify-center items-center relative mt-4">
            <div className="flex items-center justify-center mb-6 space-x-4">
                <img src="left-rectangle.png" alt="Right Icon" className="" />
                <img src="starXCode.png" alt="Left Icon" className="w-[23px] h-[23px]" />
                <p className="text-[24px] font-semibold text-white">
                    One-Stop Website, Mobile App, & Custom Software Development Solution
                </p>
                <img src="starXCode.png" alt="Right Icon" className="w-[23px] h-[23px]" />
                <img src="right-rectangle.png" alt="Left Icon" />
            </div>

            <div className="container mx-auto px-4 text-center">
                <div className="text-white mb-12">
                    <h1 className="font-semibold text-[60px]">
                        Delivering quality <span className="text-teal-400">projects</span> beyond expectations
                    </h1>
                    <div className="flex justify-center mt-2">
                        <img src="rainbow.png" alt="Rainbow" className="w-[330px]" />
                    </div>

                    <p className="text-[20px] font-light px-40 my-6">
                        StarXcodes is a professional web, mobile app development, UI UX design kits, and WordPress
                        Plugins and Themes business that prioritizes client happiness and smart technologies. Since its founding in 2019, our organization has a 100% success rate when providing top-notch solutions to enterprises throughout the world. Hire our knowledge at a reasonable cost to get the best IT solutions for your business.
                    </p>
                    <Button text="Let's Talk" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)", width: "176px" }} />

                </div>
                <img src="hr-line.png" alt="Rainbow" className='m-auto mt-20' />
            </div>

            <div className="absolute top-0 left-20">
                <img src="figma.png" alt="Figma Icon" className="w-[80px] h-[80px]" />
            </div>
            <div className="absolute top-14 right-0">
                <img src="react.png" alt="Figma Icon" className="w-[60px] h-[60px]" />
            </div>
            <div className="absolute top-34 left-14">
                <img src="flutter.png" alt="Figma Icon" className="w-[60px] h-[60px]" />
            </div>
            <div className="absolute top-[25rem] right-14">
                <img src="laptop.png" alt="Figma Icon" className="w-[50px] h-[50px]" />
            </div>
            <div className="absolute bottom-28 left-56">
                <img src="wp.png" alt="Figma Icon" className="w-[60px] h-[60px]" />
            </div>
        </section>
    );
};

export default HeroSection;
