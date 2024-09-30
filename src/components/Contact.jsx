import React from 'react'
import Button from '../shared/Button'
import Border from '../shared/Border'

export default function Contact() {
    return (
        <>
            <section className="container mx-auto mt-20 px-4 md:px-0">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="card h-fit max-w-6xl p-5 md:p-12 bg-main rounded-3xl border-t-[3px] border-l-[1px] border-r-[1px] border-b-[0px] border-[#AE63C4]">
                        <h2 className="text-[20.22px] leading-[25px] sm:text-[24px] sm:leading-[30px] md:text-[30px] md:leading-[38px] lg:text-[36px] lg:leading-[45px] xl:text-[40px] xl:leading-[50px] 2xl:text-[44px] 2xl:leading-[55px] font-bold text-white mb-2">
                            Get in Touch
                        </h2>

                        <h2 className="text-[8.27px] leading-[11px] sm:text-[10px] sm:leading-[14px] md:text-[12px] md:leading-[16px] lg:text-[14px] lg:leading-[20px] xl:text-[16px] xl:leading-[22px] 2xl:text-[18px] 2xl:leading-[24px] text-[#DFDFDF] mb-10">
                            Contact us for any guidance and information.
                        </h2>

                        <form>
                            <div className="mb-6">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="mb-2 w-full rounded-xl border border-white bg-transparent py-2 px-4 text-white shadow-md 
        text-[8.27px] leading-[13px] tracking-[1%] 
        sm:text-[10px] sm:leading-[15px] 
        md:text-[12px] md:leading-[18px] 
        lg:text-[14px] lg:leading-[22px] 
        xl:text-[16px] xl:leading-[25px] 
        2xl:text-[18px] 2xl:leading-[28px]"
                                            name="name"
                                        />

                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="mb-2 w-full rounded-xl border border-white bg-transparent py-2 px-4 text-white shadow-md 
        text-[8.27px] leading-[13px] tracking-[1%] 
        sm:text-[10px] sm:leading-[15px] 
        md:text-[12px] md:leading-[18px] 
        lg:text-[14px] lg:leading-[22px] 
        xl:text-[16px] xl:leading-[25px] 
        2xl:text-[18px] 2xl:leading-[28px]"
                                            name="email"
                                        />

                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input
                                            type="tel"
                                            placeholder="Phone number"
                                            className="mb-2 w-full rounded-xl border border-white bg-transparent py-2 px-4 text-white shadow-md 
        text-[8.27px] leading-[13px] tracking-[1%] 
        sm:text-[10px] sm:leading-[15px] 
        md:text-[12px] md:leading-[18px] 
        lg:text-[14px] lg:leading-[22px] 
        xl:text-[16px] xl:leading-[25px] 
        2xl:text-[18px] 2xl:leading-[28px]"
                                            name="phone-number"
                                        />

                                    </div>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <textarea
                                        name="textarea"
                                        cols="30"
                                        rows="5"
                                        placeholder="Write a message"
                                        className="mb-2 w-full rounded-xl border border-white bg-transparent py-2 px-4 text-white shadow-md 
        text-[8.27px] leading-[13px] tracking-[1%] 
        sm:text-[10px] sm:leading-[15px] 
        md:text-[12px] md:leading-[18px] 
        lg:text-[14px] lg:leading-[22px] 
        xl:text-[16px] xl:leading-[25px] 
        2xl:text-[18px] 2xl:leading-[28px]"
                                    ></textarea>

                                </div>
                            </div>
                            <div className="text-center">
                                <Button className="py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12 w-full" text="Send" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />

                            </div>
                        </form>
                    </div>

                    <div className="hidden md:flex flex-col justify-center items-start text-left">
                        <div className="flex flex-col items-start gap-4">
                            <img src='starXCode.png' className='w-18 h-16' alt='StarXCode Logo' />
                            <p className="text-white text-4xl font-semibold">If you have any questions</p>
                            <p className="text-white text-4xl font-semibold">please do not hesitate to ask: </p>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <img src='fb.png' className='w-8 h-8 cursor-pointer transition-all hover:opacity-70' alt='Facebook Logo' />
                            <img src='insta.png' className='w-8 h-8 cursor-pointer transition-all hover:opacity-70' alt='Instagram Logo' />
                        </div>
                    </div>
                </div>
            </section>
            <Border />
        </>
    )
}
