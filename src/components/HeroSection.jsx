import React from 'react';
import Button from '../shared/Button';
import Border from '../shared/Border';

const HeroSection = () => {
    return (
        <section className="container mx-auto">
            <div className='flex flex-col justify-center items-center relative py-10'>
                <div className="flex items-center justify-center mb-6 space-x-4 px-4">
                    <img src="left-rectangle.png" alt="Right Icon" className="w-[31.15px] h-[1.48px] md:w-[46px] md:h-[2.24px] lg:w-[63px] lg:h-[3px]" />
                    <img src="starXCode.png" alt="Left Icon" className="w-[11.37px] h-[11.37px] md:w-[17.74px] md:h-[17.74px] lg:w-[23px] lg:h-[23px]" />

                    <p className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#D7D7D7] leading-5 2xl:leading-[72px] lg:leading-10 md:leading-8 sm:leading-6">
                        One-Stop Website, Mobile App, & Custom Software Development Solutions
                    </p>

                    <img src="starXCode.png" alt="Right Icon" className="w-[11.37px] h-[11.37px] md:w-[17.74px] md:h-[17.74px] lg:w-[23px] lg:h-[23px]" />
                    <img src="right-rectangle.png" alt="Left Icon" className="w-[31.15px] h-[1.48px] md:w-[46px] md:h-[2.24px] lg:w-[63px] lg:h-[3px]" />
                </div>

                <div className="px-4 text-center">
                    <div className="text-white">
                        <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-7 sm:leading-9 md:leading-[46px] lg:leading-[58px] xl:leading-[72px] px-4">
                            Delivering quality <span className="text-teal-400">projects</span> beyond <p>expectations</p>
                        </h1>
                        <div className="flex justify-center mt-2">
                            <img src="rainbow.png" alt="Rainbow" className="w-[137px] h-[5px] sm:w-[220px] sm:h-[7px] md:w-[274px] md:h-3 lg:w-[395px] lg:h-4" />
                        </div>

                        <p className="text-sm leading-8 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light lg:px-28 px-6 sm:px-4 md:px-2 my-6 text-[#ADA8C3]">
                            StarXcodes is a professional web, mobile app development, UI UX design kits, and WordPress Plugins and Themes business that prioritizes client happiness and smart technologies. Since its founding in 2019, our organization has a 100% success rate when providing top-notch solutions to enterprises throughout the world. Hire our knowledge at a reasonable cost to get the best IT solutions for your business.
                        </p>

                        <Button className="py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12 mt-4" text="Let's Talk" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                    </div>
                </div>

                <Border />

                <div>
                    <div className="absolute top-8 md:top-5 lg:top-2 left-0 2xl:left-0 lg:left-[-20px] animate-float">
                        <img src="figma.png" alt="Figma Icon" className="w-[33.95px] h-[33.95px] sm:w-[45px] sm:h-[45px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] 2xl:w-[100px] 2xl:h-[100px]" />
                    </div>

                    <div className="absolute sm:top-6 md:top-8 lg:top-10 top-6 right-0 animate-float">
                        <img src="react.png" alt="React Icon" className="w-[29.52px] h-[29.52px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px]" />
                    </div>

                    <div className="absolute sm:left-0 md:top-70 lg:top-80 md:left-[-15px] lg:left-0 top-64 left-0 animate-float-opposite">
                        <img src="flutter.png" alt="Flutter Icon" className="w-[21.89px] h-[21.89px] sm:w-[35px] sm:h-[35px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px]" />
                    </div>

                    <div className="absolute top-[27rem] right-0 animate-float-opposite">
                        <img src="laptop.png" alt="Laptop Icon" className="w-[35.66px] h-[35.66px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[55px] xl:h-[55px] 2xl:w-[60px] 2xl:h-[60px]" />
                    </div>

                    <div className="absolute bottom-40 sm:left-10 sm:bottom-44 md:bottom-36 md:left-10 lg:left-56 left-2 animate-float">
                        <img src="wp.png" alt="WP Icon" className="w-[28.64px] h-[28.64px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
