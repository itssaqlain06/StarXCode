import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Testimonials() {
    return (
        <>
            <div className="container my-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-5xl text-white font-normal mb-1">Testimonials</h2>
                </div>

                <div className="flex flex-wrap mx-32 text-center border rounded-3xl border-[#04A0F8] text-white">
                    <div className="w-1/3">
                        <div className="p-8 rounded-lg relative">
                            <h2 className="text-[80px] leading-[94px] font-medium title-font mb-2">10k</h2>
                            <p className="leading-6 text-xl mb-4">Complete Projects</p>
                            <div className="absolute inset-y-0 right-0 w-0.5 bg-[#04A0F8]"></div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="p-8 rounded-lg relative">
                            <h2 className="text-[80px] leading-[94px] font-medium title-font mb-2">99%</h2>
                            <p className="leading-6 text-xl mb-4">Satisfied Clients</p>
                            <div className="absolute inset-y-0 right-0 w-0.5 bg-[#04A0F8]"></div>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <div className="p-8 rounded-lg relative">
                            <h2 className="text-[80px] leading-[94px] font-medium title-font mb-2">200+</h2>
                            <p className="leading-6 text-xl mb-4">Success Campaigns</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-14">
                <Swiper
                    watchSlidesProgress={true}
                    slidesPerView={3}
                    spaceBetween={50}
                    grabCursor
                >
                    {Array(10).fill(0).map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-2xl bg-main text-white p-6 shadow-sm sm:p-8 w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                        className="size-14 rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-lg font-bold leading-7">Person {index + 1}</p>
                                        <p className="text-xs font-normal leading-10 text-[#8A90A2]">CEO At Company</p>
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
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="mb-20">
                <Swiper
                    watchSlidesProgress={true}
                    slidesPerView={3}
                    spaceBetween={50}
                    centeredSlides
                    grabCursor
                >
                    {Array(10).fill(0).map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-2xl bg-main text-white p-6 shadow-sm sm:p-8 w-full">
                                <div className="flex items-center gap-4">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                        className="size-14 rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-lg font-bold leading-7">Person {index + 1}</p>
                                        <p className="text-xs font-normal leading-10 text-[#8A90A2]">CEO At Company</p>
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
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-4">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <img src="../../public/hr-line.png" alt="Rainbow" className='m-auto mt-10' />
        </>
    );
}
