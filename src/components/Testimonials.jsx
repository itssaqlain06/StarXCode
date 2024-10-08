import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Border from '../shared/Border';

export default function Testimonials() {
    return (
        <>
            <div className="container mx-auto mt-20 px-2 lg:px-14">
                <div className="flex flex-col text-center w-full">
                    <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[48px] text-white font-normal mb-1">
                        Testimonials
                    </h2>
                </div>

                <div className="grid grid-cols-12 gap-4 mx-4 text-center border rounded-3xl border-[#04A0F8] text-white bg-main my-14">

                    <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-8 relative">
                        <div className="rounded-lg">
                            <h2 className="text-[60px] sm:text-[80px] leading-[74px] sm:leading-[94px] font-medium title-font mb-2">10k</h2>
                            <p className="leading-6 text-lg sm:text-xl mb-4">Complete Projects</p>
                        </div>

                        <div className="lg:hidden absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-[#04A0F8]"></div>
                    </div>

                    <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-8 relative">
                        <div className="rounded-lg">
                            <h2 className="text-[60px] sm:text-[80px] leading-[74px] sm:leading-[94px] font-medium title-font mb-2">99%</h2>
                            <p className="leading-6 text-lg sm:text-xl mb-4">Satisfied Clients</p>
                        </div>
                        <div className="hidden sm:block absolute top-[10%] bottom-[10%] w-[1px] bg-[#04A0F8]"></div>
                        <div className="sm:hidden absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-[#04A0F8]"></div>
                    </div>

                    <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-8 relative">
                        <div className="rounded-lg">
                            <h2 className="text-[60px] sm:text-[80px] leading-[74px] sm:leading-[94px] font-medium title-font mb-2">200+</h2>
                            <p className="leading-6 text-lg sm:text-xl mb-4">Success Campaigns</p>
                        </div>
                        <div className="hidden lg:block absolute top-[10%] bottom-[10%] w-[1px] bg-[#04A0F8]"></div>
                    </div>
                </div>
            </div>
            <div className="mb-10 px-6 md:px-0">
                <Swiper
                    watchSlidesProgress={true}
                    grabCursor
                    spaceBetween={50}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {Array(10).fill(0).map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-2xl bg-main text-white p-6 shadow-sm sm:p-8 w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="Person"
                                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                        className="size-14 rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-[15px] leading-[15px] sm:text-[16px] sm:leading-[18px] md:text-[17px] md:leading-[20px] lg:text-[17px] lg:leading-[22px] xl:text-[18px] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[26px] font-bold">
                                            Person {index + 1}
                                        </p>

                                        <p className="text-[7.26px] leading-[26px] sm:text-[8px] sm:leading-[26px] md:text-[9px] md:leading-[26px] lg:text-[10px] lg:leading-[26px] xl:text-[11px] xl:leading-[26px] 2xl:text-[12px] 2xl:leading-[26px] font-normal text-[#8A90A2]">
                                            CEO At Company
                                        </p>

                                    </div>
                                    <div className="ml-auto flex justify-end gap-0.5 text-[#6AC6AD]">
                                        {Array(5).fill(0).map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[10.9px] leading-[18.2px] sm:text-[12px] sm:leading-[20px] md:text-[14px] md:leading-[24px] lg:text-[16px] lg:leading-[28px] xl:text-[17px] xl:leading-[29px] 2xl:text-[18px] 2xl:leading-[30px] font-light mt-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                                </p>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className=" px-6 md:px-0">
                <Swiper
                    watchSlidesProgress={true}
                    grabCursor
                    centeredSlides
                    spaceBetween={50}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {Array(10).fill(0).map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-2xl bg-main text-white p-6 shadow-sm sm:p-8 w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="Person"
                                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                        className="size-14 rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-[15px] leading-[15px] sm:text-[16px] sm:leading-[18px] md:text-[17px] md:leading-[20px] lg:text-[17px] lg:leading-[22px] xl:text-[18px] xl:leading-[24px] 2xl:text-[18px] 2xl:leading-[26px] font-bold">Person {index + 1}</p>
                                        <p className="text-[7.26px] leading-[26px] sm:text-[8px] sm:leading-[26px] md:text-[9px] md:leading-[26px] lg:text-[10px] lg:leading-[26px] xl:text-[11px] xl:leading-[26px] 2xl:text-[12px] 2xl:leading-[26px] font-normal text-[#8A90A2]">CEO At Company</p>
                                    </div>
                                    <div className="ml-auto flex justify-end gap-0.5 text-[#6AC6AD]">
                                        {Array(5).fill(0).map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="size-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[10.9px] leading-[18.2px] sm:text-[12px] sm:leading-[20px] md:text-[14px] md:leading-[24px] lg:text-[16px] lg:leading-[28px] xl:text-[17px] xl:leading-[29px] 2xl:text-[18px] 2xl:leading-[30px] font-light mt-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Border />
        </>
    );
}
