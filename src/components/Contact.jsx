import React from 'react'
import Button from '../shared/Button'

export default function Contact() {
    return (
        <>
            <section className="container mx-auto my-20">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="card h-fit max-w-6xl p-5 md:p-12 bg-main rounded-3xl border-t-[3px] border-l-[1px] border-r-[1px] border-b-[0px] border-[#AE63C4]">
                        <h2 className="text-4xl font-bold text-white mb-2">Get in Touch</h2>
                        <h2 className="text-base text-[#DFDFDF] leading-6 mb-10">Contact us for any guidance and information.</h2>
                        <form>
                            <div className="mb-6">
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input type="text" placeholder="Name" className="mb-2 w-full rounded-xl border border-white bg-transparent py-2 px-4 text-white shadow-md sm:mb-0" name="name" />
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input type="email" placeholder="Email" className="mb-2 w-full rounded-xl border border-white bg-transparent py-2 px-4 text-white shadow-md sm:mb-0" name="email" />
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <input type="tel" placeholder="Phone number" className="mb-2 w-full rounded-xl border border-white bg-transparent py-2 px-4 text-white shadow-md sm:mb-0" name="phone-number" />
                                    </div>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <textarea name="textarea" cols="30" rows="5" placeholder="Write a message" className="mb-2 w-full rounded-xl border border-white bg-transparent py-2 px-4 text-white shadow-md sm:mb-0"></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <Button text="Send" style={{ width: '100%', boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col justify-center items-start text-left">
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
            <img src="hr-line.png" alt="Rainbow" className='m-auto' />
        </>
    )
}
