import React, { useState } from 'react';

const teamMembers = [
    { name: 'Yevhen Oleksiy', role: 'Blockchain Architect', img: '../../public/team_01.png' },
    { name: 'Yevhen Oleksiy', role: 'Marketing Manager', img: '../../public/team_02.png' },
    { name: 'Yevhen Oleksiy', role: 'Blockchain Engineer', img: '../../public/team_03.png' },
    { name: 'Shahzaib Munir', role: 'Founder & CEO', img: '../../public/team_04.png' },
    { name: 'Another Member', role: 'Product Manager', img: '../../public/team_01.png' },
    { name: 'More Member', role: 'UI/UX Designer', img: '../../public/team_02.png' },
    { name: 'New Member', role: 'Developer', img: '../../public/team_03.png' },
    { name: 'New Member', role: 'Developer', img: '../../public/team_04.png' }
];

export default function OurTeam() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 4;

    const nextSlide = () => {
        if (currentIndex < teamMembers.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            <section className="container mx-auto my-20">
                <h2 className="text-center text-[48px] font-normal mb-12 text-white">OUR TEAM</h2>

                <div className="relative flex items-center gap-10 justify-between">
                    <img src="../../public/arrow-left.png" alt="Left Arrow" className='cursor-pointer' onClick={prevSlide} />

                    <div className="w-full overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                        >
                            {teamMembers.map((member, index) => (
                                <div key={index} className="flex-shrink-0 p-4" style={{ width: '345px', height: '345px' }}>
                                    <div className="bg-main border-2 border-[#04A0F8] p-6 rounded-lg text-center" style={{ width: '100%', height: '100%' }}>
                                        <div className="rounded-full bg-gray-500 w-24 h-24 mx-auto mb-4">
                                            <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full" />
                                        </div>
                                        <h3 className="text-white text-xl font-semibold leading-6">{member.name}</h3>
                                        <p className="text-gray-400 text-xl font-normal leading-8 mt-2">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <img src="../../public/arrow-right.png" alt="Right Arrow" className='cursor-pointer' onClick={nextSlide} />
                </div>
            </section>
            <img src="../../public/hr-line.png" alt="Rainbow" className='m-auto' />
        </>
    );
}
