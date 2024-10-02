import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '../shared/Button';
import Border from '../shared/Border';

export default function Clients() {
    return (
        <section className="container mx-auto px-4 mt-20">
            <h2 className="text-center text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] font-normal text-white">
                Our Clients
            </h2>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                grabCursor
                className='px-4 mt-10 mb-20'
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 60,
                    },
                    1536: {
                        slidesPerView: 7,
                        spaceBetween: 70,
                    },
                }}
            >
                <SwiperSlide>
                    <img
                        src="terrascope.png"
                        alt="Company 1"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="anytime.png"
                        alt="Company 2"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="x-dot.png"
                        alt="Company 3"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="brando.png"
                        alt="Company 4"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="myhomeb.png"
                        alt="Company 5"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="huawei.png"
                        alt="Company 6"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="maple.png"
                        alt="Company 7"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="terrascope.png"
                        alt="Company 1"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="anytime.png"
                        alt="Company 2"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="x-dot.png"
                        alt="Company 3"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="brando.png"
                        alt="Company 4"
                        className="h-[98.67px] w-[98.67px] sm:h-[100px] sm:w-[100px] md:h-[110px] md:w-[110px] lg:h-[115px] lg:w-[115px] xl:h-[118px] xl:w-[118px] 2xl:h-[120px] 2xl:w-[120px]"
                    />
                </SwiperSlide>
            </Swiper>

            <div className="grid grid-cols-3 items-center">
                <div className="flex justify-center lg:justify-end">
                    <img
                        src="left-feather.png"
                        className='w-[108px] h-[204px] sm:w-[130px] sm:h-[245px] md:w-[150px] md:h-[280px] lg:w-[170px] lg:h-[320px] xl:w-[180px] xl:h-[340px] 2xl:w-[191px] 2xl:h-[360px]'
                        alt="Left Image"
                    />

                </div>

                <div className="text-center">
                    <p className="text-white text-[16px] leading-[33px] sm:text-[20px] sm:leading-[35px] md:text-[24px] md:leading-[40px] lg:text-[32px] lg:leading-[50px] xl:text-[40px] xl:leading-[60px] 2xl:text-[48px] 2xl:leading-[72px] font-semibold mb-8">
                        Start for <span className="text-[#6AC6AD]"> free consultation</span> with our experts and get the direction for your project
                    </p>
                    <Button className="py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12" text="Let's Talk" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                </div>
                <div className="flex justify-center lg:justify-start">
                    <img src="right-feather.png" className='w-[108px] h-[204px] sm:w-[130px] sm:h-[245px] md:w-[150px] md:h-[280px] lg:w-[170px] lg:h-[320px] xl:w-[180px] xl:h-[340px] 2xl:w-[191px] 2xl:h-[360px]' alt="Right Image" />
                </div>
            </div>
            <Border />
        </section>
    );
}
