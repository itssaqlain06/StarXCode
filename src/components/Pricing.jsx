import React from 'react'
import Button from '../shared/Button'
import Border from '../shared/Border'

export default function Pricing() {
    return (
        <>
            <div className="px-6 md:px-0">
                <div className="flex flex-col justify-center text-center w-full my-10">
                    <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[48px] text-white font-normal">Plans</h1>
                </div>
                <div className="flex flex-wrap justify-around gap-16">
                    <div className='max-w-[484px] mx-h-[579px]'>
                        <div className="h-full bg-main p-10 rounded-3xl border-t-[3px] border-l-[1px] border-r-[1px] border-b-[0px] border-[#6AC6AD] flex flex-col relative overflow-hidden">

                            <div className="flex-grow">
                                <h2 className="tracking-widest mb-1 font-semibold text-[37px] leading-[74px] sm:text-[40px] sm:leading-[78px] md:text-[42px] md:leading-[82px] lg:text-[44px] lg:leading-[88px] xl:text-[46px] xl:leading-[92px] 2xl:text-[48px] 2xl:leading-[94px] text-white">Basic</h2>
                                <div className="flex justify-start gap-4">
                                    <h1 className="text-[71.03px] leading-[71.03px] sm:text-[75px] sm:leading-[85px] md:text-[80px] md:leading-[95px] lg:text-[85px] lg:leading-[105px] xl:text-[88px] xl:leading-[110px] 2xl:text-[90px] 2xl:leading-[113px] pb-4 mb-4 font-semibold text-white tracking-[3%]">$0</h1>
                                    <div className="mt-9">
                                        <p className="text-[11px] leading-[14px] sm:text-[12px] sm:leading-[15px] md:text-[12.5px] md:leading-[16px] lg:text-[13px] lg:leading-[17px] xl:text-[13.5px] xl:leading-[17.5px] 2xl:text-[14px] 2xl:leading-[18px] font-normal text-[#E1E1E1]">
                                            Per user &nbsp;
                                        </p>
                                        <p className="text-[11px] leading-[14px] sm:text-[12px] sm:leading-[15px] md:text-[12.5px] md:leading-[16px] lg:text-[13px] lg:leading-[17px] xl:text-[13.5px] xl:leading-[17.5px] 2xl:text-[14px] 2xl:leading-[18px] font-normal text-[#E1E1E1]">
                                            per month
                                        </p>
                                    </div>
                                </div>


                                <h1 className="text-[18.94px] leading-[24px] sm:text-[20px] sm:leading-[26px] md:text-[21px] md:leading-[27px] lg:text-[22px] lg:leading-[28px] xl:text-[23px] xl:leading-[29px] 2xl:text-[24px] 2xl:leading-[30px] mb-4 font-normal text-white tracking-[3%]">
                                    Features that are included
                                </h1>

                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                            </div>

                            <div className="flex justify-center mt-auto">
                                <Button className="py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12" text="Get Start" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[484px] mx-h-[734px]'>
                        <div className="h-full bg-main p-10 rounded-3xl border-t-[3px] border-l-[1px] border-r-[1px] border-b-[0px] border-[#DFB06E] flex flex-col relative overflow-hidden">

                            <div className="flex-grow">
                                <h2 className="tracking-widest mb-1 font-semibold text-[37px] leading-[74px] sm:text-[40px] sm:leading-[78px] md:text-[42px] md:leading-[82px] lg:text-[44px] lg:leading-[88px] xl:text-[46px] xl:leading-[92px] 2xl:text-[48px] 2xl:leading-[94px] text-white">Super</h2>
                                <div className="flex justify-start gap-4">
                                    <h1 className="text-[71.03px] leading-[71.03px] sm:text-[75px] sm:leading-[85px] md:text-[80px] md:leading-[95px] lg:text-[85px] lg:leading-[105px] xl:text-[88px] xl:leading-[110px] 2xl:text-[90px] 2xl:leading-[113px] pb-4 mb-4 font-semibold text-white tracking-[3%]">$15</h1>
                                    <div className="mt-9">
                                        <p className="text-[11px] leading-[14px] sm:text-[12px] sm:leading-[15px] md:text-[12.5px] md:leading-[16px] lg:text-[13px] lg:leading-[17px] xl:text-[13.5px] xl:leading-[17.5px] 2xl:text-[14px] 2xl:leading-[18px] font-normal text-[#E1E1E1]">
                                            Per user &nbsp;
                                        </p>
                                        <p className="text-[11px] leading-[14px] sm:text-[12px] sm:leading-[15px] md:text-[12.5px] md:leading-[16px] lg:text-[13px] lg:leading-[17px] xl:text-[13.5px] xl:leading-[17.5px] 2xl:text-[14px] 2xl:leading-[18px] font-normal text-[#E1E1E1]">
                                            per month
                                        </p>
                                    </div>
                                </div>


                                <h1 className="text-[18.94px] leading-[24px] sm:text-[20px] sm:leading-[26px] md:text-[21px] md:leading-[27px] lg:text-[22px] lg:leading-[28px] xl:text-[23px] xl:leading-[29px] 2xl:text-[24px] 2xl:leading-[30px] mb-4 font-normal text-white tracking-[3%]">
                                    Features that are included
                                </h1>

                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                            </div>

                            <div className="flex justify-center mt-auto">
                                <Button className="py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12" text="Buy" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[484px] mx-h-[734px]'>
                        <div className="h-full bg-main p-10 sm:p-10 rounded-3xl border-t-[3px] border-l-[1px] border-r-[1px] border-b-[0px] border-[#33B5E2] flex flex-col relative overflow-hidden">

                            <div className="flex-grow">
                                <h2 className="tracking-widest font-semibold text-[37px] leading-[74px] sm:text-[40px] sm:leading-[78px] md:text-[42px] md:leading-[82px] lg:text-[44px] lg:leading-[88px] xl:text-[46px] xl:leading-[92px] 2xl:text-[48px] 2xl:leading-[94px] text-white">Premium</h2>
                                <div className="flex justify-start gap-4">
                                    <h1 className="text-[71.03px] leading-[71.03px] sm:text-[75px] sm:leading-[85px] md:text-[80px] md:leading-[95px] lg:text-[85px] lg:leading-[105px] xl:text-[88px] xl:leading-[110px] 2xl:text-[90px] 2xl:leading-[113px] pb-4 mb-4 font-semibold text-white tracking-[3%]">$150</h1>
                                    <div className="mt-9">
                                        <p className="text-[11px] leading-[14px] sm:text-[12px] sm:leading-[15px] md:text-[12.5px] md:leading-[16px] lg:text-[13px] lg:leading-[17px] xl:text-[13.5px] xl:leading-[17.5px] 2xl:text-[14px] 2xl:leading-[18px] font-normal text-[#E1E1E1]">
                                            Per user &nbsp;
                                        </p>
                                        <p className="text-[11px] leading-[14px] sm:text-[12px] sm:leading-[15px] md:text-[12.5px] md:leading-[16px] lg:text-[13px] lg:leading-[17px] xl:text-[13.5px] xl:leading-[17.5px] 2xl:text-[14px] 2xl:leading-[18px] font-normal text-[#E1E1E1]">
                                            per month
                                        </p>
                                    </div>
                                </div>
                                <h1 className="text-[18.94px] leading-[24px] sm:text-[20px] sm:leading-[26px] md:text-[21px] md:leading-[27px] lg:text-[22px] lg:leading-[28px] xl:text-[23px] xl:leading-[29px] 2xl:text-[24px] 2xl:leading-[30px] mb-4 font-normal text-white tracking-[3%]">
                                    Features that are included
                                </h1>

                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-xs md:text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                            </div>

                            <div className="flex justify-center mt-auto">
                                <Button className="py-2 px-5 sm:py-3 sm:px-10 md:py-4 md:px-12" text="Subscribe" style={{ boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Border />
        </>
    )
}
