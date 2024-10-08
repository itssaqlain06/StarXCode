import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Border from '../shared/Border';
import Button from '../shared/Button';

export default function UiKits() {
    return (
        <>
            <section className="mt-20 px-2 sm:px-0">
                <h2 className="text-center text-[24px] leading-[30px] sm:text-[28px] sm:leading-[34px] md:text-[32px] md:leading-[40px] lg:text-[36px] lg:leading-[46px] xl:text-[42px] xl:leading-[52px] 2xl:text-[48px] 2xl:leading-[60px] font-normal mb-14 text-white px-2">
                    UI Kits
                </h2>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                        1280: { slidesPerView: 4, spaceBetween: 50 },
                        1536: { slidesPerView: 4, spaceBetween: 60 }
                    }}
                    className="mb-10 px-4 sm:px-0"
                >
                    <SwiperSlide><img src="mockup-1.png" alt="Project 1" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-2.png" alt="Project 2" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-3.png" alt="Project 3" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-4.png" alt="Project 4" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-1.png" alt="Project 1" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-2.png" alt="Project 2" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-3.png" alt="Project 3" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-4.png" alt="Project 4" className="w-full h-auto" /></SwiperSlide>
                </Swiper>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                        1280: { slidesPerView: 3, spaceBetween: 50 },
                        1536: { slidesPerView: 3, spaceBetween: 60 }
                    }}
                    className="mb-10 px-4 sm:px-0"
                >
                    <SwiperSlide><img src="mockup-5.png" alt="Project 5" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-6.png" alt="Project 6" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-7.png" alt="Project 7" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-5.png" alt="Project 5" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-6.png" alt="Project 6" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-7.png" alt="Project 7" className="w-full h-auto" /></SwiperSlide>
                </Swiper>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                        1280: { slidesPerView: 4, spaceBetween: 50 },
                        1536: { slidesPerView: 4, spaceBetween: 60 }
                    }}
                    className="px-4 sm:px-0"
                >
                    <SwiperSlide><img src="mockup-8.png" alt="Project 8" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-9.png" alt="Project 9" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-10.png" alt="Project 10" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-11.png" alt="Project 11" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-8.png" alt="Project 8" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-9.png" alt="Project 9" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-10.png" alt="Project 10" className="w-full h-auto" /></SwiperSlide>
                    <SwiperSlide><img src="mockup-11.png" alt="Project 11" className="w-full h-auto" /></SwiperSlide>
                </Swiper>
                <div className='flex justify-center mt-10'>
                    <Button className="py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12" text="View More" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                </div>
                <Border />
            </section>
        </>
    );
}
