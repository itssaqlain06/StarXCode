import React from 'react'
import Button from '../shared/Button'

export default function Pricing() {
    return (
        <>
            <div className="container py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-14">
                    <h1 className="text-5xl font-semibold leading-[94px] text-white">Plans</h1>
                </div>
                <div className="flex flex-wrap justify-between gap-10">
                    <div>
                        <div className="h-full bg-main p-10 rounded-3xl border-t-[3px] border-l-[1px] border-r-[1px] border-b-[0px] border-[#6AC6AD] flex flex-col relative overflow-hidden">

                            <div className="flex-grow">
                                <h2 className="text-5xl tracking-widest mb-1 font-semibold leading-[94px] text-white">Basic</h2>
                                <h1 className="text-7xl pb-4 mb-4 font-semibold text-white tracking-[3%]">$0
                                    <span className="text-sm font-normal text-[#E1E1E1]">Per user per month</span>
                                </h1>
                                <h1 className="text-2xl mb-4 font-normal text-white tracking-[3%]">Features that are included</h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                            </div>

                            <div className="flex justify-center mt-auto">
                                <Button text="Get Start" style={{ width: "176px", boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-full bg-main p-10 rounded-3xl border-t-[3px] border-l-[1px] border-r-[1px] border-b-[0px] border-[#DFB06E] flex flex-col relative overflow-hidden">

                            <div className="flex-grow">
                                <h2 className="text-5xl tracking-widest mb-1 font-semibold leading-[94px] text-white">Super</h2>
                                <h1 className="text-7xl pb-4 mb-4 font-semibold text-white tracking-[3%]">$15
                                    <span className="text-sm font-normal text-[#E1E1E1]">Per user per month</span>
                                </h1>
                                <h1 className="text-2xl mb-4 font-normal text-white tracking-[3%]">Features that are included</h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                            </div>

                            <div className="flex justify-center mt-auto">
                                <Button text="Buy" style={{ width: "176px", boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px]'>
                        <div className="h-full bg-main p-10 rounded-3xl border-t-[3px] border-l-[1px] border-r-[1px] border-b-[0px] border-[#33B5E2] flex flex-col relative overflow-hidden">

                            <div className="flex-grow">
                                <h2 className="text-5xl tracking-widest mb-1 font-semibold leading-[94px] text-white">Premium</h2>
                                <h1 className="text-7xl pb-4 mb-4 font-semibold text-white tracking-[3%]">$150
                                    <span className="text-sm font-normal text-[#E1E1E1]">Per user per month</span>
                                </h1>
                                <h1 className="text-2xl mb-4 font-normal text-white tracking-[3%]">Features that are included</h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#6AC6AD] text-white rounded-full flex-shrink-0 text-sm leading-[150px]">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                            </div>

                            <div className="flex justify-center mt-auto">
                                <Button text="Subscribe" style={{ width: "176px", boxShadow: "0px 0px 50px 0px rgba(255,255,255,0.3)" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="hr-line.png" alt="Rainbow" className='m-auto' />

        </>
    )
}
