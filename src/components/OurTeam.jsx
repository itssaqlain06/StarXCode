import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import Border from '../shared/Border';

const teamMembers = [
    { name: 'Yevhen Oleksiy', role: 'Blockchain Architect', img: 'team_01.png' },
    { name: 'Yevhen Oleksiy', role: 'Marketing Manager', img: 'team_02.png' },
    { name: 'Yevhen Oleksiy', role: 'Blockchain Engineer', img: 'team_03.png' },
    { name: 'Shahzaib Munir', role: 'Founder & CEO', img: 'team_04.png' },
    { name: 'Another Member', role: 'Product Manager', img: 'team_01.png' },
    { name: 'More Member', role: 'UI/UX Designer', img: 'team_02.png' },
    { name: 'New Member', role: 'Developer', img: 'team_03.png' },
    { name: 'New Member', role: 'Developer', img: 'team_04.png' }
];

export default function OurTeam() {
    const swiperRef = useRef(null);

    const nextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const prevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <>
            <section className="container mx-auto mt-20">
                <h2 className="text-center text-[48px] font-normal mb-12 text-white">OUR TEAM</h2>

                <div className="hidden lg:flex relative items-center justify-between">
                    <img src="arrow-left.png" alt="Left Arrow" className="cursor-pointer" onClick={prevSlide} />

                    <div className="w-full overflow-hidden">
                        <Swiper
                            ref={swiperRef}
                            slidesPerView={1}
                            spaceBetween={20}
                            navigation={false}
                            breakpoints={{
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                                1280: { slidesPerView: 4, spaceBetween: 40 }
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {teamMembers.map((member, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex-shrink-0 p-4" style={{ maxWidth: '345px', height: '345px' }}>
                                        <div className="bg-main border-[1px] border-[#04A0F8] p-6 rounded-xl text-center" style={{ width: '100%', height: '100%' }}>
                                            <div className="rounded-full bg-gray-500 w-24 h-24 mx-auto mb-4">
                                                <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                                            </div>
                                            <h3 className="text-white text-xl font-semibold leading-6">{member.name}</h3>
                                            <p className="text-gray-400 text-xl font-normal leading-8 mt-2">{member.role}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <img src="arrow-right.png" alt="Right Arrow" className="cursor-pointer" onClick={nextSlide} />
                </div>

                <div className="flex lg:hidden flex-wrap justify-center gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full sm:w-[345px]"
                            style={{ maxWidth: '375px', height: '375px' }}
                        >
                            <div className="bg-main border-[1px] border-[#04A0F8] p-6 rounded-lg text-center" style={{ width: '100%', height: '100%' }}>
                                <div className="rounded-full bg-gray-500 w-24 h-24 mx-auto mt-10 mb-4">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                                </div>
                                <h3 className="text-white text-xl font-semibold leading-6">{member.name}</h3>
                                <p className="text-gray-400 text-xl font-normal leading-8 mt-4">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Border />
        </>
    );
}
