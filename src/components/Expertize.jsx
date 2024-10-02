import React from 'react';
import Button from '../shared/Button';
import Border from '../shared/Border';
import Card from '../shared/Card';

export default function Expertise() {

    return (
        <>
            <section className="px-4">
                <div className='flex flex-col justify-center items-center relative'>
                    <div className="text-center text-white mb-10 font-normal text-[24px] leading-[30px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[42px] lg:text-[40px] lg:leading-[50px] xl:text-[44px] xl:leading-[55px] 2xl:text-[48px] 2xl:leading-[60px] px-4 lg:px-60">
                        From Idea to Completion, we bring Full-Stack Expertise
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 text-white px-4 mb-10">
                        <Card />
                    </div>

                    <Button className="py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12" text="Explore UI UX Design Kits" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />

                    <Border />
                </div>
            </section>
        </>
    );
}
