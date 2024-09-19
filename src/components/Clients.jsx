import React from 'react';
import Button from '../shared/Button'

export default function Clients() {
    return (
        <section className="container mx-auto mt-20">
            <h2 className="text-center text-[48px] font-normal mb-10 text-white">
                Our Clients
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 mb-16 justify-items-center gap-10">
                <img src="../../public/terrascope.png" alt="Company 1" />
                <img src="../../public/anytime.png" alt="Company 2" />
                <img src="../../public/x-dot.png" alt="Company 3" />
                <img src="../../public/brando.png" alt="Company 4" />
                <img src="../../public/myhomeb.png" alt="Company 5" />
                <img src="../../public/huawei.png" alt="Company 6" />
                <img src="../../public/maple.png" alt="Company 7" />
            </div>

            <div className="grid grid-cols-3 items-center">
                <div className="flex justify-center lg:justify-end">
                    <img src="../../public/left-feather.png" className='w-[191px] h-[360px]' alt="Left Image" />
                </div>

                <div className="text-center">
                    <p className="text-white text-[38px] leading-[72px] font-semibold mb-8">
                        Start for <span className="text-[#6AC6AD]">free consultation</span> with our experts and get the direction for your project
                    </p>
                    <Button text="Let's Talk" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)", width: "176px" }} />
                </div>
                <div className="flex justify-center lg:justify-start">
                    <img src="../../public/right-feather.png" className='w-[191px] h-[360px]' alt="Right Image" />
                </div>
            </div>

            <img src="../../public/hr-line.png" alt="Rainbow" className='m-auto mt-20' />
        </section>
    );
}
