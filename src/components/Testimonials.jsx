import React from 'react';

export default function Testimonials() {
    return (
        <div className="container px-5 my-24 mx-auto">
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
    );
}
